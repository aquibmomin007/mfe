import { mount as marketingMount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export const MarketingApp = () => {
    const appRef = useRef(null);

    useEffect(() => {
        marketingMount(appRef.current);
    })

    return (
        <div ref={appRef}></div>
    )
}