import { groq } from 'next-sanity'

export const homeQuery = groq`
    *[_type == "homepage"][0] {
        "assetUrl": pageBuilder[].ctaUrl.upload.asset->url,
        ...
    }
`
export const resourcesQuery = groq`
    *[_type == "resources"][0]
`
export const programOverviewQuery = groq`
    *[_type == "programOverview"][0] {
        "assetUrl": pageBuilder[].ctaUrl.upload.asset->url,
        ...
    }
`
export const breathTechnology = groq`
    *[_type == "breathTechnology"][0] {
        "assetUrl": pageBuilder[].ctaUrl.upload.asset->url,
        ...
    }
`
export const touchTechnology = groq`
    *[_type == "touchTechnology"][0] {
        "assetUrl": pageBuilder[].ctaUrl.upload.asset->url,
        ...
    }
`
export const dtpLandingQuery = groq`
    *[_type == "drivenToProtectLanding"][0]
`
export const faqsQuery = groq`
    *[_type == "faq"] | order(position asc)
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
// webinar queries
export const webinarQuery = groq`
    *[_type == "webinar" && slug.current == $slug][0]
`
export const webinarSlugsQuery = groq`
    *[_type == "webinar" && defined(slug.current)][].slug.current
`
// news queries
export const newsQuery = groq`
    *[_type == "post"] | order(published desc)
`
export const postQuery = groq`
    *[_type == "post" && slug.current == $slug][0]
`
export const postSlugsQuery = groq`
    *[_type == "post" && defined(slug.current)][].slug.current
`
export const recentPostsQuery = groq`
    *[_type == "post"] | order(published desc)[0...2]
`
