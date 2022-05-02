import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { css } from '@emotion/css'
import Floor from './floor.jsx'
import tower from '../../assets/murof.gif'
import delv from '../../assets/hero1.gif'
import delvizq from '../../assets/heroizq.gif'
import delvup from '../../assets/heroup.gif'
import delvdown from '../../assets/herodown.gif'
import WIN from '../../assets/win.gif'
import modeus from '../../assets/modeus.gif'
import tower2 from '../../assets/muro1.2.svg'
import pis1 from '../../assets/piso1.svg'
import pis2 from '../../assets/piso2.svg'

const mainC = css`
    display:inline-block;
    overflowY: scroll;
    overflowX: scroll;
    height: 500px;
    width: 500px;
`

const flexcon = css`
    display: flex
`
const prb = css`
    background-image: url(${tower});
    background-size: contain;
    background-repeat: no-repeat;
    width: 25px;
    height: 50px;
`
const prb2 = css`
    background-image: url(${tower2});
    background-size: contain;
    background-repeat: no-repeat;
    width: 25px;
    height: 50px;
`
const queen = css`
    background-image: url(${modeus});
    background-size: contain;
    background-repeat: no-repeat;
    width: 30px;
    height: 50px;
    position:absolute
`

const Maze = () => {
  const navi = useNavigate()
  const { w } = useParams()
  const { h } = useParams()
  const [mapita, setMapita] = React.useState(null)
  const [win, setWin] = React.useState(false)
  const pisos = [pis1, pis2]
  const fetchLAB = async () => {
    const fet = `https://maze.juanelcaballo.club/?type=json&w=${w}&h=${h}`
    const log = await fetch(fet)
    const repe = await log.json()
    setMapita(() => repe)
  }

  const posx = React.useRef(0)
  const posy = React.useRef(0)
  const postx = React.useRef(1)
  const posty = React.useRef(1)

  const heroMove = css`
        background-image: url(${delv});
        background-size: contain;
        background-repeat: no-repeat;
        width: 25px;
        height: 50px;
        transform: translate(${posx.current}px, ${posy.current}px);
        position:absolute
    `

  const Moveder = css`
        background-image: url(${delv}); 
        background-size: contain;
        background-repeat: no-repeat;
        width: 25px;
        height: 50px;
        transform: translate(${posx.current + 25}px,${posy.current}px);
        transition-duration: 1.5s
        position:absolute
    `
  const movwin = css`
        background-image: url(${WIN}); 
        background-size: contain;
        background-repeat: no-repeat;
        width: 25px;
        height: 50px;
        transform: translate(${posx.current}px,${posy.current}px);
        transition-duration: 1.5s
        position:absolute
    `

  const Moveizq = css`
        background-image: url(${delvizq}); 
        background-size: contain;
        background-repeat: no-repeat;
        width: 25px;
        height: 50px;
        transform: translate(${posx.current - 25}px,${posy.current}px);
        transition-duration: 1.5s
        position:absolute
    `
  const Moveup = css`
    background-image: url(${delvup}); 
    background-size: contain;
    background-repeat: no-repeat;
    width: 25px;
    height: 50px;
    transform: translate(${posx.current}px,${posy.current - 50}px);
    transition-duration: 1.5s
    position:absolute
`

  // Agregar foto viendo der
  const Movedown = css`
        background-image: url(${delvdown}); 
        background-size: contain;
        background-repeat: no-repeat;
        width: 25px;
        height: 50px;
        transform: translate(${posx.current}px,${posy.current + 50}px);
        transition-duration: 1.5s
        position:absolute
    `

  const img = React.useRef(heroMove)
  const [moving, setMoving] = React.useState(false)
  useEffect(() => {
    fetchLAB()
  }, [])
  useEffect(() => {
    if (win) {
      navi('/end')
    }
  }, [win])

  useEffect(() => {
    if (mapita === null) {
      return
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'd' || e.key === 'ArrowRight') {
        const ont = mapita[postx.current + 1][posty.current]
        if (ont === ' ' || ont === 'p') {
          img.current = Moveder
          setMoving(!moving)
          posx.current += 25
          postx.current += 1
        } else if (ont === 'g') {
          setWin(true)
          img.current = movwin
        } else {
          setMoving(!moving)
        }
      }
      if (e.key === 'a' || e.key === 'ArrowLeft') {
        const ont = mapita[postx.current - 1][posty.current]
        if (ont === ' ' || ont === 'p') {
          img.current = Moveizq
          setMoving(!moving)
          posx.current -= 25
          postx.current -= 1
        } else if (ont === 'g') {
          setWin(true)
          img.current = movwin
        } else {
          setMoving(!moving)
        }
      }
      if (e.key === 's' || e.key === 'ArrowDown') {
        const ont = mapita[postx.current][posty.current + 1]
        if (ont === ' ' || ont === 'p') {
          img.current = Movedown
          setMoving(!moving)
          posy.current += 50
          posty.current += 1
        } else if (ont === 'g') {
          setWin(true)
          img.current = movwin
        } else {
          setMoving(!moving)
        }
      }
      if (e.key === 'w' || e.key === 'ArrowUp') {
        const ont = mapita[postx.current][posty.current - 1]
        if (ont === ' ' || ont === 'p') {
          img.current = Moveup
          setMoving(!moving)
          posy.current -= 50
          posty.current -= 1
        } else if (ont === 'g') {
          setWin(true)
          img.current = movwin
        } else {
          setMoving(!moving)
        }
      }
    }, { once: true })
  }, [moving, mapita])
  if (mapita === null) {
    return (<div> LOADING . . .</div>)
  }
  return (

    <div className={mainC}>
      <div className={flexcon}>
        {mapita.map((anya, i) => (
          <div key={i.id} className={css`padding: 0px; margin: 0px;`}>
            {anya.map((bond, j) => {
              if (bond === ' ') {
                return (
                  <div key={j.id}>
                    <Floor mage={pisos[Math.floor(Math.random() * pisos.length)]} />
                    <Floor mage={pisos[Math.floor(Math.random() * pisos.length)]} />
                  </div>
                )
              }
              if (bond === '-') {
                return <div key={j.id} className={prb2} />
              }
              if (bond === 'p') {
                return (
                  <div key={j.id}>
                    <Floor mage={pisos[Math.floor(Math.random() * pisos.length)]}>
                      <div key={j.id} className={img.current} />
                    </Floor>
                    <Floor mage={pisos[Math.floor(Math.random() * pisos.length)]} />
                  </div>
                )
              }
              if (bond === 'g') {
                return (
                  <div key={j.id}>
                    <Floor mage={pisos[Math.floor(Math.random() * pisos.length)]}>
                      <div key={j.id} className={queen} />
                    </Floor>
                    <Floor mage={pisos[Math.floor(Math.random() * pisos.length)]} />
                  </div>
                )
              }
              return <div key={j.id} className={prb} />
            })}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Maze
