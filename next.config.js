const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  future: {
    webpack5: true,
  },
  env: {
    dataset: 'production',
    project_id: '9i9p7w70',
    use_cdn: 'true',
  },
  async redirects() {
    return [
      {
        source: '/driventoprotect',
        destination: '/driven-to-protect',
        permanent: true,
      },
      {
        source: '/maryland',
        destination: '/driven-to-protect/maryland',
        permanent: true,
      },
      {
        source: '/virginia',
        destination: '/driven-to-protect/virginia',
        permanent: true,
      },
    ]
  },
})
