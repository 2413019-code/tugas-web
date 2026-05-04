export default function users(){
    return(
<section className="h-screen bg-white flex gap-4 pt-40 justify-center">
        <div className="bg-gray-50 p-10 rounded-3xl h-120 w-100 flex flex-col justify-between">
            
            <div className="flex items-center justify-between">
                <h2 className="font-semibold">Clien Details</h2>
                <img src="/x.svg" className="w-5 h-5 object-contain"/>
            </div>

            <div className="flex pb-78 font-semibold items-center">
                <img src="user-circle.svg" className="w-10 h-10"/>
                <h2 className="p-2 pb-5">Cornelius Greenfelder</h2>
            </div>
            <div className="flex font-semibold items-center rounded-2xl w-22 h-5">
                <img src="/rosette-discount-check.svg" className="w-4 h-4 gap-2"></img>
                <p className="p-2">Verified</p>
            </div>

            <div className="col-span-3 bg-blue-100 p-6 rounded-3xl flex flex-col justify-between">
                <h1 className="font-semibold">Project</h1>
                <img src="/hourglass-high.svg" className="w-5 h-5"></img>
                <p className="opacity-30">Ongoing</p>
                <p>2 ($3.8k)</p>
                <img src="/circle-check.svg" className="w-5 h-5"></img>
                <p className="opacity-30">Complecated</p>
                <p>25($54k)</p>
            </div>

        </div>
</section>
    );
}