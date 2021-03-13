import axios from 'axios';
import './Characters.css'
import {useEffect,useState} from 'react';
import Champ from './Champ'
const Characters = () => {
    const [info,setInfo]=useState('');
    const [champ,setChamp]=useState('lisa');
    const [img,setImg]=useState('lisa');
    useEffect(()=>{
        axios.get(`https://api.genshin.dev/characters/${champ}/`)
        .then(res => {
          const person = res.data;
          setInfo(person)
          console.log(info)
        })
      },[champ])
    return (
        <>
        <div className="character-container">
        <Champ img={img} setChamp={setChamp} setImg={setImg}/>
     <img src={`https://api.genshin.dev/characters/${champ}/icon`} />
     <h2>{info.name}</h2><br />
     <h2>{info.weapon}</h2><br />
     <h2>{info.description}</h2><br />
     <h2>{info.nation}</h2><br />
     <h2>{info.vision}</h2><br />
     <h2>{info.rarity}</h2><br />
     <img src={`https://api.genshin.dev/characters/${champ}/portrait`}/>
        </div>
        </>
      );
}
 
export default Characters;