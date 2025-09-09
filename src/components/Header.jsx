/* src/components/Header.jsx */

import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ title, tagline, lang, onLanguageChange, search, onSearch }) {
  return (
    <header className="header">
      <h1 className="logo">{title}</h1>
      {tagline && <p className="tagline">{tagline}</p>}

      <div className="toolbar">
        <input
          className="form-control form-control-sm"
          placeholder={search.placeholder}
          value={search.value}
          onChange={e => onSearch(e.target.value)}
          style={{ maxWidth: 360 }}
        />
        <LanguageSwitcher value={lang} onChange={onLanguageChange} />
      </div>
    </header>
  );
}
