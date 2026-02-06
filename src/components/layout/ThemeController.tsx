'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useBrand, type Theme } from '@/context/BrandContext';

export default function ThemeController() {
    const pathname = usePathname();
    const { setTheme } = useBrand();

    useEffect(() => {
        let targetTheme: Theme = 'gateway';
        if (pathname.includes('/construction')) targetTheme = 'towerflex';
        else if (pathname.includes('/listone')) targetTheme = 'listone';
        else if (pathname.includes('/containers')) targetTheme = 'containers';
        else if (pathname.includes('/steel')) targetTheme = 'steel';

        setTheme(targetTheme);
    }, [pathname, setTheme]);

    return null;
}
