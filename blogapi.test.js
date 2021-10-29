const request = require("supertest");

const baseUrl = "http://localhost:3001/api";

describe("blog endpoint", () => {
  it("get all blogs should return a 200 status code", async () => {
    const response = await request(baseUrl).get("/blogs");
    expect(response.statusCode).toBe(200);
  });
  it("get all blogs should return an array of blog objects with title and content properties", async () => {
    const response = await request(baseUrl).get("/blogs");
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty("title");
    expect(response.body[0]).toHaveProperty("content");
  });
  it("get single blog should return a 200 status code", async () => {
    const response = await request(baseUrl).get("/blogs/IDC");
    expect(response.statusCode).toBe(200);
  });
  it("get single blogs should return correct blog object with title and content properties", async () => {
    const response = await request(baseUrl).get("/blogs/IDC");
    expect(response.body.title).toBe("IDC");
    expect(response.body).toHaveProperty("content");
  });
  it("post blog returns a 20 status code", async () => {
    const data = { title: "Test blog", content: "Hello this is a jest test" };
    const response = await request(baseUrl).post("/blogs").send(data);
    expect(response.statusCode).toBe(201);
  });
});
