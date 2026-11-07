"use client";

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      iconLeft,
      iconRight,
      fullWidth = true,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-ink-700 mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {iconLeft && (
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
              aria-hidden="true"
            >
              {iconLeft}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`
              w-full
              rounded-xl border
              bg-white
              text-ink-900
              placeholder:text-stone-400
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500
              disabled:bg-cream-warm disabled:cursor-not-allowed
              ${iconLeft ? "pl-10" : "pl-4"}
              ${iconRight ? "pr-10" : "pr-4"}
              py-3
              ${error ? "border-red-400 focus:border-red-500 focus:ring-red-500/30" : "border-line-strong hover:border-emerald-300"}
              ${className}
            `}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />
          {iconRight && (
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
              aria-hidden="true"
            >
              {iconRight}
            </div>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-sm text-stone-500">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      hint,
      fullWidth = true,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-ink-700 mb-1.5"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`
            w-full
            rounded-xl border
            bg-white
            text-ink-900
            placeholder:text-stone-400
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500
            disabled:bg-cream-warm disabled:cursor-not-allowed
            p-4
            resize-y min-h-[100px]
            ${error ? "border-red-400 focus:border-red-500 focus:ring-red-500/30" : "border-line-strong hover:border-emerald-300"}
            ${className}
          `}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${textareaId}-hint`} className="mt-1.5 text-sm text-stone-500">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      hint,
      placeholder,
      options,
      fullWidth = true,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-ink-700 mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`
              w-full
              rounded-xl border
              bg-white
              text-ink-900
              appearance-none
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500
              disabled:bg-cream-warm disabled:cursor-not-allowed
              pl-4 pr-10 py-3
              ${error ? "border-red-400 focus:border-red-500 focus:ring-red-500/30" : "border-line-strong hover:border-emerald-300"}
              ${className}
            `}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
        {error && (
          <p id={`${selectId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${selectId}-hint`} className="mt-1.5 text-sm text-stone-500">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, className = "", id, ...props }, ref) => {
    const checkboxId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={`
            mt-1 h-5 w-5
            rounded-lg border
            text-emerald-600
            focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:ring-offset-2
            transition-colors duration-200
            ${error ? "border-red-400" : "border-line-strong"}
            ${className}
          `}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${checkboxId}-error` : description ? `${checkboxId}-desc` : undefined}
          {...props}
        />
        <div>
          <label
            htmlFor={checkboxId}
            className="text-sm font-medium text-ink-700 cursor-pointer"
          >
            {label}
          </label>
          {description && (
            <p id={`${checkboxId}-desc`} className="mt-0.5 text-sm text-stone-500">
              {description}
            </p>
          )}
          {error && (
            <p id={`${checkboxId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export interface RadioGroupProps {
  label: string;
  options: { value: string; label: string; description?: string }[];
  error?: string;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ label, options, error, name, value, onChange, className = "", ...props }, ref) => {
    const groupId = name;

    return (
      <fieldset
        ref={ref}
        className={`${className}`}
        {...props}
      >
        <legend className="text-sm font-medium text-ink-700 mb-3">{label}</legend>
        <div className="space-y-3" role="radiogroup" aria-labelledby={`${groupId}-label`} aria-describedby={error ? `${groupId}-error` : undefined}>
          {options.map((opt) => (
            <label key={opt.value} className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange?.(opt.value)}
                className={`
                  mt-1 h-5 w-5
                  text-emerald-600
                  focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:ring-offset-2
                  border-line-strong
                `}
              />
              <div>
                <span className="text-sm font-medium text-ink-700">{opt.label}</span>
                {opt.description && (
                  <p className="mt-0.5 text-sm text-stone-500">{opt.description}</p>
                )}
              </div>
            </label>
          ))}
        </div>
        {error && (
          <p id={`${groupId}-error`} className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </fieldset>
    );
  }
);

RadioGroup.displayName = "RadioGroup";