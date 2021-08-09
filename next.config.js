
module.exports = {
  future: {
    webpack5: true,
  },
  env: {
    dataset: 'production',
    project_id: '9i9p7w70',
    use_cdn: 'true',
    aws_access_key: 'AKIAZTOGPREEG2SKKG3P',
    aws_secret_key: '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',
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
