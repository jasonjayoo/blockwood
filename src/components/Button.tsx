 import { cva, VariantProps } from "class-variance-authority"
 import { ComponentProps } from "react";
 import { twMerge } from "tailwind-merge"
 
 export const buttonStyles = cva([ "transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-black", "hover:text-white", "dark:bg-neutral-100", "dark:text-black", "dark:hover:bg-neutral-300", "dark:hover:text-black"],
            ghost: ["hover:bg-gray-100", "dark:hover:bg-gray-800"],
            dark: ["bg-secondary-dark", "hover:bg-black", "hover:text-white", "text-secondary", "dark:hover:bg-neutral-100", "dark:hover:text-black" ],
        },
        size: {
            default: ["rounded", "p-2"],
            icon: ["rounded-full", "w-[34px]", "h-[34px]", "md:w-10", "md:h-10", "flex", "items-center", "justify-center", "p-2"],
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
 }); 
 
 type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">
 
 export function Button( {variant, size, className, ...props }: ButtonProps ){
    return <button {...props} className={twMerge(buttonStyles({ variant, size }), className)}/>
 }