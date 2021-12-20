// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './components/blockContent'
import post from './pages/post'
import event from './pages/event'
import faq from './pages/faq'
import publication from './pages/publication'
import eventDTPVA from './pages/eventDTPVA'
import webinar from './pages/webinar'
import panelistCard from './pageBuilderComponents/panelistCard'
import youtube from './inserts/youtube'
import iframe from './inserts/iframe'
import homepage from './pages/homepage'
import contentSection from './pageBuilderComponents/contentSection'
import resources from './pages/resources'
import programOverview from './pages/programOverview'
import breathTechnology from './pages/breathTechnology'
import touchTechnology from './pages/touchTechnology'
import drivenToProtectLanding from './pages/drivenToProtectLanding'
import drivenToProtectVA from './pages/drivenToProtectVA'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,

    // DADSS
    post,
    event,
    faq,
    publication,
    webinar,
    homepage,
    resources,
    programOverview,
    breathTechnology,
    touchTechnology,
    // DTP
    eventDTPVA,
    drivenToProtectLanding,
    drivenToProtectVA,
    // page builder components
    panelistCard,
    contentSection,
    // inserts
    youtube,
    iframe,
  ]),
})
