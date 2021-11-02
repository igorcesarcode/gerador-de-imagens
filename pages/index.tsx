import { useState, useEffect } from 'react'


export default function Home() {
  const [username, setUsername] = useState('');
  const [linkEnabled , setLinkEnabled] = useState(false);
 

  return (
    <div className="container" >
      <h1>Gerador de Imagens</h1>
      <img src="https://raw.githubusercontent.com/igorcesarcode/gerador-de-imagens/main/pages/api/ctd.png"/>

      <h3>Digite seu nome de usuario do github</h3>
      <input
      type="text"
      name="name"
      className="myInput"
      onChange={event => {
        setUsername(event.target.value)
        
      }}
      />
      <a className="myButton" href={`/api/image-generator?username=${username === '' ? 'DigitalHouseBrasil' : username}`}>
        Gerador de CardDev CTD : (beta)
      </a>
    </div>
  )
}
