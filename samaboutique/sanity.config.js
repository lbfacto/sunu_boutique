import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { LaunchIcon, RobotIcon } from '@sanity/icons'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sama_boutique',
  basePath: '/production',
  icon: LaunchIcon,
  projectId: 'unojip8s',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
