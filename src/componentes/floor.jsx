import React, { useState } from 'react'
import { css } from '@emotion/css'



const Floor = (props) => {
    const [img, setImg] = useState(null)

    const piso = css`
        background-image: url(${img});
        background-size: contain;
        background-repeat: no-repeat;
        width: 25px;
        height: 25px;
    `

    if (img === null) {
        setImg(props.mage)
    }

    return (

        <div className={piso}>{props.children}</div>
    )

}

export { Floor };