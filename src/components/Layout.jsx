import {Outlet, useNavigate} from "react-router-dom";
import {Input} from "@components/ui/input.jsx";
import {Button} from "@components/ui/button.jsx";
import {Bell, Search} from "lucide-react";
import {useLoggined} from "@/src/libs/hooks/useLoggined.js";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import {toCapitalize} from "@/src/libs/utils.js";

const menu = ['home', 'about', 'contact', 'library']

export const Layout = ({children}) => {

    const {loggined, loading, user} = useLoggined()
    const navigate = useNavigate()

    return <div className="flex flex-col justify-center items-center ">
        <div className="sticky top-0 z-50 bg-white w-full flex justify-center">

        <header className="w-[1200px] flex items-center rounded-2xl   justify-between py-2">
            <div className="flex items-center gap-8">
                <div onClick={() => navigate('/')} className="flex items-center gap-1 cursor-pointer">
                    <img className="w-[50px] h-[40px]" src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.15752-9/394929015_1369607813980095_3837430713076447935_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGHkHyrZC0tG43IuSpfVutDWKTgWvUYxXFYpOBa9RjFcW3exsezPUxirxvhfwbPuzwSPdY4dLztvIdTd5hEfnT-&_nc_ohc=hPoVeY5rBJoQ7kNvgH_ZzMO&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AupVwifjNSmSdcCNh02jQCy&oh=03_Q7cD1QFIk3Arxi-7BDp3-vPg-rBug5MqxH9E9_M1x8R06QrGlg&oe=6716F95C" alt=""/>
                    <h1 className="text-blue-400 font-semibold">Travellog</h1>
                </div>
                {menu.map(item => {
                    return <div>
                        <a className="no-underline hover:underline underline-offset-8 text-black font-bold decoration-2 decoration-red-400"
                           href={`/${item}`}>{toCapitalize(item)}</a>
                    </div>
                })}
            </div>

            <div className="flex gap-5 items-center">
                {/*<div className="relative flex items-center gap-1">*/}
                {/*    /!*<Input className="w-[270px] pl-10" type="string" placeholder="Search something..."/>*!/*/}
                {/*    <Search className="absolute left-2" size={18}/>*/}
                {/*</div>*/}
                <div className="cursor-pointer hover:text-red-300">
                    <Bell/>
                </div>
                <div>
                    {loggined ? <DropdownMenu>
                        <DropdownMenuTrigger>
                            <img className="cursor-pointer rounded-full w-[40px] h-[40px] object-cover"
                                 src={user.img || "https://itin-dev.sfo2.cdn.digitaloceanspaces.com/profilePicture/wIO396WUKEh5Hs81"}
                                 alt=""/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={() => navigate(`/profile/${user.id}`)}>Profile</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => {
                                localStorage.removeItem("accessToken")
                                navigate("/auth/login")
                            }}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> : <Button onClick={() => navigate("/auth/login")}>Login</Button>}
                </div>
            </div>
        </header>
        </div>
        {children}
        <Outlet/>
    </div>

}