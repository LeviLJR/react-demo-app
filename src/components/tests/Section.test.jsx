import React from "react";
import { render, screen } from "@testing-library/react";

import { describe, it, expect } from "vitest";
import { Section } from "../Section";
import { Button } from "../Button";

describe("Section component", () => {
  it("renders header text when provided", () => {
    render(
      <Section header="Posts">
        <p>Content</p>
      </Section>
    );
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });

  it("renders right element when provided", () => {
    render(
      <Section
        header="Header"
        right={<Button onClick={() => {}}>Click me</Button>}
      >
        <p>Children</p>
      </Section>
    );
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <Section>
        <p>Child content</p>
      </Section>
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });
});
