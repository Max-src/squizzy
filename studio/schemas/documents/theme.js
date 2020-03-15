import React from 'react'
import {MdColorLens} from 'react-icons/md'

export default {
  name: 'theme',
  title: 'Theme',
  type: 'document',
  /*__experimental_actions: ['create', 'update', 'delete', 'publish'],*/
  icon: MdColorLens,
  description: 'A Theme which can be applied to a quiz.',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule =>
        Rule.custom(title => {
          if (!title) {
            return 'Please give a title to the theme'
          }
          return true
        })
    },
    {
      title: 'Colors',
      name: 'colors',
      type: 'array',
      of: [{type: 'color'}],
      options: {
        layout: 'grid'
      },
      validation: Rule =>
        Rule.custom(colors => {
          if (!colors || colors.length != 4) {
            return `A theme must have 4 colors`
          }
          return true
        })
    },
    {
      title: 'Icons',
      name: 'icons',
      type: 'array',
      of: [{type: 'icon'}],
      options: {
        layout: 'grid'
      },
      validation: Rule =>
        Rule.custom(icons => {
          if (!icons) {
            return
          }
          if (!icons || icons.length != 4) {
            return `A theme must have 4 icons`
          }
          return true
        })
    }
  ],
  preview: {
    select: {
      title: 'title',
      colors: 'colors'
    },
    prepare(selection) {
      const {title, colors = []} = selection
      return {
        title: `${title}` || 'untitled theme 😢',
        media: (
          <div style={{lineHeight: 0}}>
            <span
              style={{
                background: colors.length > 0 ? colors[0].hex : '',
                height: '20px',
                width: '20px',
                borderRadius: '35%',
                display: 'inline-block',
                lineHeight: 0
              }}
            ></span>

            <span
              style={{
                background: colors.length > 1 ? colors[1].hex : '',
                height: '20px',
                width: '20px',
                borderRadius: '35%',
                display: 'inline-block',
                lineHeight: 0
              }}
            ></span>
            <span
              style={{
                background: colors.length > 2 ? colors[2].hex : '',
                height: '20px',
                width: '20px',
                borderRadius: '35%',
                display: 'inline-block',
                lineHeight: 0
              }}
            ></span>
            <span
              style={{
                background: colors.length > 3 ? colors[3].hex : '',
                height: '20px',
                width: '20px',
                borderRadius: '35%',
                display: 'inline-block',
                lineHeight: 0
              }}
            ></span>
          </div>
        )
      }
    }
  }
}
