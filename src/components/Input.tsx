import { forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ type = 'text', ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className="transition duration-300 w-full focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 rounded-lg border-2 border-slate-300 shadow-sm px-3"
            type={type}
        />
    )
})

export default Input
