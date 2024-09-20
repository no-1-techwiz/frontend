export const ProfilePage = () => {



    return (<>
        <div className="container mx-auto p-3 my-11 grid grid-cols-12 gap-4">
            {/* Side bar */}
            <div className="border rounded-xl p-6 flex flex-col col-span-3 items-center border-gray-400">
                {/* Profile pic */}
                <div className="">
                    <img src="https://picsum.photos/id/237/300/300" alt="" className="rounded-full h-60 w-60" />
                </div>
                <div className="text-center mt-4">
                    <p className="font-bold text-xl">Admin Name</p>
                    <p>@Username</p>
                </div>
                <div className="flex justify-center gap-4 my-3 text-sm font-bold">
                    <button type="button" className="btn rounded-full bg-slate-300 text-black flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                        Edit
                    </button>
                    <button type="button" className="btn rounded-full bg-slate-900 text-white  flex gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                        Share</button>
                </div>
            </div>


            {/* Main bar */}
            <div className="col-span-9 flex flex-col rounded-xl">
                <div className="h-60 text-center bg-slate-500 w-full rounded-xl" >
                    <p className="h-full">Map here</p>
                </div>
                <div>
                    <div className="my-5 justify-center flex w-full gap-4">
                        <button className="btn bg-transparent font-bold text-orange-500 flex border-b-2 gap-2 border-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            Trip Plans</button>
                        <button className="btn bg-transparent font-bold text-gray-600 flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                            </svg>
                            Guides</button>
                    </div>
                    {/* ITEMS HERE */}
                    <div className="flex justify-center my-3 flex-col">
                        <p className="text-center">You haven't planned any trips yet</p>

                        <div className="flex justify-center">
                            <button className="my-6 btn bg-orange-500 rounded-full">Start planning a trip</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <p className="">ProfilePage</p>
    </>)
}