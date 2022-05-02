import React, { useState } from 'react'
import { css } from '@emotion/css'
import Proptypes from 'prop-types'

const Floor = ({ mage, children }) => {
  const [img, setImg] = useState(null)

  const piso = css`
      background-image: url(${img});
      background-size: contain;
      background-repeat: no-repeat;
      width: 25px;
      height: 25px;
  `
  if (img === null) {
    setImg(mage)
  }
  return (

    <div className={piso}>{children}</div>
  )
}

Floor.propTypes = {
  mage: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
}

export default Floor
