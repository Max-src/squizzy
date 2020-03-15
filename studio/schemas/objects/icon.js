import React from 'react'
import MdIconPack from 'react-icons/md'
import {MdColorLens} from 'react-icons/md'

export default {
  name: 'icon',
  title: 'Icon',
  type: 'object',
  description: 'A Theme which can be applied to a quiz.',
  fields: [
    {
      title: 'Genre',
      name: 'genre',
      type: 'string',
      options: {
        list: [
          {
            title: 'Plus',
            value:
              'm35.9 16.4v4.3q0 0.9-0.6 1.5t-1.5 0.7h-9.3v9.2q0 0.9-0.6 1.6t-1.5 0.6h-4.3q-0.9 0-1.5-0.6t-0.7-1.6v-9.2h-9.3q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h9.3v-9.3q0-0.9 0.7-1.5t1.5-0.6h4.3q0.9 0 1.5 0.6t0.6 1.5v9.3h9.3q0.9 0 1.5 0.6t0.6 1.5z'
          },
          {
            title: 'Triangle',
            value:
              'm34.8 33c0.2 0.4 0.4 1 0.1 1.4s-0.6 0.6-1.1 0.6h-32.6c-0.5 0-0.9-0.2-1.1-0.6s-0.1-1 0.1-1.4l16.2-27.3c0.2-0.4 0.6-0.7 1.1-0.7s0.9 0.3 1.1 0.7z'
          },
          {
            title: 'Square',
            value:
              'm31.6 5c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z'
          },
          {
            title: 'Circle',
            value:
              'm37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z'
          },
          {
            title: 'Carrot',
            value:
              'm28 18.3c0.5 0.5 0.8 1 0.8 1.7 0 0.9-0.4 1.6-1.1 2s-3.9 3-8.2 6.1l-3-2.5c-0.3-0.2-0.6-0.2-0.8-0.1-0.2 0.2-0.2 0.5 0.1 0.8l2.2 2.8-8.9 6.5c-0.4 0.3-1 0.7-1.6 0.7-1.4 0-2.5-1.1-2.5-2.5 0-0.6 0.2-1.1 0.4-1.5 0.1-0.1 1.2-1.9 2.8-4.4l1.6 1.3c0.3 0.3 0.6 0.3 0.7 0.1 0.2-0.2 0.2-0.5 0-0.8l-1.6-1.8c2.1-3.3 4.7-7.5 6.6-10.4l2.8 2.3c0.3 0.2 0.6 0.2 0.8 0.1 0.1-0.2 0.1-0.5-0.1-0.8l-2.6-3.1c0.9-1.4 1.4-2.3 1.4-2.3 0.5-0.8 1.3-1.2 2.2-1.2 0.7 0 1.4 0.3 1.9 0.7l6.2 6.3z m7-7.4l-8 4.6-2.2-2.3 5.4-9.5 2.2 1.3-3.9 6.6 5.2-2.9z'
          },
          {
            title: 'Pizza',
            value:
              'm30.6 10.2c0.8 0.3 0.9 1 0.7 1.5l-11.5 25.8s-11.2-25-11.6-25.9 0.1-1.2 0.7-1.4c3-1.4 7-2.2 10.8-2.2s7.5 0.7 10.9 2.2z m-15.8 4.8c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1 2.5 2.5 2.5z m5 11.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1 2.5 2.5 2.5z m5-9c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1 2.5 2.5 2.5z m7.9-12.3c0.5 0.2 0.8 0.4 0.8 1 0 0.1 0 0.2-0.1 0.4l-0.6 1.4c-0.2 0.4-0.6 0.8-1.1 0.8-0.1 0-0.2-0.1-0.5-0.2-3.2-1.4-7.4-2.3-11.5-2.3s-7.9 0.8-11.4 2.3c-0.3 0.1-0.3 0.2-0.5 0.2-0.5 0-0.9-0.4-1.1-0.8l-0.6-1.4s-0.1-0.2-0.1-0.4c0-0.7 0.5-1 0.8-1.1 3.8-1.7 8.3-2.6 13-2.6s9.2 1 12.9 2.7z'
          },
          {
            title: 'Snow',
            value:
              'm36.6 18.4v3.2h-6.9l5.4 5.4-2.4 2.5-7.7-7.9h-3.4v3.4l7.9 7.7-2.5 2.4-5.4-5.4v6.9h-3.2v-6.9l-5.4 5.4-2.4-2.4 7.8-7.7v-3.4h-3.4l-7.7 7.9-2.4-2.5 5.4-5.4h-6.9v-3.2h6.9l-5.4-5.4 2.4-2.4 7.7 7.8h3.4v-3.4l-7.9-7.7 2.5-2.4 5.4 5.4v-6.9h3.2v6.9l5.4-5.4 2.5 2.4-7.9 7.7v3.4h3.4l7.7-7.9 2.4 2.5-5.4 5.4h6.9z'
          },
          {
            title: 'Star',
            value:
              'm38.6 14.4q0 0.5-0.5 1.1l-8.1 7.9 1.9 11.2q0 0.1 0 0.4 0 0.5-0.2 0.8t-0.7 0.3q-0.4 0-0.9-0.2l-10-5.3-10 5.3q-0.5 0.2-0.9 0.2-0.5 0-0.7-0.3t-0.3-0.8q0-0.1 0.1-0.4l1.9-11.2-8.1-7.9q-0.6-0.6-0.6-1.1 0-0.8 1.3-1l11.2-1.6 5-10.2q0.4-0.9 1.1-0.9t1.1 0.9l5 10.2 11.2 1.6q1.2 0.2 1.2 1z'
          },
          {
            title: 'Plane',
            value:
              'm35 26.6l-13.4-4.1v9.1l3.4 2.5v2.5l-5.9-1.6-5.7 1.6v-2.5l3.2-2.5v-9.1l-13.2 4.1v-3.2l13.2-8.4v-9.1q0-1.1 0.8-1.8t1.7-0.7 1.8 0.7 0.7 1.8v9.1l13.4 8.4v3.2z'
          },
          {
            title: 'Shuttle',
            value:
              'm25 18.4h8.4l-6.8-6.8h-1.6v6.8z m4.1 10.7c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-7.5-10.7v-6.8h-6.6v6.8h6.6z m-11.6 10.7c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-5-10.7h6.6v-6.8h-6.6v6.8z m23.4-10l10 10v8.2h-4.3c0 2.8-2.2 5-5 5s-5-2.2-5-5h-9.1c0 2.8-2.3 5-5 5s-5-2.2-5-5h-3.4v-15c0-1.8 1.6-3.2 3.4-3.2h23.4z'
          },
          {
            title: 'Heart',
            value:
              'm20 35.5l-2.4-2.1c-8.6-7.9-14.2-12.9-14.2-19.3 0-5.1 3.9-9.1 9.1-9.1 2.9 0 5.7 1.4 7.5 3.5 1.8-2.1 4.6-3.5 7.5-3.5 5.2 0 9.1 4 9.1 9.1 0 6.4-5.6 11.5-14.2 19.3z'
          },
          {
            title: 'Goat',
            value:
              'm39.9 15.2c0.1 0 0.1 0.3 0 0.3l-1.9 2.5c-0.1 0.1-0.3 0.2-0.3 0.2l-1.2-0.2-0.6 1.7c-0.2 0.4-0.7 0.4-1 0l-1.1-2.4-1.8-0.3-3.6 8.7 1.3 10.6c0 0.3-0.2 0.3-0.3 0.3h-1.6c-0.1 0-0.2 0-0.3-0.2l-1.6-6.3-0.7-1.3-2 7.6c0 0.2-0.2 0.2-0.3 0.2h-1.7c-0.1 0-0.3-0.1-0.3-0.3l1.8-10.5h-10.5l-2.8 5.1 0.7 5.4c0.1 0.2-0.1 0.3-0.3 0.3h-1.6c-0.1 0-0.2 0-0.3-0.1l-2.2-8-2.7 3.1 0.5 4.7c0.1 0.2-0.1 0.3-0.3 0.3h-1.7c-0.2 0-0.3 0-0.3-0.1l-1.1-4.4 1.7-6.4v-11.2s-1.8-0.7-1.8-2.4h21.4s3.7 0.1 7.4-2.6c0 0-0.6-1.7 0.5-2.8 0 0 2.2 1.6 2.8 2 0.8 0.4 1.3-0.4 1.1-1.1-0.2-0.5-0.7-2.2-3.5-3.3-0.4-0.1-1.2-0.2-1-0.7 0-0.2 0.1-0.2 0.3-0.2 3.4 0.4 5.4 3.2 6 4.5 0.1 0.1 1.6 1.2 1.4 3 0 0.2 0 0.3 0.2 0.5z'
          },
          {
            title: 'Squirrel',
            value:
              'm30 2.5c-5.5 0-10 3.3-10 7.3 0 4.8 1.3 7.6 0 15.2 0-11.2-6.9-15.8-10-15.8 0.1-1.3-1.2-1.7-1.2-1.7s-0.6 0.3-0.8 0.8c-0.6-0.7-1.4-0.6-1.4-0.6l-0.3 1.4s-4.6 1.6-4.6 8.1c0.5 0.8 3.8 1.5 6.2 1 2.2 0.2 1.7 2 1.2 2.5-2.1 2.1-4.1-0.7-6.6-0.7s-2.5 2.5 0 2.5 2.5 2.5 7.5 2.5c-7.7 3 0 10 0 10h-2.5c-2.5 0-2.5 2.5-2.5 2.5h15c7.5 0 12.5-2.5 12.5-8.7 0-2.1-1.1-4.5-2.5-6.3-2.8-3.7 0.6-6.7 2.5-5s7.5 2.5 7.5-5c0-5.5-4.5-10-10-10z m-23.7 12.5c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.3 1.3-1.3 1.2 0.6 1.2 1.3-0.6 1.2-1.2 1.2z'
          },
          {
            title: 'Umbrella',
            value:
              'm26.9 22.5z m-18.8 0z m10.7-18.7c9 0.7 16.2 8.5 16.2 17.8v0.9c-0.3-2-2-4.1-4.1-4.1-2.2 0-4 1.8-4 4.1 0-2.3-1.8-4.1-4.1-4.1s-3.8 1-4.1 3.6v10.5c0 1.3-0.4 2.6-1.4 3.5s-2.2 1.5-3.6 1.5c-2.7 0-4.9-2.3-4.9-5 0-0.7 0.6-1.2 1.3-1.2s1.2 0.5 1.2 1.2c0 1.4 1.1 2.5 2.4 2.5 1.5 0 2.5-1.1 2.5-2.5v-10.5c0-1.8-2-3.6-4-3.6-2.3 0-4.1 1.8-4.1 4.1 0-2.3-1.8-4.1-4-4.1-2.2 0-3.9 2.1-4.1 4.1v-1.4c0-9.2 7.2-16.6 16.2-17.3v0c0-0.8 0.6-1.3 1.3-1.3s1.2 0.5 1.2 1.3v0z'
          },

          {title: 'Empty', value: ''}
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown','radio'
        direction: 'horizontal'
      }
    },
    {
      name: 'custom',
      title: 'Custom SVG path',
      description: 'Find many : https://react-icons.github.io/react-icons/',
      type: 'string',
      validation: Rule =>
        Rule.custom(custom => {
          if (typeof custom === 'undefined') {
            return true // Allow undefined values
          } else if (!custom.startsWith('m')) {
            return 'SVG path must start with m'
          } else if (!custom.endsWith('z')) {
            return 'SVG path must end with z'
          }
          return true
        })
    }
  ],
  preview: {
    select: {
      genre: 'genre',
      custom: 'custom'
    },
    prepare(selection) {
      const {genre, custom} = selection
      let isCustom = typeof custom !== 'undefined'
      let value
      if (isCustom && custom.startsWith('m') && custom.endsWith('z')) {
        value = custom
      } else {
        value = genre
      }
      return {
        title: isCustom ? 'Custom' : '',
        media: (
          <svg
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            height="50"
            width="50"
            viewBox="0 0 40 40"
          >
            <g>
              <path d={value}></path>
            </g>
          </svg>
        )
      }
    }
  }
}