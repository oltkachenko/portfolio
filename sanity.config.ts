/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig, isKeyedObject, type AssetSource} from 'sanity'
import {structureTool} from 'sanity/structure'
import {documentInternationalization} from '@sanity/document-internationalization'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import home from './sanity/schemas/singletons/home'
import { singletonPlugin } from './sanity/plugins/settings'
import footer from './sanity/schemas/singletons/footer'

import { structure } from '@/sanity/structure'
import Navbar from './app/studio/components/Navbar'
import { LANGUAGES } from './sanity/constants'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'
import { languageFilter } from '@sanity/language-filter'
import {media, mediaAssetSource} from 'sanity-plugin-media'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
        structure
    }),
    media(),
    documentInternationalization({
        // Required configuration
        supportedLanguages: LANGUAGES,
        schemaTypes: ['page', 'navigation', 'home'],
    }),
    internationalizedArray({
        languages: LANGUAGES,
        defaultLanguages: ['en'],
        buttonLocations: ['field'],
        fieldTypes: ['string', 'text'],
    }),
    languageFilter({
      supportedLanguages: LANGUAGES,
      documentTypes: ['footer', 'services'],
      filterField: (enclosingType, member, selectedLanguageIds) => {
        // Filter internationalized arrays
        if (
          enclosingType.jsonType === 'object' &&
          enclosingType.name.startsWith('internationalizedArray') &&
          'kind' in member
        ) {
          const language = isKeyedObject(member.field.path[1]) ? member.field.path[1]._key : null

          return language ? selectedLanguageIds.includes(language) : false
        }

        // Filter internationalized objects
        // `localeString` must be registered as a custom schema type
        if (enclosingType.jsonType === 'object' && enclosingType.name.startsWith('locale')) {
          return selectedLanguageIds.includes(member.name)
        }

        return true
      },
    }),
    singletonPlugin([home.name, footer.name]),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  form: {
    file: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },
  studio: {
    components: {
      navbar: Navbar,
    },
  },
})
