'use client'

import useOnClickOutside from "@/hooks/useOnClickOutside";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react"
import { MdOutlineClose } from "react-icons/md";

export default function Navigation({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        document.body.classList.toggle('modal-open', isOpen);
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useOnClickOutside(ref, () => setIsOpen(false));
    
    return (
        <>
            <div 
                className="hamburger_button"
                title="Show navigation"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg width="28" height="20" viewBox="0 0 28 20" focusable="false">
                    <path fillRule="evenodd" fill="currentColor" d="M0 0h28v2H0zm0 9h28v2H0zm0 9h28v2H0z"></path>
                </svg>

                <span className="hamburger_button-text">Show navigation</span>
            </div>

            <div className={`main_navigation ${isOpen ? 'open' : ''}`}>
                <div 
                    className={`main_navigation-dialog ${isOpen ? 'open' : ''}`}
                    ref={ref}
                >
                    <div className="main_navigation-header">
                        <span 
                            className="main_navigation-close"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <MdOutlineClose size={24} />
                        </span>
                    </div>

                    {children}
                </div>
            </div>
        </>
    )
}
