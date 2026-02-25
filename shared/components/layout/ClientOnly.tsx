"use client";

import { useEffect, useState } from "react";

/**
 * ClientOnly component ensures that its children are only rendered on the client side.
 * This effectively prevents hydration mismatches and disables SSR/SSG for the wrapped content.
 */
export default function ClientOnly({ children }: { children: React.ReactNode }) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null; // Or a loading spinner if preferred
    }

    return <>{children}</>;
}
