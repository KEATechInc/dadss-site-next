import { groq } from 'next-sanity'

const postFields = `
    published, 
    title, 
    slug, 
    preview, 
    category,
    subtitle,
    fileUpload,
    paperNumber,
    publishDate,
    description,
    body,
    eventDate,
    location,
    url,
    details,
    callToAction,
    pageBuilder,
    "fileUpload": fileUpload.asset->url,
    "imageUrl": image.asset->url,
`
export const recentPostsQuery = groq`
    *[_type == "post"] | order(published desc){
        ${postFields}
    }[0...2]
`
export const eventsQuery = groq`
    *[_type == "event"] | order(eventDate desc){
        ${postFields}
    }
`
export const publicationsQuery = groq`
    *[_type == "publication"] | order(publishDate desc){
        ${postFields}
    }
`
export const eventsVaQuery = groq`
    *[_type == "eventDTPVA"] | order(eventDate desc){
        ${postFields}
    }
`
export const webinarQuery = groq`
    *[_type == "webinar"][0] | order(webinarDate desc){
        ${postFields}
    }
`
export const newsQuery = groq`
    *[_type == "post"] | order(published desc){
        ${postFields}
    }
`
export const postSlugsQuery = groq`
    *[_type == "post" && defined(slug.current)][].slug.current
`
export const postQuery = groq`
    *[_type == "post" && slug.current == $slug][0] {
        ${postFields}
    }
`
