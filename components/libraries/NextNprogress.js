'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function NextNprogress ({ children }) {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#fffd00"
                options={{ showSpinner: true }}
                shallowRouting
            />
        </>
    );
};


// : { children: React.ReactNode }