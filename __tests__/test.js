const request = require("supertest");
const app = require("../app");
const { user, transaksi, barang, pelanggan, pemasok } = require("../models");

let authenticationToken;
let transaksi_id;

const deleteAll = async () => {
  await Promise.all([user.deleteMany(), transaksi.deleteMany()]);
};

deleteAll();

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
    });
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

  describe("pelanggan Test", ()=> {
    describe("/pelanggan GET", ()=> {
      it("it should success get the pelanggan data", async ()=> {
        const res = await request(app)
          .get('/pelanggan')
          .set({
            Authorization: `Bearer ${authenticationToken}`,
          });
          
        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
        expect(res.body.message).toEqual("Success")
        expect(res.body).toHaveProperty("data")
      })
      it("it should not success get the pelanggan data", async ()=> { 
        const id_pelanggan = '6066b20cbf303e6159586d30'
        const res = await request(app)
          .get(`/pelanggan/${id_pelanggan}`)
          .set({
            Authorization: `Bearer ${authenticationToken}`,
          });
        
        expect(res.statusCode).toEqual(404)
        expect(res.body).toBeInstanceOf(Object)
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toEqual(`Pelanggan ${id_pelanggan} Not Found`)
      })
    })


    describe("/pelanggan POST", ()=> {
      it("it should success post the pelanggan data", async ()=> {
        const res = await request(app)
          .post('/pelanggan')
          .send({
            name: "Abie",
            email: "abie@gmail.com",   
            mobile_phone: "081381238"         
          })
          .set({
            Authorization: `Bearer ${authenticationToken}`,
          });
          
        
        expect(res.statusCode).toEqual(201)
        expect(res.body).toBeInstanceOf(Object)
        expect(res.body.message).toEqual("Success")
        expect(res.body).toHaveProperty("data")
      })
  
    })

    describe("/pelanggan PUT", ()=> {
      it("it should success UPDATE the pelanggan data", async ()=> {
        const id_pelanggan = '6073f2105e09029afb71aca5'
        const res = await request(app)
          .put(`/pelanggan/${id_pelanggan}`)
          .send({
            name: "Reza",
            email: "reza@gmail.com",   
            mobile_phone: "081381238111"         
          })
          .set({
            Authorization: `Bearer ${authenticationToken}`,
          });
          
        
        expect(res.statusCode).toEqual(201)
        expect(res.body).toBeInstanceOf(Object)
        expect(res.body.message).toEqual("Success")
        expect(res.body).toHaveProperty("data")
      })
  
    })
    describe("/pelanggan DELETE", ()=> {
      it("it should success DELETE the pelanggan data", async ()=> {
        const id_pelanggan = '6073f2994f19a59c1957a120'
        const res = await request(app)
          .delete(`/pelanggan/${id_pelanggan}`)
          .set({
            Authorization: `Bearer ${authenticationToken}`,
          });
          
        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
        expect(res.body.message).toEqual("Success")
      })
  
    })
  })
  