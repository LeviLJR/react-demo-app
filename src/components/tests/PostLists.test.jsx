// src/components/tests/PostList.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { PostList } from "../PostList";

it("displays items and calls onItemClick", () => {
  const items = [{ id: 1, title: "A" }, { id: 2, title: "B" }];
  const onItemClick = vi.fn();
  render(<PostList items={items} onItemClick={onItemClick} />);
  fireEvent.click(screen.getByRole("button", { name: "A" }));
  expect(onItemClick).toHaveBeenCalledWith(items[0]);
});
