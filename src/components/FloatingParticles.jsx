/*  src/components/FloatingParticles.jsx */

import React, { useMemo } from 'react';

export default function FloatingParticles({ count = 20 }) {
  const particles = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      key: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      dur: 10 + Math.random() * 10
    })), [count]
  );

  return (
    <div className="floating-particles">
      {particles.map(p => (
        <div
          key={p.key}
          className="particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`
          }}
        />
      ))}
    </div>
  );
}
