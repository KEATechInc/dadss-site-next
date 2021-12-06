export default function resolveProductionUrl(document) {
  if (document._type === 'webinar') {
    return `https://dadss.org/webinars/${document.slug.current}`
  }
  if (document._type === 'post') {
    return `https://dadss.org/news/updates/${document.slug.current}`
  }
  return null
}
