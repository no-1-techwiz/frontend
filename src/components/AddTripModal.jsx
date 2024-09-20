import {
    Dialog, DialogTrigger, DialogTitle, DialogHeader, DialogContent, DialogDescription
} from "@components/ui/dialog.jsx";
import {Button} from "@components/ui/button.jsx";
import {Input} from "@components/ui/input.jsx";
import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@components/ui/popover.jsx";
import {CalendarIcon} from "lucide-react";
import {Calendar} from "@components/ui/calendar.jsx";
import { format } from "date-fns"
import {cn} from "@/lib/utils.js";
import {toast} from "react-toastify";
import {generateUUID} from "@/src/libs/utils.js";
import {useNavigate} from "react-router-dom";

export const AddTripModal = () => {
    const [date, setDate] = useState()
    const [place, setPlace] = useState('')
    const navigate = useNavigate()
    const handleSubmit = () =>{
        if(!place || !date) {
            toast("Please fill all fields",{type:"error"})
            return
        }
        console.log(date, place)
        const id = generateUUID()
        const newTrip = {
            id,
            place,
            startDate: date.from,
            endDate: date.to
        }

        localStorage.setItem(`trip:${id}`, JSON.stringify(newTrip))
        toast("Trip added", {type: "success"})
        navigate(`trip/${id}`)
    }

    return (<div>
        <Dialog>
                <DialogTrigger><Button>Start</Button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl font-semibold">Plan a new trip</DialogTitle>
                        <DialogDescription>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <p className="mb-2">Where to: </p>
                                    <Input value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Enter placement..."/>
                                </div>
                                <div>
                                    <p className="mb-2">Dates: </p>
                                    <div className={cn("grid gap-2 w-full")}>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    id="date"
                                                    variant={"outline"}
                                                    className={cn(
                                                        "justify-start text-left font-normal",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date?.from ? (
                                                        date.to ? (
                                                            <>
                                                                {format(date.from, "LLL dd, y")} -{" "}
                                                                {format(date.to, "LLL dd, y")}
                                                            </>
                                                        ) : (
                                                            format(date.from, "LLL dd, y")
                                                        )
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    initialFocus
                                                    mode="range"
                                                    defaultMonth={date?.from}
                                                    selected={date}
                                                    onSelect={setDate}
                                                    numberOfMonths={2}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>

                    <div className="text-center mt-3">
                        <Button onClick={handleSubmit} className="">Start planning</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>)
}