import {
    Dialog, DialogTrigger, DialogTitle, DialogHeader, DialogContent, DialogDescription
} from "@components/ui/dialog.jsx";
import {Button} from "@components/ui/button.jsx";
import {Input} from "@components/ui/input.jsx";
import {Popover, PopoverContent, PopoverTrigger} from "@components/ui/popover.jsx";
import {useState} from "react";
import {CalendarIcon} from "lucide-react";
import { format } from "date-fns"
import {cn} from "@/lib/utils.js";
import {Calendar} from "@components/ui/calendar.jsx";

export const AddTripModal = () => {
    const [date, setDate] = useState()
    return (<div>
        <Dialog>
                <DialogTrigger><Button>Start</Button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Plan a new trip</DialogTitle>
                        <DialogDescription>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <p>Where to: </p>
                                    <Input plaaceholder="Enter placement..."/>
                                </div>
                                <div>
                                    <p>Dates: </p>
                                    <div className={cn("grid gap-2 w-full")}>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    id="date"
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[300px] justify-start text-left font-normal",
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
                </DialogContent>
            </Dialog>
        </div>)
}