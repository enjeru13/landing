// src/components/ui/Button.jsx
import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const Button = ({ children, variant = "primary", className, ...props }) => {
  const baseStyles =
    "font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg text-base cursor-pointer flex items-center justify-center gap-2 active:scale-95";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-dark text-white shadow-primary/25 hover:shadow-primary/40",
    outline:
      "bg-transparent border border-gray-200 dark:border-gray-700 hover:border-primary text-text-main dark:text-white hover:bg-background-light dark:hover:bg-surface-dark",
    ghost: "bg-transparent text-text-muted hover:text-primary shadow-none p-0",
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], className))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
