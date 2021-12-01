import React from 'react'

const Preview = ({ value }) => {
  const { src } = value
  return (
    <iframe
      src={src}
      width='640'
      height='1286'
      frameBorder='0'
      marginHeight='0'
      marginWidth='0'>
      Loading…
    </iframe>
  )
}

export default {
  name: 'iframe',
  type: 'object',
  title: 'Iframe Embed',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'src',
      type: 'url',
      title: 'Iframe source link',
    },
  ],
  preview: {
    select: {
      src: 'src',
    },
    component: Preview,
  },
}
