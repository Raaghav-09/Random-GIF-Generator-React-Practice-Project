import React, { useState } from 'react'
import Spinner from './Spinner';
import axios from 'axios';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag,setTag] = useState("car")

  const {gif , loading , fetchData } = useGif(tag) ; 

  return (
    <div className='bg-blue-300 min-w-[450px] w-4/6 border border-black flex flex-col items-center rounded-xl mb-[100px]'>
      <h2 className='underline font-bold text-xl m-[25px]'>A Random GIF</h2>

      {loading ? <Spinner /> : <img src={gif} className='max-h-[300px]'/>}

      <input 
      className='bg-[rgb(208,245,218)] w-9/12 rounded-lg h-[35px] m-[5px] text-center'
      onChange={(event)=>setTag(event.target.value)} value={tag} name="tag" 
      />
      <button className='bg-[rgb(208,245,218)] w-9/12 rounded-lg h-[40px] m-[25px] mt-[0] font-bold ' onClick={()=>fetchData()}>GENERATE</button>
    </div>
  )
}

export default Tag
