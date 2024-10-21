/*
{
        "id": 1,
        "location_template_id": 1,
        "trip_id": 1,
        "created_at": "2024-09-20T17:37:22.000000Z",
        "updated_at": "2024-09-20T17:37:22.000000Z",
        "location_template": {
            "id": 1,
            "name": "Eiffel Tower",
            "category_id": 1,
            "image": "https://example.com/images/eiffel_tower.jpg",
            "description": null,
            "created_at": "2024-09-20T17:37:22.000000Z",
            "updated_at": "2024-09-20T17:37:22.000000Z"
        },
        "trip": {
            "id": 1,
            "user_id": 1,
            "trip_name": "Trip to Paris",
            "start_date": "2024-10-01",
            "end_date": "2024-10-10",
            "destination": "Paris, France",
            "budget": "1500.00",
            "note": "Visit the Eiffel Tower and Louvre Museum.",
            "created_at": "2024-09-20T17:37:22.000000Z",
            "updated_at": "2024-09-20T17:37:22.000000Z",
            "currency_id": null
        }
    },
 */

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
    "currency": null
}
 */

import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import {BASE_URL} from "@/src/libs/consts.js";
import {Button} from "@components/ui/button.jsx";
import {PlusIcon, Search, Trash} from "lucide-react";
import {Badge} from "@components/ui/badge.jsx";
import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@components/ui/accordion"
import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
} from "@components/ui/dialog.jsx";
import {Input} from "@components/ui/input.jsx";
import {toast} from "react-toastify";
import { useDebounce } from "@uidotdev/usehooks";
import {imageList} from "@components/RecentlyViewed.jsx";

const locationImg = ['https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImage80/kp5QNAKQeJAT9REQlIJpPFe7U2oMOqEU','https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImage80/d0EPJLXPz2br62LzvSQqCRRF5CVpJIen','https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImage80/NfgVw53IRUBHfadVefJQirS1KZ7zhaKe',"https://images.unsplash.com/photo-1726808260756-ec1d4eceaf71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"]

export const Locations = ({trip,user,setTotal}) => {

    const [location, setLocation] = useState([])
    const [openRecommend, setOpenRecommend] = useState(false)
    const [locationTemplate, setLocationTemplate] = useState([])
    const [searchVal, setSearchVal] = useState('')
    const [locationSearch, setLocationSearch] = useState([])
    const debouncedSearchTerm = useDebounce(searchVal, 300);

    const total = useMemo(() => {
        let cost = 0
        location.forEach(item => {
            const price = localStorage.getItem(`price:${user.id}:${item.id}`)
            cost += price ? Number(price) : 0
        })

        return cost
    }, [location])

    const fetchLocation = async () => {
        try {
            const locationTemplate = await axios.get(`${BASE_URL}/location-templates`)
            const location = await axios.get(`${BASE_URL}/locations`)
            setLocationTemplate(locationTemplate.data)
            setLocation(location.data)
        } catch (e) {

        }
    }

    const ownedLocation = useMemo(() => {
        return location.filter(item => item.trip_id === trip.id)
    },[location])
    const notOwnedLocation = useMemo(() => {
        console.log("notOwnedLocation", location, ownedLocation)
        return locationTemplate.filter(item1 => !ownedLocation.find(item => item.location_template_id === item1.id))
    },[location, ownedLocation,locationTemplate])

    useEffect(() => {
        setTotal(total)
    },[total])

    useEffect(() => {
        fetchLocation()
    }, []);

    useEffect(() => {
        console.log(notOwnedLocation)
        setLocationSearch(notOwnedLocation.filter(item => item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())))
    }, [debouncedSearchTerm]);

    console.log("locationSearched",locationSearch)

    return <div className="mt-6">
        <div>
            <div className="flex justify-between items-center mb-3">
                <p className="text-2xl font-bold " onClick={() => setOpenRecommend(true)}>Owned location</p>
                <Dialog>
                    <DialogTrigger><Button><Search className="mr-1"/> Add location</Button></DialogTrigger>
                    <DialogContent >
                        <div className="mt-4">
                       <Input placeholder="Search to select location..." value={searchVal} onChange={(e) => setSearchVal(e.target.value)}/>
                            <div className="flex flex-col gap-3 mt-4">
                                {locationSearch.map((item, index) => {
                                    return <LocationBox isOwn trip={trip} item={item} locationId={item.id} index={index} total={total} user={user} fetch={fetchLocation}/>
                                })}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="flex flex-col gap-3">
                {ownedLocation.map((item, index) => {
                    return <LocationBox isOwn trip={trip} item={item.location_template} locationId={item.id} index={index} total={total} user={user} fetch={fetchLocation}/>
                })}
            </div>
        </div>
         <Accordion type="single" collapsible defaultChecked={true} defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <p className="text-2xl font-bold mb-3" onClick={() => setOpenRecommend(true)}>Recommend
                        locations</p>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col gap-3">
                        {notOwnedLocation.map((item, index) => {
                            return <LocationBox trip={trip} item={item} index={index} total={total} user={user} fetch={fetchLocation}/>
                        })}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <div className="flex flex-col gap-4">
        </div>
    </div>
}

