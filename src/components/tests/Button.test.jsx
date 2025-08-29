import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

it("call onClick when clicking", () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Sign out</Button>);
  fireEvent.click(screen.getByRole("button", { name: /sign out/i }));
  expect(onClick).toHaveBeenCalledTimes(1);
});
