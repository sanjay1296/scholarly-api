let app = require("./server");
require("@babel/polyfill");

describe("api", () => {
  describe("get /api/schools", () => {
    it("should return a 200", () => {
      request(app)
        .get("/api/schools")
        .then((res) => {
          expect(res.statusCode).toBe(200);
        });
    });
  });
});
