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
    "fileUpload": fileUpload.asset->url
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
export const newsQuery = groq`
    *[_type == "post"] | order(published desc){
        ${postFields}
    }
`
export const postSlugsQuery = `
    *[_type == "post" && defined(slug.current)][].slug.current
`
export const postBySlugQuery = `
    *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
    }
`
