export default function Header() {
    return (
        <div className="px-8 py-10">
            <img className="h-10" src="logo.svg" alt="workcation" />
            <img className="mt-6 rounded-lg shadow-xl" src="beach-work.jpg" alt="woman workcationing on the beach" />

            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
            You can work from anywhere. <span className="text-indigo-500">Take advantage of it.</span></h1>

            <p className="mt-2 text-gray-500 text-justify
            ">Workation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you&apos;re not on vacation.</p>

            <div className="mt-4">
                <a href="#" className="inline-block bg-indigo-500 hover:bg-indigo-400 px-3 py-2 rounded-lg text-sm text-white uppercase tracking-wider font-semibold shadow-lg">Book 
                your escape</a>
            </div>


        </div>
    )
}