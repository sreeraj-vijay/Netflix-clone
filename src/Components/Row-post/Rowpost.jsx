import React, { useEffect,useState } from 'react';
import axios from '../../axios';
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../../contants/constants';
import './Rowpost.css'

function Rowpost(props) {
  const [movies,setMovie]=useState([])
  const [urlid,seturlId]=useState('')
  useEffect(()=>{
     axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results)
     }).catch(error=>{ alert("Network error")

     })
     
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
   
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
     if(response.data.results.length !==0){
      seturlId(response.data.results[0])
     }
      })
  
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallposter": "poster"} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
          )}
        </div>
       { urlid && <Youtube opts={opts} videoId={urlid.key} /> }
      
    </div>
  );
}

export default Rowpost;
