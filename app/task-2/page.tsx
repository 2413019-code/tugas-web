export default function taskpage2(){
    return(
 <section className="min-h-screen bg-gray-100 p-10">
    <div className="grid grid-cols-3 gap-6 auto-rows-[200px]">
    
    <div className="col-span-2 row-span-1 bg-blue-200 p-6 rounded-3xl flex flex-col justify-between text-blue-950">
        <div className="flex gap-2 font-bold items-center">
            <img src="/palette.svg" alt="Design" className="w-5 h-5"/>
            <p>Design</p>
        </div>
        <div>
            <h2 className="text-2xl font-bold">Adobe Photoshoot</h2>
            <p className="font-semibold">in 3 days</p>
        </div>
    </div>
   
    <div className="bg-green-100 p-6 rounded-3xl flex flex-col justify-between text-blue-950">
        <div className="flex gap-2 font-bold items-center">
            <img src="/palette.svg" className="w-5 h-5"/>
            <p>AI</p>
        </div>
        <div>
            <h2 className="text-2xl font-bold">Dall ·e 2,Midjourney, stable Diffusion</h2>
            <p className="font-semibold">in 5 days</p>
        </div>
    </div>
    <div className="bg-purple-300 p-6 h-44 rounded-3xl flex flex-col justify-between text-blue-950">
        <div className= "flex gap-2 font-bold items-center">
            <img src="/palette.svg" alt="Design" className="w-5 h-5"/>
                <p>Design</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Figma</h2>
          <p className="font-semibold">8 Hours ago</p>
        </div>
    </div>   

    <div className="bg-orange-200 p-6 h-44 rounded-3xl flex flex-col justify-between text-blue-950">
        <div className= "flex gap-2 font-bold items-center">
            <img src="/code.svg" alt="Design" className="w-5 h-5"/>
                <p>Coding</p>
        </div>  
        <div>
          <h2 className="text-lg font-bold">Python</h2>
          <p className="font-semibold">2 Days ago</p>
        </div>
    </div>   

    <div className="bg-red-300 p-6 h-44 rounded-3xl flex flex-col justify-between text-blue-950">
        <div className= "flex gap-2 font-bold items-center">
            <img src="/palette.svg" alt="Design" className="w-5 h-5"/>
                <p>Design</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Sketch</h2>
          <p className="font-semibold">4 days ago</p>
        </div>
    </div>   
     </div>
    </section> 
    );
}