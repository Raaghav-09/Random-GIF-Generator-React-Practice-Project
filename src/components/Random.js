import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


 const Random = () => {
  // const [gif , setGif] = useState('') ; 
  // const [loading , setLoading] = useState(false) ; 

  // async function fetchData() {
  //   try{
  //     setLoading(true) ; 
  //     const url =  `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`
  //     const {data} = await axios.get(url) ; 
  //     const imgSource = data.data.images.downsized_large.url ; 
  //     setGif(imgSource) ;
  //     setLoading(false) ; 
  //   }
  //   catch(error){
  //     console.log(`Something went wrong`)
  //   }
  // }

  // useEffect(()=>{
  //   fetchData() ;
  // },[])

  const {gif , loading , fetchData} = useGif() ;  

  return (
    <div className='bg-green-400 min-w-[450px] w-4/6 border border-black flex flex-col items-center rounded-xl mb-[100px]'>
      <h2 className='underline font-bold text-xl m-[25px]'>A Random GIF</h2>

      {loading ? <Spinner /> : <img src={gif} className='max-h-[300px]'/>}

      <button className='bg-[rgb(208,245,218)] w-9/12 rounded-lg h-[40px] m-[25px] font-bold ' onClick={()=>fetchData()}>GENERATE</button>
    </div>
  )
}

export default Random
