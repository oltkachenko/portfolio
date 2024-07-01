'use client'

import { useState } from "react"
import { MdViewList, MdViewModule } from "react-icons/md";

export default function ViewSwitcher({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [view, setView] = useState<string>('grid');

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = (event.target as HTMLElement)?.closest('.view_switcher-control') as HTMLElement;
        
        if (!target) return;
        
        setView(target.dataset.view || view);
    }

    return (
        <div className={`view_switcher_grid m-${view}`} >
            <div 
                className="view_switcher"
                onClick={handleClick}
            >
                <span className="view_switcher-control" data-view="grid">
                    <MdViewModule size={24} />
                </span>
                <span className="view_switcher-control" data-view="list">
                    <MdViewList size={24} />
                </span>
            </div>

            {children}
        </div>
    )
}
