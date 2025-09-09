/* src/components/MenuList.jsx */
import React from 'react';
import { t, formatPrice } from '../utils';

export default function MenuList({ menu, lang }) {
  const currency = menu.currency || 'EUR';

  return (
    <div className="container py-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h3 m-0">{t(menu.restaurant, lang)}</h1>
      </div>

      {menu.sections.map(section => (
        <section key={section.id} className="mb-4">
          <h2 className="h5 mb-2">{t(section.name, lang)}</h2>

          <div className="row g-2">
            {section.items.map(item => (
              <div className="col-12 col-sm-6" key={item.id}>
                <div className="card h-100">
                  <div className="card-body d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fw-semibold">{t(item.name, lang)}</div>
                      {item.desc && (
                        <div className="text-muted small">{t(item.desc, lang)}</div>
                      )}
                    </div>
                    <div className="fw-bold">
                      {formatPrice(item.price, lang, currency)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
