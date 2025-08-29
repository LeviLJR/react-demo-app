// src/components/tests/CommentList.test.jsx
import { render, screen } from "@testing-library/react";
import { CommentList } from "../CommentList";

it("mostra mensagem quando não há comentários", () => {
  render(<CommentList items={[]} />);
  expect(screen.getByText(/no comments/i)).toBeInTheDocument();
});
