'use client';

import { useEffect, useState } from 'react';

export function HydrationTest() {
  const [hydrated, setHydrated] = useState(false);
  
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 8,
        left: 8,
        zIndex: 99999,
        padding: '4px 8px',
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 'bold',
        background: hydrated ? '#22c55e' : '#ef4444',
        color: 'white',
        pointerEvents: 'none',
      }}
    >
      {hydrated ? 'JS: OK' : 'JS: LOADING'}
    </div>
  );
}
