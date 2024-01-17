import { Link } from "react-router-dom";

const Memey = () => {
    return (
        <>
           <Link to= "/" style={{textDecoration: 'none', color: 'black'}}> <p>← Home</p> </Link>
           <div>
                <div style={{}}>
                    <img src= '/Images/Meme.png' style={{width: '700px', height: '450px', paddingLeft: '400px'}}></img>
                </div>
                
           </div>
        </>
    )
}

export default Memey