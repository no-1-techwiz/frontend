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

import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "@/lib/consts.js";
import {Button} from "@components/ui/button.jsx";
import {PlusIcon} from "lucide-react";
import {Badge} from "@components/ui/badge.jsx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@components/ui/accordion"

export const Locations = ({}) => {

    const [location, setLocation] = useState([])
    const [openRecommend,setOpenRecommend] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const location = await axios.get(`${BASE_URL}/locations`)

                console.log(location)
                setLocation(location.data)
            } catch (e) {

            }
        })()
    }, []);

    return <div className="mt-6">

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" >
                <AccordionTrigger>
        <p className="text-2xl font-bold mb-3" onClick={() => setOpenRecommend(true)}>Recommend locations:</p>
                </AccordionTrigger>
                <AccordionContent>
            <div className="flex flex-col gap-3">
                {location.map((item, index) => {
                    return <LocationBox item={item} index={index}/>
                })}
            </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <div className="flex flex-col gap-4">
        </div>
    </div>
}

const LocationBox = ({item, index}) => {
    const [category,setCategory] = useState('')

    useEffect(() => {
        (async  () => {
            try{
                const category = await axios.get(`${BASE_URL}/categories/${item.location_template.category_id}`)
                setCategory(category.data.name)
            }catch (e) {

            }
        })()
    }, []);

    if (index > 2) return
    return <div key={index}
                className="flex justify-between items-center gap-4 p-2  border-gray-200 rounded-xl overflow-hidden border-2 gap-20">
        <div className="flex gap-2 items-center">
            <img className="w-[50px] object-cover flex-1 rounded-lg h-full"
                 src={!item.location_template.image || "https://images.unsplash.com/photo-1726808260756-ec1d4eceaf71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"}
                 alt=""/>
            <div className="w-[85%]">
                <p className="font-semibold">{item.location_template.name}</p>
                <p className="text-gray-600" style={{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>{item.location_template.description || `This is a collection of 'best of' since I moved to the island at the beginning of 2019. Activities/sights, restaurants/bars, shopping, and places to stay in San Jan each have their own section. Other regions each get a single section that combines all of the above.`}</p>
                <div className="mt-2">
                    <Badge variant="outline">{category}</Badge>
                </div>
            </div>
        </div>
        <div className="mr-5">
            <Button size="icon" variant="secondary"><PlusIcon/></Button>
        </div>


    </div>
}