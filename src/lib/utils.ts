import { DaysInMonthProps } from "@/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function daysInMonth({month, year = new Date().getFullYear()}: DaysInMonthProps) {
    return new Date(year, month, 0).getDate();
}