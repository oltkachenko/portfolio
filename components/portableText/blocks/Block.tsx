import type { PortableTextBlock } from "@portabletext/types";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  value: PortableTextBlock;
};

export default function Block({ children, value }: Props) {
    if (value.style === "h1") {
        return (
            <h1 className='h1'>
                {children}
            </h1>
        );
    }

    if (value.style === "h2") {
        return (
            <h2 className='h2'>
                {children}
            </h2>
        );
    }

    if (value.style === "h3") {
        return (
            <h3 className='h3'>
                {children}
            </h3>
        );
    }

    if (value.style === "h4") {
        return (
            <h4 className='h4'>
                {children}
            </h4>
        );
    }

    if (value.style === "h5") {
        return (
            <h5 className='h5'>
                {children}
            </h5>
        );
    }

    if (value.style === "h6") {
        return (
            <h6 className='h6'>
                {children}
            </h6>
        );
    }

    if (value.style === "blockquote") {
        return (
            <blockquote className='blockquote'>
                {children}
            </blockquote>
        );
    }

    // Pragraphs
    return (
        <p>
            {children}
        </p>
    );
}
