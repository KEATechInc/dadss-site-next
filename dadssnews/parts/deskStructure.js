// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Navigation')
    .items([
      S.listItem()
        .title('DADSS')
        .child(
          S.list()
            .title('DADSS')
            .items([
              postItems,
              webinarItems,
              eventItems,
              publicationItems,
              homepageItem,
              faqItems,
            ])
        ),
      S.listItem()
        .title('Driven To Protect')
        .child(S.list().title('Driven To Protect').items([DTPVAeventItems])),
      S.divider(),
      ...S.documentTypeListItems(),
    ])

// list definitions
const homepageItem = S.listItem()
  .title('Homepage')
  .child(S.document().title('Homepage').schemaType('homepage'))
const postItems = S.listItem()
  .title('News Updates')
  .child(
    S.documentList()
      .title('News Updates')
      .filter('_type == "post"')
      .defaultOrdering([{ field: 'published', direction: 'desc' }])
  )
const webinarItems = S.listItem()
  .title('Webinars')
  .child(
    S.documentList()
      .title('Webinars')
      .filter('_type == "webinar"')
      .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
  )
const faqItems = S.listItem()
  .title('FAQs')
  .child(
    S.documentList()
      .title('FAQs')
      .filter('_type == "faq"')
      .defaultOrdering([{ field: 'position', direction: 'desc' }])
  )
const eventItems = S.listItem()
  .title('Events')
  .child(
    S.documentList()
      .title('Events')
      .filter('_type == "event"')
      .defaultOrdering([{ field: 'eventDate', direction: 'desc' }])
  )
const publicationItems = S.listItem()
  .title('Publications')
  .child(
    S.documentList()
      .title('Publications')
      .filter('_type == "publication"')
      .defaultOrdering([{ field: 'publishDate', direction: 'desc' }])
  )
const DTPVAeventItems = S.listItem()
  .title('Events (VA)')
  .child(
    S.documentList()
      .title('Events (VA)')
      .filter('_type == "eventDTPVA"')
      .defaultOrdering([{ field: 'eventDate', direction: 'desc' }])
  )
