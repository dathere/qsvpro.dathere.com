import React from 'react'

export const Thumb = (props) => {
  const { selected, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number border-4 border-zinc-600 rounded hover:brightness-110"
      >
      <img alt="qsv pro feature demo GIF thumbnail" width={200} src={index.image.src} />
      </button>
    </div>
  )
}
