import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router";

import * as DetailModule from "../../pages/Detail";
const Detail = DetailModule.Detail || DetailModule.default;

vi.mock("../../services/api", () => ({
  getPostById: vi.fn(),
  getCommentsByPostId: vi.fn(),
}));
import { getPostById, getCommentsByPostId } from "../../services/api";

vi.mock("../../contexts/AuthContext", () => ({
  useAuth: vi.fn(),
}));
import { useAuth } from "../../contexts/AuthContext";

describe("Detail page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    useAuth.mockReturnValue({ user: { id: 123 } });
  });

  it("renders post and its comments", async () => {
    getPostById.mockResolvedValueOnce({ id: 1, title: "Post", body: "Body" });
    getCommentsByPostId.mockResolvedValueOnce([
      { id: 11, name: "Jane", email: "jane@test.com", body: "Nice!" },
    ]);

    render(
      <MemoryRouter initialEntries={["/detail/1"]}>
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </MemoryRouter>
    );
    
    const heading = await screen.findByRole("heading", { name: /post/i });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();

    const comment = await screen.findByText("Nice!");
    expect(comment).toBeInTheDocument();
  });
});
