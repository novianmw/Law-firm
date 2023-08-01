/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Card({children}: any) {
    return (
        <div className="my-5 overflow-hidden rounded-xl bg-white shadow">
            {children}
        </div>
    )
}

function Title({children}: any) {
    return (
        <div className="border-b-2 p-5">
            <h1 className="text-2xl">
                {children}
            </h1>
        </div>
    )
}

function Body({children}: any) {
    return (
        <h1 className="p-5 leading-relaxed">
            {children}
        </h1>
    )
}

function Footer({children}: any) {
    return (
        <div className="bg-slate-50 p-5">
            {children}
        </div>
    )
}

Card.Title = Title
Card.Body = Body
Card.Footer = Footer