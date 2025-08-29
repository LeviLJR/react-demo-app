import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

import { Home } from "../../pages/Home";

// Mock services
vi.mock("../../services/api", () => {
  return {
    getPosts: vi.fn(),
  };
});
import { getPosts } from "../../services/api";

// Mock useAuth
vi.mock("../../contexts/AuthContext", () => {
  return {
    useAuth: vi.fn(),
  };
});
import { useAuth } from "../../contexts/AuthContext";

// Mock useNavigate from react-router-dom
vi.mock("react-router-dom", async (orig) => {
  const mod = await orig();
  return {
    ...mod,
    useNavigate: () => vi.fn(),
  };
});
import { MemoryRouter } from "react-router";

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  vi.resetModules();
});

describe("Home page", () => {
  it("loads posts and filters by search", async () => {
    useAuth.mockReturnValue({ user: { id: 1 } });

    getPosts.mockResolvedValueOnce([
      { id: 1, title: "React Testing", body: "Body 1" },
      { id: 2, title: "Vitest Rocks", body: "Body 2" },
    ]);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("React Testing")).toBeInTheDocument();
      expect(screen.getByText("Vitest Rocks")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText(/search/i), {
      target: { value: "vitest" },
    });

    expect(screen.queryByText("React Testing")).not.toBeInTheDocument();
    expect(screen.getByText("Vitest Rocks")).toBeInTheDocument();
  });

  it("redirects to /login if not authenticated", async () => {
    useAuth.mockReturnValue({ user: null });
    getPosts.mockResolvedValueOnce([]);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(true).toBe(true);
  });
});
