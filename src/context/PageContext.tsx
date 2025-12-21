import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageContextType {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const PageContext = createContext<PageContextType | null>(null);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState("/");

    useEffect(() => {
        const rawPath =
            location.pathname === "/" && location.hash.startsWith("#/")
                ? location.hash.replace("#", "")
                : location.pathname;
        if (rawPath.startsWith("/velog/")) {
            setCurrentPage("/velog");
            return;
        }
        setCurrentPage(rawPath || "/");
    }, [location.pathname, location.hash]);

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </PageContext.Provider>
    );
};

export const usePageContext = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error("usePageContext must be used within a PageProvider");
    }
    return context;
};
