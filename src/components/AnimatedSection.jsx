'use client';

import React, { useRef } from 'react';
import { useOnScreen } from '@/hooks/useOnScreen';

// Wrapper component to apply scroll animations to sections
export default function AnimatedSection({ children, id, className = '' }) {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section
            id={id}
            ref={ref}
            className={`${className} transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </section>
    );
};
