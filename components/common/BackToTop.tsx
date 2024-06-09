'use client'

import Link from 'next/link';
import React, { useEffect, useState, type MouseEvent } from 'react';
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
    const [showBtn, setShowBtn] = useState(false);

    function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    function toggleBtnVisibility() {
        setTimeout(() => {
            const scrolled = document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const isBtnVisible = scrolled > windowHeight;

            setShowBtn(isBtnVisible)
        }, 100)
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleBtnVisibility)

        return () => {
            window.removeEventListener('scroll', toggleBtnVisibility);
        };
    }, [])

    return (
        <Link href="/" onClick={scrollToTop} className={`back_to_top ${showBtn ? 'm-show' : ''}`}>
            <FaArrowUp size={16} />
        </Link>
    );
};
