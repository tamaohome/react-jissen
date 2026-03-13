import { Button as HeadlessButton } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import type React from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const variantClasses: Record<string, string> = {
  danger: "bg-red-500 data-hover:bg-red-600 text-white",
  warning: "bg-yellow-500 data-hover:bg-yellow-600 text-gray-900",
  normal: "bg-slate-500 text-white data-hover:bg-slate-600",
  submit: "bg-slate-500 text-white data-hover:bg-slate-600",
  cancel: "bg-slate-400 text-white data-hover:bg-slate-500",
};

type ButtonVariants = {
  // ボタンの種類を示す属性
  variant?: "normal" | "submit" | "cancel" | "warning" | "danger";
};

export type ButtonProps = React.ComponentProps<typeof HeadlessButton> &
  ButtonVariants;

export const Button = ({
  children,
  className,
  disabled,
  variant = "normal",
  ...props
}: ButtonProps) => {
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
};
