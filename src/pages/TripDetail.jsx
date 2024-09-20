import {useParams} from "react-router-dom";
import {useState, useCallback, useEffect} from "react";
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import {TripSide} from "@components/TripSide.jsx";
import {Button} from "@components/ui/button.jsx";
import {BetweenHorizontalEnd, CalendarIcon, Pencil, PenLine, Plus, Settings} from "lucide-react";
import {Input} from "@components/ui/input.jsx";
import {toast} from "react-toastify";
import {format} from 'date-fns';
import {Popover, PopoverContent, PopoverTrigger} from "@components/ui/popover.jsx";
import {cn} from "@/lib/utils.js";
import {Calendar} from "@components/ui/calendar.jsx";
import {Textarea} from "@components/ui/textarea.jsx";
import {
    Dialog, DialogContent, DialogTitle, DialogTrigger
} from "@components/ui/dialog.jsx";
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@components/ui/select.jsx";

/*
trip {
    title: string,
    note: string
    startDate: string,
    endDate: string,
    currency: string,

}
 */

export const TripDetail = () => {

    const {id} = useParams()
    const [trip, setTrip] = useState()
    const [isEditTitle, setIsEditTitle] = useState(false)
    const [isEditNote, setIsEditNote] = useState(false)
    const [openBudget, setOpenBudget] = useState(false)
    const [budgetVal, setBudgetVal] = useState('')
    const [currencyVal, setCurrencyVal] = useState('$')

    useEffect(() => {
        const getTrip = () => {
            const currentTrip = JSON.parse(localStorage.getItem(`trip:${id}`))
            console.log(currentTrip)
            setTrip(currentTrip)
        }
        getTrip()
    }, [id]);

    const handleSetTrip = (newTrip) => {
        setTrip(newTrip)
        localStorage.setItem(`trip:${id}`, JSON.stringify(newTrip))
    }

    if (!trip) return <div>Loading...</div>


    return <div className="flex justify-between h-[100dvh] ">
        <div className="w-[60%] min-h-screen" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <TripSide>
                <div className="w-full relative" id="overview">
                    <img className="w-full h-[250px] object-cover object-center"
                         src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/HPsJUyz4sfWmWXZ0134FKFzrGVq0xhYQ"
                         alt=""/>
                    <div className="absolute bottom-[-30px] left-[50%] p-[30px] bg-white min-w-[400px] rounded-xl"
                         style={{transform: "translateX(-50%)", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                        {!isEditTitle ? <div className="flex gap-2 items-center">
                            <p className="text-3xl font-semibold">Trip to {trip.place}</p>
                            <Button size="icon" variant="ghost" onClick={() => setIsEditTitle(true)}><PenLine
                                size={20}/></Button>
                        </div> : <Input defaultValue={trip.place} onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                console.log('do validate');
                                handleSetTrip({...trip, place: e.target.value})
                                setIsEditTitle(false)
                                toast('Title updated')
                            }
                        }}/>}

                        <div className="mt-10">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        id="date"
                                        variant={"outline"}
                                        className={cn("justify-start text-left font-normal", !trip && "text-muted-foreground")}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4"/>
                                        {trip?.startDate ? (trip.endDate ? (<>
                                            {format(trip.startDate, "LLL dd, y")} -{" "}
                                            {format(trip.endDate, "LLL dd, y")}
                                        </>) : (format(trip.startDate, "LLL dd, y"))) : (<span>Pick a date</span>)}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        initialFocus
                                        mode="range"
                                        defaultMonth={trip?.startDate}
                                        selected={{from: trip.startDate, to: trip.endDate}}
                                        onSelect={({from, to}) => {
                                            handleSetTrip({...trip, startDate: from, endDate: to})
                                        }}
                                        numberOfMonths={2}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
                <div className="px-16">
                    <div className="flex flex-col gap-2 mt-10" id="note">
                        <p className="font-bold text-2xl">Note:</p>
                        <div>
                            {!isEditNote ? <div className="flex gap-2 items-center">
                                    <p className="text-2xl font-medium">{trip.note || "Write or paste anything here"}</p>
                                    <Button size="icon" variant="ghost" onClick={() => setIsEditNote(true)}><PenLine
                                        size={20}/></Button>
                                </div> :
                                <Textarea placeholder="Write or paste anything here: how to get around, tips and tricks"
                                          className="w-[80%]"
                                          defaultValue={trip.note} onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        console.log('do validate');
                                        handleSetTrip({...trip, note: e.target.value})
                                        setIsEditNote(false)
                                        toast('Note updated')
                                    }
                                }}/>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-10" id="budget">
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-bold">Budgeting</p>
                            <Button className="flex items-center gap-2"><Plus/> Add expense</Button>
                        </div>
                        <div className="bg-neutral-100 p-6 flex justify-between items-center rounded-xl">
                            <div>
                                <p className="text-3xl font-medium mb-4">{trip.currency || "$"}{(+trip.budget || 0).toFixed(2)}</p>
                                <div className="flex items-center gap-4">
                                    <Dialog open={openBudget} onOpenChange={setOpenBudget}>
                                        <DialogTrigger>
                                            <Button variant="secondary"
                                                    className="bg-[#dee2e6] flex items-center gap-2 rounded-full"><Pencil/> Set
                                                budget</Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogTitle className="text-center text-2xl">Budget</DialogTitle>
                                            <div className="flex gap-1 ">
                                                <Select defaultValue="vnd" value={currencyVal} onValueChange={e => {
                                                    console.log("select", e)
                                                    setCurrencyVal(e)
                                                }}>
                                                    <SelectTrigger className="w-[80px]">
                                                        <SelectValue placeholder="$"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Currency</SelectLabel>
                                                            <SelectItem value="$">$</SelectItem>
                                                            <SelectItem value="€">€</SelectItem>
                                                            <SelectItem value="£"> £</SelectItem>
                                                            <SelectItem value="vnd">VND</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                                <Input type="number" placeholder="Amount" className="w-[300px]"
                                                       defaultValue={trip.budget || budgetVal}
                                                       onChange={(e) => setBudgetVal(e.target.value)}/>
                                            </div>
                                            <div className="flex justify-center">
                                                <Button className="px-20" onClick={() => {
                                                    trip.budget !==  budgetVal  && handleSetTrip({...trip, budget: budgetVal, currency: currencyVal})
                                                    setOpenBudget(false)
                                                    toast('Budget updated')
                                                }}>Save</Button>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <Button variant="secondary"
                                            className="bg-[#dee2e6] flex items-center gap-2 rounded-full"><BetweenHorizontalEnd/> Debt
                                        summary</Button>
                                </div>
                            </div>
                            <div className="flex gap-3 ">
                                <div className="h-[70px] w-[2px] bg-neutral-300"></div>
                                <div className="flex gap-1 items-center">
                                        <Settings />
                                    <p className="font-medium text-neutral-500 cursor-pointer">
                                        Settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TripSide>

        </div>
        <div className="relative w-[39.7%]">
            <div>
                <iframe className="w-full h-screen" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps tracker sport</a></iframe>
            </div>
        </div>
    </div>
}