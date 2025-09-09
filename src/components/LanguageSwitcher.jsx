/* src/components/LanguageSwitcher.jsx */
import React from 'react';

export default function LanguageSwitcher({ value, onChange }) {
  return (
    <div className="lang-switch">
      <span className="lang-flag">{value === 'el' ? '🇬🇷' : '🇬🇧'}</span>
      <div className="lang-select-wrap">
        <select
          className="lang-select"
          value={value}
          onChange={e => onChange(e.target.value)}
        >
          <option value="el">Ελληνικά</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
}
