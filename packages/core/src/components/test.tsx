import * as React from "react";

export interface TestProps {
  children?: React.ReactNode;
}

export const Test: React.FC<TestProps> = ({ children }) => {
  return <div>{children}</div>;
};
