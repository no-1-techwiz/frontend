import {useParams} from "react-router-dom"
import {EditProfile} from "../components/profile/EditProfile"
import {ProfileSettings} from "../components/profile/ProfileSettings"
import {Button} from "@components/ui/button"
import {imageList, RecentlyViewed} from "@components/RecentlyViewed.jsx";
import {useLoggined} from "@/src/libs/hooks/useLoggined.js";
import {Locate} from "lucide-react";
import {Locations} from "@components/Location.jsx";
import {AddTripModal} from "@components/AddTripModal.jsx";

export const ProfilePage = () => {
    let params = useParams();
    const {user} = useLoggined()

    return (<>
        <div className="container mx-auto p-3 my-11 grid grid-cols-12 gap-4">
            {/* Side bar */}
            <div className="border rounded-xl p-6 flex flex-col col-span-3 items-center border-gray-400">
                {/* Profile pic */}
                <div className="">
                    <img src={user?.img || "https://picsum.photos/id/237/300/300"} alt=""
                         className="rounded-full h-60 w-60"/>
                </div>
                <div className="text-center mt-4">
                    <p className="font-bold text-xl">{user?.name || ''}</p>
                    <p>@{params.username}</p>
                </div>
                <div className="flex justify-center gap-4 my-3 text-sm font-bold">
                    <EditProfile username={params.username}/>
                    <ProfileSettings/>
                </div>
            </div>


            {/* Main bar */}
            <div className="col-span-9 flex flex-col rounded-xl">
                <div className="h-60 text-center bg-slate-500 w-full rounded-xl">
                    <img src={imageList[3]} className="w-full h-full object-cover" alt=""/>
                </div>
                <div>
                    <div className="my-5 justify-center flex w-full gap-4">
                        <Button variant="outline" className="font-bold flex border-b-2 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
                            </svg>
                            Trip Plans</Button>
                        <Button variant="outline" className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"/>
                            </svg>
                            Guides</Button>
                    </div>
                    {/* ITEMS HERE */}
                    <div className="flex justify-center my-3 flex-col">
                        <p className="text-center">You haven't planned any trips yet</p>

                        <div className="flex justify-center">
                            <AddTripModal>
                                <Button className="my-6 btn rounded-full">Start planning a trip</Button>
                            </AddTripModal>
                        </div>
                        <RecentlyViewed isProfile/>

                    </div>
                </div>

            </div>
        </div>

    </>)
}