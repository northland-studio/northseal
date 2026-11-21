module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        docuseal: {
          'color-scheme': 'light',
          primary: '#0049AD',
          'primary-content': '#FFFFFF',
          secondary: '#4C8BE0',
          accent: '#FF7A29',
          'accent-content': '#FFFFFF',
          neutral: '#3A4D66',
          'neutral-content': '#F5F8FC',
          'base-100': '#F5F8FC',
          'base-200': '#E8F0FB',
          'base-300': '#E3E9F2',
          'base-content': '#0A1B33',
          info: '#4C8BE0',
          success: '#18794E',
          warning: '#E05E0F',
          error: '#D92D20',
          '--rounded-btn': '0.5rem',
          '--tab-border': '2px',
          '--tab-radius': '0.5rem'
        }
      }
    ]
  }
}
