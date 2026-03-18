import { Button as HeadlessButton } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import type React from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const variantClasses = {
  normal: clsx("bg-slate-500 text-white data-hover:bg-slate-600"),
  info: clsx("bg-blue-600 text-white data-hover:bg-blue-700"),
  success: clsx("bg-emerald-600 text-white data-hover:bg-emerald-700"),
  warning: clsx("bg-yellow-500 data-hover:bg-yellow-600 text-gray-900"),
  danger: clsx("bg-red-500 data-hover:bg-red-600 text-white"),
  cancel: clsx("bg-slate-400 text-white data-hover:bg-slate-500"),
} as const;

type ButtonVariants = {
  // ボタンの種類を示す属性
  variant?: keyof typeof variantClasses;
};

export type ButtonProps = React.ComponentProps<typeof HeadlessButton> &
  ButtonVariants;

export function Button({
  children,
  className,
  disabled,
  variant = "normal",
  ...props
}: ButtonProps) {
  return (
    <HeadlessButton
      disabled={disabled}
      {...props}
      className={cn(
        "inline-flex items-center justify-center px-5 py-2 shadow-md transition-all",
        !disabled && "cursor-pointer active:scale-95",
        disabled ? "bg-slate-400 text-white" : variantClasses[variant],
        className,
      )}
    >
      {children}
    </HeadlessButton>
  );
}
