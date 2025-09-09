/* src/components/ScrollToTop.jsx  */

import React from 'react';

export default function ScrollToTop() {
  const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className="scroll-indicator" onClick={onClick} role="button" aria-label="Back to top">
      <div className="scroll-arrow" />
    </div>
  );
}
