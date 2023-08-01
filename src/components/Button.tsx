/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    text?: string;
}

export default function Button({ children, text, onClick, type = "submit", ...props}: ButtonProps) {
    return (
        <button 
            {...props} 
            type={type} 
            className={`inline-flex whitespace-nowrap items-center justify-center gap-2 px-4 h-10 text-white [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-1 ${props.className}`}
            onClick={onClick}>
            {text || children}
        </button>
    )
}