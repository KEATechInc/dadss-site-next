import { groq } from 'next-sanity'

export const recentPostsQuery = groq`
    *[_type == "post"] | order(published desc)[0...2]
`
export const eventsQuery = groq`
    *[_type == "event"] | order(eventDate desc)
`
export const publicationsQuery = groq`
    *[_type == "publication"] | order(publishDate desc)
`
export const eventsVaQuery = groq`
    *[_type == "eventDTPVA"] | order(eventDate desc)
`
export const webinarQuery = groq`
    *[_type == "webinar"][0] | order(webinarDate desc)
`
export const newsQuery = groq`
    *[_type == "post"] | order(published desc)
`
export const postSlugsQuery = groq`
    *[_type == "post" && defined(slug.current)][].slug.current
`
export const postQuery = groq`
    *[_type == "post" && slug.current == $slug][0]
`
