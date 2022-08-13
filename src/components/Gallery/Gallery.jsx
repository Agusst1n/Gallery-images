import React from 'react'
import Hero from 'components/Hero/Hero'
import Masonry from 'components/Masonry/Masonry'

/**
 *
 * @returns Styles
 */

import styles from './Gallery.module.css'

const Gallery = () => {
  return (
    <div className={styles.galeria}>
      <Hero />
      <Masonry />
    </div>
  )
}

export default Gallery
