import React from 'react'
import { css } from '@emotion/css'
import man from '../assets/man.png'
import aud from '../assets/vitality.mp3'
import { useNavigate } from 'react-router-dom';


const audio = new Audio(aud)



const TitleC = css`
    background-color: #700C29;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

const mainC = css`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
`

const Title = css`
    color: white;
    font-size: 36px;
    font-weight: bold;
`;

const containerlabel = css`
    display: flex;
    justify-content: space-around;

`
const prb = css`
    background-image: url(${man});
    background-size: contain;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
`

const button = css`
    width: 200px;
    height: 30px;
    background-color: #8C1C31;
    color:white;
    border-color: #E7C36B;
`



const Login = () => {

    const [sizeW, setSizeW] = React.useState(0)
    const [sizeH, setSizeH] = React.useState(0)
    let navi = useNavigate()

    React.useEffect(() => {
        audio.load()
        audio.play()
        audio.loop = true
    }, [])

    return (
        <div className={mainC}>
            <div className={TitleC}>
                <div className={Title}>
                    HELLTAKER MAZE
                </div>
                <div className={containerlabel}>
                    <input
                        placeholder='Ingrese el Width' type="text"
                        onChange={(e) => setSizeW(e.target.value)}
                        value={sizeW}
                    />
                    <input
                        placeholder='Ingrese el Height' type="text"
                        onChange={(e) => setSizeH(e.target.value)}
                        value={sizeH}
                    />
                </div>
                <button className={button} onClick={() => { const nav = '/maze/' + sizeH + '/' + sizeW; navi(nav) }}>
                    Ingresar al Laberinto
                </button>


            </div>
            <div className={prb}></div>
        </div>


    )
}

export default Login;