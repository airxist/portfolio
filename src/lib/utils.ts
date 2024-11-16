import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const LockScroll = () => (document.body.style.overflowY = "hidden");

export const UnlockScroll = () => (document.body.style.overflowY = "scroll");
