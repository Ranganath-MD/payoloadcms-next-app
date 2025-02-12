import type { CollectionConfig } from 'payload'

export const Todos: CollectionConfig = {
  slug: 'Todos',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'author',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
