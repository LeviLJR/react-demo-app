
import { render, screen, fireEvent } from "@testing-library/react";
import { PostCard } from "../PostCard";

it("render title and body, call onClick", () => {
  const post = { id: 1, title: "Hello", body: "World" };
  const onClick = vi.fn();
  render(<PostCard post={post} onClick={onClick} />);
  fireEvent.click(screen.getByRole("button", { name: /hello/i }));
  expect(onClick).toHaveBeenCalled();
  expect(screen.getByText("World")).toBeInTheDocument();
});
