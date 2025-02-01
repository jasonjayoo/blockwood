 import { cva } from "class-variance-authority"
 
 
 const buttonStyles = cva(["hover:bg-secondary-hover", "transition-colors"], {
    variants: {
        size: {
            default: [],
            icon: ["rounded-full", "w-10", "h-10", "flex", "item-center", "justify-center"],
        }
    }
 }) 
 
const classes = buttonStyles({ size: "icon"})
 
 export function Button(){
    return <button />
 }