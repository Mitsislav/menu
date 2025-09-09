/* src/components/CategoryPills.jsx */
import React from 'react';
import { t } from '../utils';

export default function CategoryPills({ lang, sections, active, onSelect, allLabel }) {
  return (
    <div className="pills-bar">
      <div className="pills-list">
        <button
          className={`pill-btn ${active === 'all' ? 'active' : ''}`}
          onClick={() => onSelect('all')}
        >
          {allLabel}
        </button>
        {sections.map(s => (
          <button
            key={s.id}
            className={`pill-btn ${active === s.id ? 'active' : ''}`}
            onClick={() => onSelect(s.id)}
          >
            {t(s.name, lang)}
          </button>
        ))}
      </div>
    </div>
  );
}
