/* src/utils.js */

export function t(obj, lang) {
  /* taking object {el:'...', en:'...'} and returns the right string */
  if (!obj) return '';
  return obj[lang] ?? obj.en ?? '';
}

export function formatPrice(value, lang = 'el', currency = 'EUR') {
  const locale = lang === 'el' ? 'el-GR' : 'en-US';
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}
