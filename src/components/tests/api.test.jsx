// src/services/tests/api.test.js
import { getPosts, getPostById, getCommentsByPostId } from "../../services/api";

beforeEach(() => {
  global.fetch = vi.fn();
});

afterEach(() => {
  vi.restoreAllMocks();
});

it("getPosts retorna lista", async () => {
  fetch.mockResolvedValueOnce(new Response(JSON.stringify([{ id: 1 }]), { status: 200 }));
  const data = await getPosts();
  expect(Array.isArray(data)).toBe(true);
  expect(data[0].id).toBe(1);
});

it("getPostById retorna um post", async () => {
  fetch.mockResolvedValueOnce(new Response(JSON.stringify({ id: 7 }), { status: 200 }));
  const data = await getPostById(7);
  expect(data.id).toBe(7);
});

it("getCommentsByPostId returns comments", async () => {
  fetch.mockResolvedValueOnce(new Response(JSON.stringify([{ id: 10 }]), { status: 200 }));
  const data = await getCommentsByPostId(1);
  expect(data[0].id).toBe(10);
});
