import type { ComponentProps } from "react";

export function Button({ children, ...rest }: ComponentProps<"button">) {
  return (
    <button
      className="bg-primary-700 text-white px-4 py-2 rounded-full"
      {...rest}
    >
      {children}
    </button>
  );
}
