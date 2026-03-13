import { Button as HeadlessButton } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import type React from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ButtonProps = React.ComponentProps<typeof HeadlessButton>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <HeadlessButton
      {...props}
      className={cn(
        // 基本スタイル
        "inline-flex items-center justify-center px-5 py-2 shadow-md transition-all",
        "cursor-pointer active:scale-95",
        // デフォルトカラー
        "bg-slate-500 text-white data-hover:bg-slate-600",
        className,
      )}
    >
      {children}
    </HeadlessButton>
  );
};
