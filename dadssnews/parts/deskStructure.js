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
              programOverviewItem,
              breathTechItem,
              touchTechItem,
              resourcesItems,
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

const programOverviewItem = S.listItem()
  .title('Program Overview')
  .child(S.document().title('Program Overview').schemaType('programOverview'))
const breathTechItem = S.listItem()
  .title('Breath Technology')
  .child(S.document().title('Breath Technology').schemaType('breathTechnology'))
const touchTechItem = S.listItem()
  .title('Touch Technology')
  .child(S.document().title('Touch Technology').schemaType('touchTechnology'))
const resourcesItems = S.listItem()
  .title('Resources')
  .child(S.document().title('Resources').schemaType('resources'))
const postItems = S.listItem()
  .title('News Updates')
  .child(
    S.documentList()
      .title('News Updates')
      .filter('_type == "post"')
      .defaultOrdering([{ field: '_updatedAt', direction: 'asc' }])
  )
const webinarItems = S.listItem()
  .title('Webinars')
  .child(
    S.documentList()
      .title('Webinars')
      .filter('_type == "webinar"')
      .defaultOrdering([{ field: '_updatedAt', direction: 'asc' }])
  )
const faqItems = S.listItem()
  .title('FAQs')
  .child(
    S.documentList()
      .title('FAQs')
      .filter('_type == "faq"')
      .defaultOrdering([{ field: '_updatedAt', direction: 'asc' }])
  )
const eventItems = S.listItem()
  .title('Events')
  .child(
    S.documentList()
      .title('Events')
      .filter('_type == "event"')
      .defaultOrdering([{ field: '_updatedAt', direction: 'asc' }])
  )
const publicationItems = S.listItem()
  .title('Publications')
  .child(
    S.documentList()
      .title('Publications')
      .filter('_type == "publication"')
      .defaultOrdering([{ field: '_updatedAt', direction: 'asc' }])
  )
const DTPVAeventItems = S.listItem()
  .title('Events (VA)')
  .child(
    S.documentList()
      .title('Events (VA)')
      .filter('_type == "eventDTPVA"')
      .defaultOrdering([{ field: '_updatedAt', direction: 'asc' }])
  )
