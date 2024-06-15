import React, { type CSSProperties } from 'react'

export default function GridLayout({
    children,
    style
}: Readonly<{
    children: React.ReactNode,
    style?: React.CSSProperties 
}>) {
    return (
        <div className="grid_layout" style={style}>
            <div className="grid_layout-content">
                {children}
            </div>
        </div>
    )
}
