import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'

const BackToTop = () => {
    const [showBtn, setShowBtn] = useState(false);

    function scrollToTop(e) {
        e.preventDefault();
        
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
        <a href="/" onClick={scrollToTop} className={`back_to_top ${showBtn ? 'm-show' : ''}`}>
            <FaArrowUp size={24} />
        </a>
    );
};

export default BackToTop;