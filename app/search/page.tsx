export default function searchPage(){
    return (
            <div className="seach-header flex flex-col align-center justify-center">
                <h1 className="text-white text-6xl mb-8 text-center">Поиск Музыки</h1>
                <div className="flex align-center justify-center w-full gap-5">
                    <input className="py-1 px-2 text-sm font-medium text-gray-900  border-2 border-black w-80" type="text" placeholder="Поиск" />
                    <button className="font-sans text-white bg-green-600 p-2 rounded-md text-lg w-40 hover:bg-green-500 ">Поиск</button>
                </div>
            </div>
    )
}