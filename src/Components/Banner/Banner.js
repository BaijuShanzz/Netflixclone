// importing react hoooks 
import { React,useEffect,useState } from 'react';

// import axios module from axios
import axios from '../../axio';

// importing the global apikey and imgurl form constants
import { api_Key,imgUrl } from '../../Constants/Constants';

// importing banner css
import './Banner.css';

const Banner = () =>{

    // create a state to mannge give api response and to storng data into the state
    const [movie, setMovie] = useState();
    
    useEffect(()=>{

        // callling the api with help of the movie db Apu
        axios.get(`trending/all/week?api_key=${api_Key}&language=en-US`).then((response)=>{
            console.log('movie data',response.data.results);
            // pass the result into the state 
            setMovie(response.data.results[2]);
        })
    },[]);

    return(
        // seting the Api response 
        // set the image with styel object 
        <div className="banner-container" style={{backgroundImage: `url(${movie ? imgUrl+movie.backdrop_path : ""})`}}>
            <div className="content-container">
                {/* set the title */}
                <h1 className="title">{movie ? movie.title : ""}</h1>
                
                {/* created two button */}
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                {/* movie overview  */}
                <p className='description'>{movie ? movie.overview : ""}
                </p>
            </div>
        </div>
    )
}

export default Banner;