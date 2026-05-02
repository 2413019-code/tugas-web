export default function taskpage2(){
    return(
 <section className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
    <div className="w-full max-w-5xl mb-8 flex justify-start">
      <div className="text-gray-400">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg>
      </div>
    </div> 
    
    <div className="grid grid-cols-6 gap-4 max-w-4xl w-full">
    
    <div className=" col-span-3 bg-blue-200 p-6 rounded-3xl h-52 flex flex-col justify-between text-blue-950">
        <div className="flex gap-2 font-semibold items-center">
            <img src="/palette.svg" alt="Design" className="w-5 h-5"/>
            <p>Design</p>
        </div>
        <div className="mt-auto mb-2">
            <h2 className="text-2xl font-semibold">Adobe Photoshop</h2>
            <p className="font-semibold opacity-80">in 3 days</p>
        </div>

        <div className="flex justify-end -space-x-3">
            <img src="user-circle.svg" className="w-7 h-7 rounded-full border-2 border-white bg-white p-1"/>
            <img src="user-circle.svg" className="w-7 h-7 rounded-full border-2 border-white bg-white p-1"/>
            <img src="user-circle.svg" className="w-7 h-7 rounded-full border-2 border-white bg-white p-1"/>
        </div>
    </div>
   
    <div className="col-span-3 bg-green-100 p-6 rounded-3xl h-52 flex flex-col justify-between text-blue-950">
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 font-medium opacity-80">
            <img src="/terminal-2.svg" alt="AI" className="w-5 h-5 object-contain"/>
            <p>AI</p>
            </div>
            <img src="/star.svg" alt="AI" className="w-5 h-5 object-contain"/>
        </div>
        <div className="mt-auto mb-2">
            <h2 className="text-xl font-semibold">Dall ·E 2,Midjourney, stable Diffusion</h2>
            <p className="font-semibold opacity-80">in 5 days</p>
        </div>
         <div className="flex justify-end -space-x-2">
            <img src="user-circle.svg" className="w-7 h-7 rounded-full border-2 border-white bg-white p-1"/>
            <img src="user-circle.svg" className="w-7 h-7 rounded-full border-2 border-white bg-white p-1"/>
          </div>
    </div>
    <div className="col-span-2 bg-purple-300 p-8 h-52 rounded-3xl flex flex-col justify-between text-blue-950">
        <div className= "flex gap-2 font-semibold items-center">
            <img src="/palette.svg" alt="Design" className="w-5 h-5"/>
                <p>Design</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Figma</h2>
          <p className="font-semibold opacity-80">8 Hours ago</p>
        </div>
    </div>   

    <div className="col-span-2 bg-orange-200 p-6 rounded-3xl flex flex-col justify-between text-blue-950">
        <div className= "flex gap-2 font-semibold items-center">
            <img src="/code.svg" alt="Coding" className="w-5 h-5"/>
                <p>Coding</p>
        </div>  
        <div>
          <h2 className="text-lg font-semibold">Python</h2>
          <p className="font-semibold opacity-80">2 days ago</p>
        </div>
    </div>   

    <div className="col-span-2 bg-red-300 p-8 rounded-3xl flex flex-col justify-between text-blue-950">
        <div className= "flex gap-2 font-semibold items-center">
            <img src="/palette.svg" alt="Design" className="w-5 h-5"/>
                <p>Design</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Sketch</h2>
          <p className="font-semibold opacity-80">4 days ago</p>
        </div>
    </div>
    </div>
      <div className="w-full max-w-5xl flex justify-end mt-3">
       <p className="text-gray-400 font-medium text-lg">Day 020 / 365</p>
      </div>
    </section> 
    );
}
