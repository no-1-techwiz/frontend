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
                <img onClick={() => navigate(`/`)} className="w-[30px] h-[30px]" src="https://wanderlog.com/assets/logo.png" alt=""/>
                {/*<h1 className="text-red-500 font-semibold">Wanderlog</h1>*/}
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