

function Card(props) {
    return (
        <div className="py-5 flex flex-wrap md:flex-nowrap bg-gray-100 px-2 pl-4 mt-6 rounded-2xl">
            <div className="md:w-164 md:mb-0 mb-6 shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 text-xl">{props.name}</span>
                <span className="mt-1 text-gray-500 text-sm">General</span>
            </div>
            <div className="md:grow">
                <h2 className="text-2xl font-medium title-font mb-2 text-green-600">${props.price}</h2>
                <div className='flex gap-2'>
                    <button className='p-2 px-4 rounded-3xl bg-neutral-200 font-semibold cursor-pointer'>Edit</button>
                    <button className='p-2 text-red-400 font-semibold px-4 rounded-3xl bg-neutral-200 cursor-pointer'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Card
