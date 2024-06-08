import React from 'react'

export default function GridLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="grid_layout">
            <div className="grid_layout-content">
                {children}
            </div>
        </div>
    )
}
