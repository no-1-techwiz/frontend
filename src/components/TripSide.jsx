import {Sparkles} from "lucide-react";
import {Button} from "@components/ui/button.jsx";
import {useState} from "react";
import {toCapitalize} from "@/src/libs/utils.js";
import {useNavigate} from "react-router-dom";

const listMenu = ['overview','note', 'budget','locations' ]

export const TripSide = ({children}) => {

    const [selected, setSelected] = useState(listMenu[0])
    const navigate  = useNavigate()

    return <div className="w-full  h-[100dvh]">
        <div className="flex gap-3 border-b-2 py-2">
            <div className="flex items-center gap-1 cursor-pointer pl-[150px]">
                <img onClick={() => navigate(`/`)} className="w-[30px] h-[30px]" src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.15752-9/394929015_1369607813980095_3837430713076447935_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGHkHyrZC0tG43IuSpfVutDWKTgWvUYxXFYpOBa9RjFcW3exsezPUxirxvhfwbPuzwSPdY4dLztvIdTd5hEfnT-&_nc_ohc=hPoVeY5rBJoQ7kNvgH_ZzMO&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AupVwifjNSmSdcCNh02jQCy&oh=03_Q7cD1QFIk3Arxi-7BDp3-vPg-rBug5MqxH9E9_M1x8R06QrGlg&oe=6716F95C" alt=""/>
                {/*<h1 className="text-red-500 font-semibold">Travellog</h1>*/}
            </div>
        </div>
        <div className="flex">
            <div className="w-[150px] h-[90dvh] border-r-2 py-5 sticky top-0">
                <div>
                    <div style={{background: "linear-gradient(45deg,#f75940,#7045af)"}} className="text-white flex items-center px-6 w-[160px] py-2 rounded-full"><Sparkles /> Categories</div>
                </div>
                <div className="mt-3">
                    {listMenu.map(item => {
                        return <div className="flex gap-3 items-center py-2 rounded-full">
                            <Button variant={!(selected == item) ? "ghost" : "default"} onClick={() => {
                                const element = document.getElementById(item);
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                                setSelected(item)
                            }} className="w-full py-5">{toCapitalize(item)}</Button>
                        </div>
                    })}
                </div>
            </div>
            <div className="w-full max-h-[90dvh] overflow-y-auto">{children}</div>
        </div>
    </div>
}