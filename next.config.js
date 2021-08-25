module.exports = {
  env: {
    dataset: 'production',
    project_id: '9i9p7w70',
    use_cdn: 'true',
    ga4: `G-EKPX48MV0L`,
  },
  images: {
    domains: ['cdn.sanity.io'],
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
}
