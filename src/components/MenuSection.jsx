/* src/components/MenuSection.jsx */
import React, { useMemo } from 'react';
import { t, formatPrice } from '../utils';

export default function MenuSection({ lang, section, currency, query }) {
  const q = (query || '').toLowerCase().trim();

  const items = useMemo(() => {
    if (!q) return section.items;
    return section.items.filter(it => {
      const name = t(it.name, lang).toLowerCase();
      const desc = t(it.desc, lang).toLowerCase();
      return name.includes(q) || desc.includes(q);
    });
  }, [section.items, q, lang]);

  if (!items.length) return null;

  return (
    <section id={`sec-${section.id}`} className="theme-container pt-2">
      <h2 className="section-title">{t(section.name, lang)}</h2>

      <div className="row g-3">
        {items.map((it, idx) => (
          <div key={it.id} className="col-12 col-sm-6">
            <div className="menu-card">
              {(idx % 5 === 0) && <div className="badge-special">Popular</div>}
              <div className="item-header">
                <span className="item-name">{t(it.name, lang)}</span>
                <span className="item-price">{formatPrice(it.price, lang, currency)}</span>
              </div>
              {it.desc && <p className="item-desc">{t(it.desc, lang)}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
