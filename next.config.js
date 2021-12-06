module.exports = {
  env: {
    dataset: 'production',
    project_id: '9i9p7w70',
    use_cdn: 'true',
    ga4: `G-EKPX48MV0L`,
    sanity_preview_secret: `j8heapkqy4rdz6kudrvsc7ywpvfhrv022abyx5zgmuwpc1xv`,
    sanity_api_token:
      'skvSaSDzLBvu8QECeAlhMz7SdRaTfSWjjzLhVWfvykl2MX7p5Tr7rnKxIM8woYhyPwVxWF3SvpO4ThrABdSq4WK8mOMvZtb5jGQ96b0C6nn4k0KfKUrMmdcXrO1llLxxdAZweqUS0s0pAUGsoAFZ34HgRrMuhQ13CuEyuWnrih3PwXcbmc9T',
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
