export default function learnpage() {
    return (
    <section className="h-screen bg-gray-100 flex gap-4">
    <div className="bg-purple-300 p-6 h-55 w-68 rounded-4xl flex flex-col justify-between text-blue-950">
        <div className= "flex gap-2 font-bold">
            <img src="/palette.svg" alt="Design"/>
                <p>Design</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Figma</h2>
          <p className="font-bold">8 Hours ago</p>
        </div>
    </div>   

    <div className="bg-orange-200 p-6 h-55 w-68 rounded-4xl flex flex-col justify-between text-blue-950">
        <div className= "flex gap-2 font-bold">
            <img src="/code.svg" alt="Design"/>
                <p>Coding</p>
        </div>  
        <div>
          <h2 className="text-3xl font-bold">Python</h2>
          <p className="font-bold">2 Days ago</p>
        </div>
    </div>   

    <div className="bg-red-300 p-6 h-55 w-68 rounded-4xl flex flex-col justify-between text-blue-950">
        <div className= "flex gap-2 font-bold">
            <img src="/palette.svg" alt="Design"/>
                <p>Design</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Sketch</h2>
          <p className="font-bold">4 days ago</p>
        </div>
    </div>   
    </section> 
);
}