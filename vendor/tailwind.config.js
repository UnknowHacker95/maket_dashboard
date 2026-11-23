// Конфигурация сборки tailwind-3.4.17.css. Запуск: см. README.md в этой папке.
module.exports = {
  content: ['../maket_dashboard_20_11_26.html'],
  theme: {
    // Типографская шкала макета: 4 размера (подпись 12, основной текст 14, подзаголовок 16, заголовок 22)
    fontSize: {
      xs: ['12px', { lineHeight: '1.5' }],
      sm: ['14px', { lineHeight: '1.5' }],
      base: ['14px', { lineHeight: '1.5' }],
      lg: ['16px', { lineHeight: '1.4' }],
      xl: ['22px', { lineHeight: '1.3' }],
      '2xl': ['22px', { lineHeight: '1.3' }],
    },
  },
};
