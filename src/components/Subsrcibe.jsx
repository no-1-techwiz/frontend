import {Input} from "@components/ui/input.jsx";
import {Button} from "@components/ui/button.jsx";
import {useEffect, useState} from "react";
import {useLoggined} from "@/src/libs/hooks/useLoggined.js";

export const Subsrcibe = () => {
    const [email, setEmail] = useState('')
    const [currentEmail, setCurrentEmail] = useState('')
    const {user} = useLoggined()


    useEffect(() => {
        const currentEmail = localStorage.getItem(`email${user?.id}`)
        if (currentEmail) setCurrentEmail(currentEmail)
    }, [user]);


    return <div className="p-20 md:px-48 text-center bg-neutral-100 flex flex-col gap-6 my-16">
        <p className="text-5xl font-bold">Subscribe</p>
        <div>
            <p>Subscribe with us to get the latest information of your plan</p>
            <p>Discover & more about our application</p>
        </div>
        {currentEmail ? <div>{currentEmail}</div> : <div className="flex gap-2 items-center justify-center">
            <Input value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} placeholder="Enter your email" className="max-w-[500px] bg-white"/>
            <Button onClick={() => {
                localStorage.setItem(`email${user?.id}`, email)
                setCurrentEmail(email)
            }} className="px-7">Subscribe</Button>
        </div>}
    </div>
}