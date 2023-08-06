/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Label({ value, children, ...props }: any) {
    return (
        <label {...props} className="mb-1 block text-slate-500">
            {value || children}
        </label>
    )
}