const LocationBox = ({item, index,trip, isOwn, total, user, fetch,locationId}) => {
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice]= useState(0)
    const [expense, setExpense] = useState(0)
    const [open, setOpen] = useState(false)
    const randomImg = useMemo(() => Math.floor(Math.random() * locationImg.length), [])

    const initFetch = async () => {
        try {
            const category = await axios.get(`${BASE_URL}/categories/${item.category_id}`)
            setCategory(category.data.name)
            if(isOwn) {
                // const location = await axios.get(`${BASE_URL}/locations/${item.id}`)
                console.log("item",item)
                const expense = localStorage.getItem(`price:${user.id}:${locationId}`)
                console.log("expense", expense)
                setExpense(+expense)
                setPrice(+expense)
            }
        } catch (e) {

        }
    }
    useEffect(() => {
        initFetch()
    }, [isOwn]);

    if (index > 2) return
    return <>
        <div key={index}
             className="flex justify-between items-center gap-4 p-2  border-gray-200 rounded-xl overflow-hidden border-2 gap-20">
            <div className="flex gap-2 items-center">
                <img className="w-[50px] object-cover flex-1 rounded-lg h-[70px]"
                     src={locationImg[randomImg]}
                     alt=""/>
                <div className="w-[85%]">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-600" style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical"
                    }}>{item.description || `This is a collection of 'best of' since I moved to the island at the beginning of 2019. Activities/sights, restaurants/bars, shopping, and places to stay in San Jan each have their own section. Other regions each get a single section that combines all of the above.`}</p>
                    <div className="mt-2">
                        <Badge variant="outline">{category}</Badge>
                    </div>
                </div>
            </div>
           <div className="flex gap-2 items-center">
               <Dialog open={open} onOpenChange={setOpen}>
                   <DialogTrigger asChild >
                       {isOwn ?
                           <div >
                               <Button className="px-8" size="icon" variant="secondary" onClick={() => setPrice(expense)} >{trip.currency || "$"} {expense}</Button>
                           </div>
                           :
                           <div className="mr-5">
                               <Button size="icon" variant="secondary"><PlusIcon/></Button>
                           </div>
                       }
                   </DialogTrigger>
                   <DialogContent className="max-w-[600px]">
                       <DialogHeader>
                           <DialogTitle>{item.name}</DialogTitle>
                       </DialogHeader>
                       <DialogDescription>
                           <img
                               className="object-cover h-[40dvh] w-full"
                               src={!item.image || "https://images.unsplash.com/photo-1726808260756-ec1d4eceaf71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"}
                               alt=""/>
                           <p className="text-gray-600 mt-3">{item.description || `This is a collection of 'best of' since I moved to the island at the beginning of 2019. Activities/sights, restaurants/bars, shopping, and places to stay in San Jan each have their own section. Other regions each get a single section that combines all of the above.`}</p>
                       </DialogDescription>
                       <DialogFooter>
                           <div className="flex justify-between w-full items-center">
                               <div>
                                   <Input placeholder="Enter expense..." type="number" onChange={e => setPrice(e.target.value)}
                                          className="w-full"/>
                               </div>
                               <Button onClick={async () => {
                                   try {
                                       if(isOwn) {
                                           localStorage.setItem(`price:${user.id}:${locationId}`, price.toString())
                                           await initFetch()
                                           await fetch()
                                           toast("Updated location", {type: "success"})
                                           setOpen(false)
                                           return
                                       }
                                       if (trip.budget < (+price + total)) {
                                           toast("Your expenses have exceeded the allowable limit.",{type:"error"})
                                           // return
                                       }

                                       console.log({
                                           location_template_id: item.id, expense: price
                                       })
                                       const res = await axios.post(`${BASE_URL}/locations`, {
                                           location_template_id: item.id, expense: price,
                                           trip_id: trip.id
                                       })
                                       const expense = await axios.post(`${BASE_URL}/expenses`, {
                                           cost: price,
                                           location_id: res.data.id,
                                       })
                                       localStorage.setItem(`price:${user.id}:${res.data.id}`, price.toString())
                                       toast("Added location", {type: "success"})
                                       setPrice(0)
                                       fetch()
                                       setOpen(false)
                                   } catch (e) {
                                       console.log(e)
                                   }
                               }}>{isOwn ? "Update" : "Add"} location</Button>
                           </div>
                       </DialogFooter>
                   </DialogContent>
               </Dialog>
               {isOwn && <Button onClick={ async () => {
                   try{
                       await axios.delete(`${BASE_URL}/locations/${locationId}`)
                       localStorage.removeItem(`price:${user.id}:${locationId}`)
                       await fetch()
                       toast("Delete success",{type:"success"})

                   }catch (e) {
                       toast("Delete failed",{type:"error"})
                   }
               }} variant="outline" className="text-red-500" size="icon"><Trash /></Button>}
           </div>
        </div>
    </>
}
