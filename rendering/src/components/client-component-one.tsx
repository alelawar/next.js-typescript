"use client"


export const ClientComponentOne = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <h1>Client Component one</h1>
            {children}
        </>
    )
}