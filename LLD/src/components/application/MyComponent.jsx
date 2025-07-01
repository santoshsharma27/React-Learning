import React from "react";
import { nanoid } from "nanoid";

export default function MyComponent() {
  const id = nanoid();
  return <div data-testid="unique-id">{id}</div>;
}
