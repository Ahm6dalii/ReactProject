

export default function Home() {



  return (
    <>

    <div className=" min-h-screen flex items-center  max-w-screen-xl mx-auto py-5">
  <div className=" grid   md:grid-cols-6">
    <div className='md:col-span-4 flex items-center p-4 order-2 md:order-none '>
      <div >
      <h1 className="text-5xl font-bold text-[48px]">Embark on a Learning <br/>Adventure Online</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div>
      <button className="btn btnMain mx-1" >Explore More</button>
      <button className="btn bg-transparent border border-2 shadow-none border-0 mx-1 dark:text-white dark:hover:text-[#7c5cff] hover:text-[#7c5cff] hover:bg-[#d9d2f8]" >Financial Aid</button>
      </div>
      </div>
    </div>

    <div className='md:col-span-2 text-center'>
    <img
      src="https://img.freepik.com/free-vector/stay-home-talk-your-friends-online_23-2148485083.jpg?t=st=1724083427~exp=1724087027~hmac=bb45c5c33588c10872080aec80e5d50646d3c33fc7476fd7926f2ddc94157d9f&w=740"
      className="w-full rounded-lg mx-bg " />
    </div>
  </div>
</div>
</>
)}
