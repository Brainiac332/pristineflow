"use client";

import React, { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      children,
      icon,
      iconPosition = "right",
      className = "",
      disabled,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-sm",
      secondary:
        "bg-ink-900 text-cream hover:bg-ink-800 active:bg-ink-900 shadow-sm",
      outline:
        "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100",
      ghost:
        "text-ink-700 hover:bg-ink-100 active:bg-ink-200",
      whatsapp:
        "bg-[#25D366] text-white hover:bg-[#1EBE5A] active:bg-[#18A54E] shadow-sm flex gap-2",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5",
      md: "px-6 py-3 text-base gap-2",
      lg: "px-8 py-4 text-lg gap-2.5",
    };

    const width = fullWidth ? "w-full" : "";

    const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`;

    if (asChild && typeof children === "object" && children !== null && "type" in children) {
      return React.cloneElement(children as React.ReactElement<any>, {
        ...props,
        ref,
        className: `${buttonStyles} ${(children as React.ReactElement<any>).props.className || ""}`,
        disabled: disabled || loading,
      } as any);
    }

    return (
      <button
        ref={ref}
        className={buttonStyles}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : icon && iconPosition === "left" ? (
          <span className="flex-shrink-0" aria-hidden="true">{icon}</span>
        ) : null}
        <span>{children}</span>
        {!loading && icon && iconPosition === "right" && (
          <span className="flex-shrink-0" aria-hidden="true">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";