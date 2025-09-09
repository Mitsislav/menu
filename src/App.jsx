/* src/App.jsx */

import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import CategoryPills from './components/CategoryPills';
import MenuSection from './components/MenuSection';
import FloatingParticles from './components/FloatingParticles';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { UI } from './i18n';
import { t } from './utils';

export default function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'el');
  const [menu, setMenu] = useState(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('all'); // all | section.id
  const [err, setErr] = useState('');

  useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}menu.json`)
      .then(r => { if (!r.ok) throw new Error('http'); return r.json(); })
      .then(setMenu)
      .catch(() => setErr('load'));
  }, []);

  const sections = useMemo(() => menu?.sections ?? [], [menu]);

  const handleSelect = (id) => {
    setActive(id);
    if (id === 'all') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(`sec-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <FloatingParticles />

      <div className="theme-container">
        <Header
          title={menu ? t(menu.restaurant, lang) : 'Artisan Coffee Co.'}
          tagline={UI[lang].tagline}
          lang={lang}
          onLanguageChange={setLang}
          search={{ value: query, placeholder: UI[lang].search }}
          onSearch={setQuery}
        />
      </div>

      {menu && (
        <div className="theme-container" style={{ paddingTop: 0 }}>
          <CategoryPills
            lang={lang}
            sections={sections}
            active={active}
            onSelect={handleSelect}
            allLabel={UI[lang].all}
          />
        </div>
      )}

      <main style={{ minHeight: '60vh' }}>
        {!menu && !err && (
          <div className="theme-container" style={{ color: '#c0c0c0', paddingTop: 24 }}>
            {UI[lang].loading}
          </div>
        )}
        {err && (
          <div className="theme-container" style={{ paddingTop: 24 }}>
            <div className="alert alert-danger">{UI[lang].error}</div>
          </div>
        )}
        {menu && (
          <>
            {active === 'all'
              ? sections.map(sec => (
                  <MenuSection
                    key={sec.id}
                    lang={lang}
                    section={sec}
                    currency={menu.currency || 'EUR'}
                    query={query}
                  />
                ))
              : (() => {
                  const sec = sections.find(s => s.id === active);
                  return sec ? (
                    <MenuSection
                      lang={lang}
                      section={sec}
                      currency={menu.currency || 'EUR'}
                      query={query}
                    />
                  ) : null;
                })()
            }
          </>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
