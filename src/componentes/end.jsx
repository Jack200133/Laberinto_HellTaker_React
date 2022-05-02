/* eslint-disable import/prefer-default-export */
import React from 'react'
import { css } from '@emotion/css'
import { useNavigate } from 'react-router-dom'
import man from '../../assets/wwp.png'

const TitleC = css`
    height: 100px;
    display: flex;

`

const mainC = css`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    background-image: url(${man});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
`

const Title = css`
    color: white;
    font-size: 36px;
    font-weight: bold;
`
const button = css`
    width: 200px;
    height: 30px;
    background-color: #02021B;
    color:white;
    border-color: #white;
`

const End = () => {
  const navi = useNavigate()

  return (
    <div className={mainC}>
      <div className={TitleC}>
        <div className={Title}>
          HELLTAKER MAZE
        </div>

      </div>
      <button type="button" className={button} onClick={() => { navi('/login') }}>
        Fin del Juego
      </button>

    </div>

  )
}

export default End
