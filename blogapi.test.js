const request = require("supertest");

const baseUrl = "http://localhost:3001/api";

describe("blog endpoint", () => {
  it("should return a 200 status code", async () => {
    const response = await request(baseUrl).get("/blogs");
    expect(response.statusCode).toBe(200);
  });
});
