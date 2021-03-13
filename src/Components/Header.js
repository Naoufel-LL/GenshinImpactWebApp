import './Home.css'
import video from '../images/video.mp4'
import close from '../images/close.png'
import vidicon from '../images/vid.png'
import windows from '../images/windows.png'
import apple from '../images/apple.png'
import playstore from '../images/play.png'
import ps4 from '../images/ps4.png'
import Modal from 'react-modal';
import {useState} from "react"
const Header = () => {
  const [modalopen,setModalOpen]=useState(false);
    return ( <>
        <div className="header">
        <div className="header-video">
             <video src={video} autoPlay muted loop>
           </video>
        </div>
        <div className="header-text">
            <h1>Watch Trailer</h1>
            <img onClick={()=>setModalOpen(true)} className="vid-start" src={vidicon}/>
            <Modal className="modal" isOpen={modalopen}>
              <img style={{cursor:"pointer"}} src={close} onClick={()=>setModalOpen(false)}/>
            <iframe width="800" height="500" src="https://www.youtube.com/embed/5DuZblVxG3I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal>
            <br/>
            <h1>You Can Download The Game From </h1>
            <br/>
            <div className="row">
              <img src={windows}/>
              <img src={apple}/>
              <img src={ps4}/>
              <img src={playstore}/>
            </div>
          </div>
           </div>
         </>  
     );
}
 
export default Header;