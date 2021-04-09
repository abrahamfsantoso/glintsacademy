const request = require("supertest");
const app = require("../app");
const { user, transaksi } = require("../models");

let authenticationToken;

beforeAll(async () => {
  await Promise.all([user.deleteMany(), transaksi.deleteMany()]);
});
const deleteAllData = async () => {
  await user.deleteMany();
};

deleteAllData();

describe("Auth Test", () => {
  describe("/auth/signup POST", () => {
    it("It should make user and get the token", async () => {
      const res = await request(app).post("/auth/signup").send({
        email: "abie@gmail.com",
        password: "Abie1234!!",
        confirmPassword: "Abie1234!!",
        nama: "Abie",
      });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("Success");
      expect(res.body).toHaveProperty("token");
    });
  });
});

// Test the error
describe("/auth/signup POST", () => {
  it("It should error when make user", async () => {
    const res = await request(app).post("/auth/signup").send({
      email: "abie@gmail.com",
      password: "Abie1234!!",
      confirmPassword: "Abie1234!!",
      name: "Abie",
    });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body.message).toEqual("User can't be created");
  });
});

describe("/POST Sign In", () => {
  it("It should make user login and get authentication_key (jwt)", async () => {
    const res = await request(app).post("/auth/signin").send({
      email: "abie@gmail.com",
      password: "Abie1234!!",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body.message).toEqual("Success");
    expect(res.body).toHaveProperty("token");

    authenticationToken = res.body.token;
    console.log(authenticationToken);
  });
});
describe("Transaksi Test", () => {
  /*
   * Test the first /GET route
   * There are no data
   */
  describe("/GET transaksi", () => {
    it("it should GET all the transaksi", async () => {
      const res = await request(app)
        .get("/transaksi")
        .set({
          Authorization: `Bearer ${authenticationToken}`,
        });

      expect(res.statusCode).toEqual(404);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toEqual("Transaksi Not Found");
    });
  });
});
