const Champ = (props) => {
    const changeImg = ()=>{
        props.setChamp(props.img);
    }
    return ( 
        <>
           <input value={props.value} onChange={(event)=>props.setImg(event.target.value)}/>  
           <button type="submit" onClick={changeImg}>change</button>
        </>
     );
}
 
export default Champ;