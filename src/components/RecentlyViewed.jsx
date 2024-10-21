import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import {BASE_URL} from "@/src/libs/consts.js";
import {useLoggined} from "@/src/libs/hooks/useLoggined.js";
import {useNavigate} from "react-router-dom";
import {AddTripModal} from "@components/AddTripModal.jsx";
import {Button} from "@components/ui/button.jsx";

/*
{
    "id": 1,
    "user_id": 1,
    "trip_name": "Trip to Paris",
    "start_date": "2024-10-01",
    "end_date": "2024-10-10",
    "destination": "Paris, France",
    "budget": "1500.00",
    "note": "Visit the Eiffel Tower and Louvre Museum.",
    "created_at": "2024-09-21T02:47:27.000000Z",
    "updated_at": "2024-09-21T02:47:27.000000Z",
    "currency_id": null,
    "user": {
        "id": 1,
        "name": "Nguyen Van A",
        "email": "a@example.com",
        "email_verified_at": null,
        "google_id": null,
        "avatar": null,
        "role": "user",
        "created_at": "2024-09-21T02:47:26.000000Z",
        "updated_at": "2024-09-21T02:47:26.000000Z"
    }
}
 */

export const imageList = ["https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/HPsJUyz4sfWmWXZ0134FKFzrGVq0xhYQ", "https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/3e3svAf3blCKyWuPgLbeS0NI7hVF704p", "https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/LrbT4ax423VhdNixj8ICQkpFQvIho8SM", "https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/VIUrqSNzoqem2MPYfxrIHFpY17fflHmT", "https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/5s6tsMMA1suKm0sce1aAQxbZwE7qextR"]

export const RecentlyViewed = ({isProfile}) => {


    const [trip, setTrip] = useState([])
    const {user, loggined} = useLoggined()
    console.log(user)


    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`${BASE_URL}/trips`)
                console.log(res.data)
                setTrip(res.data.filter(item => {
                    return item.user_id == user.id
                }))
            } catch (e) {

            }
        })()
    }, [user]);

    if (!loggined) return

    return <div className="mt-10">
        {!isProfile &&  <div className="flex justify-between items-center mb-6">
            <p className="font-bold text-2xl " >Recently Viewed</p>
            <AddTripModal>
                <Button className="px-7" >Add trip</Button>
            </AddTripModal>
        </div>}
        <div className="flex gap-5">
            {trip.map((item, index) => {
                return <TripBox item={item} index={index} user={user}/>
            })}
        </div>
    </div>
}

const TripBox = ({item, index, user}) => {

    const navigate = useNavigate()
    const randomImg = useMemo(() => Math.floor(Math.random() * imageList.length), [])

    if(index > 4) return

    return <div key={item.trip_name} onClick={() => navigate(`/trip/${item.id}`)}  className="cursor-pointer flex flex-col gap-3 w-[265px] rounded-xl overflow-hidden bg-[#f3f4f5]">
        <div className="overflow-hidden">
            <img className="w-full h-[250px] hover:scale-125 object-cover object-center transition" src={imageList[randomImg]} />
        </div>
        <div className="flex flex-col gap-3 px-3.5 py-2">
            <p className="text-xl font-semibold">{item.trip_name}</p>
            <div className="flex gap-2">
                <img className="w-[30px] h-[30px] rounded-full object-cover" src={user.img}/>
                <div>
                    •
                </div>
                {new Date(item.start_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                -
                {new Date(item.end_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
        </div>
    </div>
}