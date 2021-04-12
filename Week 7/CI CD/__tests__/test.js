const request = require("supertest");
const app = require("../app");
const { user, transaksi, barang, pelanggan, pemasok } = require("../models");

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

  describe("/GET/:id transaksi", () => {
    it("it should GET one transaksi", async () => {
      let transaksiPost = await transaksi.create({
        barang: "5fccb45e683964d75bd4d3bc",
        pelanggan: "5fccb3f6683964d75bd4d3b6",
        jumlah: "20",
      });
      const res = await request(app)
        .post("/transaksi")
        .send(transaksiPost)
        .set({
          Authorization: `Bearer ${authenticationToken}`,
        });

      expect(res.statusCode).toEqual(404);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toEqual("Transaksi Not Found");
    });
  });
  /*
   * Test the /POST route
   */
  describe("/POST transaksi", () => {
    it("it should POST a transaksi", async () => {
      const res = await request(app)
        .post("/transaksi/")
        .set({
          Authorization: `Bearer ${authenticationToken}`,
        })
        .send({
          id_barang: "5fccb45e683964d75bd4d3bc",
          id_pelanggan: "5fccb416683964d75bd4d3b8",
          jumlah: 20,
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toBeInstanceOf(Object);
    });
  });
  /*
   * Test the /PUT/:id route
   */
  describe("/PUT/:id transaksi", () => {
    it("it should UPDATE a transaksi given the id", async () => {
      const res = await request(app)
        .put(`/transaksi/${id_transaksi}`)
        .set({
          Authorization: `Bearer ${authenticationToken}`,
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toBeInstanceOf(Object);
      expect(res.body.data._id).toEqual(id_transaksi);
    });
  });
  /*
   * Test the /DELETE/:id route
   */
  describe("/DELETE/:id transaksi", () => {
    it("it should DELELTE one the transaksi", async () => {
      const res = await request(app)
        .delete(`/transaksi/${id_transaksi}`)
        .set({
          Authorization: `Bearer ${authenticationToken}`,
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
    });
  });
});
