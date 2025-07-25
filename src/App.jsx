import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return(
    <div className="w-full h-screen flex flex-col background items-center  ">
      <h1 className="bg-white rounded-2xl w-[95vw] text-center mt-[40px] ml-[25px] mr-[25px] text-3xl font-bold px-10 py-4">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center m-[45px]">
        <Random/> 
        <Tag/>
      </div>
    </div>
  )
}
