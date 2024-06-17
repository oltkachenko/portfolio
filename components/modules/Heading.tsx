import React from 'react'

interface Props {
    data: {
        title?: string | undefined;
        subtitle?: string | undefined;
        alignment?: string | null;
    }
}

export default function Heading({ data }: Props) {
    return (
        <>
        {(data.title || data.subtitle) && (
            <div className={`module_heading m-${data.alignment ? data.alignment : 'center'}`}>
                {data.title && (
                    <h2 className="module_heading-title">{data.title}</h2>
                )}

                {data.subtitle && (
                    <p className="module_heading-subtitle">{data.subtitle}</p>
                )}
            </div>
        )}
        </>
    )
}
