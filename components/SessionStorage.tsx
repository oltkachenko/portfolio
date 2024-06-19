'use client'

import { useEffect } from "react";

export default function SessionStorage(data: any) {
    console.log(data);
    
    useEffect(() => {
        sessionStorage.setItem("translation", JSON.stringify(data));
    }, [data])

    return null
}
