export default function resolveProductionUrl(doc) {
  const previewSecret = `j8heapkqy4rdz6kudrvsc7ywpvfhrv022abyx5zgmuwpc1xv`
  const remoteUrl = `https://dadss.org`
  const localUrl = `http://localhost:3000`
  const baseUrl =
    window.location.hostname === 'localhost' ? localUrl : remoteUrl

  const previewUrl = new URL(baseUrl)
  previewUrl.pathname = `/api/preview`
  previewUrl.searchParams.append(`secret`, previewSecret)

  if (doc._type === 'webinar') {
    previewUrl.searchParams.append(
      `slug`,
      `webinars/${doc?.slug?.current}` ?? `/`
    )
    return previewUrl.toString()
  }
  if (doc._type === 'post') {
    previewUrl.searchParams.append(
      `slug`,
      `news/updates/${doc?.slug?.current}` ?? `/`
    )
    return previewUrl.toString()
  }

  return
}
