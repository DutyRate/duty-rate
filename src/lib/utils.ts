import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stringRole(role:number):string{
  switch(role){
    case 1:
      return "Admin role"
    case 2:
      return "User role"
    default:
      return "User role"
  }
}
