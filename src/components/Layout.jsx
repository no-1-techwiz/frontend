import {Outlet, useNavigate} from "react-router-dom";
import {Input} from "@components/ui/input.jsx";
import {Button} from "@components/ui/button.jsx";
import {Bell, CircleDot, ClockAlert, Dot, Search} from "lucide-react";
import {useLoggined} from "@/src/libs/hooks/useLoggined.js";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import {isMoreThanOneDayFromNow, toCapitalize} from "@/src/libs/utils.js";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "@/src/libs/consts.js";
import "../styles/Layout.css"

const menu = ['home', 'about', 'contact', 'library']

/*
notification: {
    id: string,
    title: string,
    time: string,
    type: 'info' |'success' | 'error' | 'warning' | 'default',

}
 */

export const Layout = ({children}) => {

    const {loggined, loading, user} = useLoggined()
    const navigate = useNavigate()
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        if (!loggined) {
            return
        }
        (async () => {
            const res = await axios.get(`${BASE_URL}/trips`)
            res.data.filter(item => item.user.id == user.id).map(item => {
                // if (isMoreThanOneDayFromNow(item.start_date)) {
                    setNotifications(prev => [...prev, {
                        id: item.id,
                        title: `You have a trip to ${item.destination} on ${item.start_date}`,
                        time: item.start_date,
                        type: 'info',
                    }])
                // }
            })
        })()

    }, [user, loggined]);

    return <div className="flex flex-col justify-center items-center ">
        <div className="sticky top-0 z-50 bg-white w-full flex justify-center">

            <header className="w-[1200px] flex items-center rounded-2xl   justify-between py-2">
                <div className="flex items-center gap-8">
                    <div onClick={() => navigate('/')} className="flex items-center gap-1 cursor-pointer">
                        <img className="w-[50px] h-[40px]"
                             src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.15752-9/394929015_1369607813980095_3837430713076447935_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGHkHyrZC0tG43IuSpfVutDWKTgWvUYxXFYpOBa9RjFcW3exsezPUxirxvhfwbPuzwSPdY4dLztvIdTd5hEfnT-&_nc_ohc=hPoVeY5rBJoQ7kNvgH_ZzMO&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AupVwifjNSmSdcCNh02jQCy&oh=03_Q7cD1QFIk3Arxi-7BDp3-vPg-rBug5MqxH9E9_M1x8R06QrGlg&oe=6716F95C"
                             alt=""/>
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
                        <DropdownMenu>
                            <DropdownMenuTrigger className="relative">
                                <Bell/>
                                <Dot className="text-red-300 absolute -right-5 -top-6" size={50}/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {notifications.map((item,index) => {
                                    if (index >4) return
                                    return <>
                                        <DropdownMenuItem className="flex gap-1 items-center hover:bg-neutral-300" onClick={() => {navigate(`/trip/${item.id}`)}}>
                                            {/*<Dot className="text-blue-600"/>*/}
                                            <ClockAlert className={` ${index < 2 ? "text-red-300" : "text-blue-600"}`}/>
                                            {item.title}
                                        </DropdownMenuItem>
                                    </>
                                })}
                                {/*<DropdownMenuLabel></DropdownMenuLabel>*/}
                                <DropdownMenuItem
                                >
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>

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
                                <DropdownMenuItem
                                    onClick={() => navigate(`/profile/${user.id}`)}>Profile</DropdownMenuItem>
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
        <div className="footer-page">
            <div className="footer-main">
                <h2>For every kind of trip and every destination</h2>
                <div className="text-footer">
                    <div className="item-text-footer">
                        <h3>The best road trip planner</h3>
                        <p>Use Wanderlog as a route map showing directions, distances, and driving times between different attractions you might want to visit.</p>
                    </div>
                    <div className="item-text-footer">
                        <h3>The best vacation planner</h3>
                        <p>Use Wanderlog to map your journey to figure out the best routes, keep track of hotel and flight bookings and reservations, and read guides from other trip planning websites.</p>
                    </div>
                    <div className="item-text-footer">
                        <h3>The best group itinerary planner</h3>
                        <p>Use Wanderlog to share your itinerary with tripmates, friends, and families and collaborate in real time, so everyone stays in the loop.</p>
                    </div>
                </div>
                <div className="router-footer">
                    <div className="router-footer-main">
                        <div className="router-footer-item">
                            <div onClick={() => navigate('/')} className="flex items-center gap-1 cursor-pointer">
                                <img className="w-[60px] h-[60px]" src="https://wanderlog.com/assets/logo.png" alt="" />
                                <h1 className="text-red-500 font-semibold">Wanderlog</h1>
                            </div>
                            <div className="router-footer-icon">
                                <i class="fa-solid fa-location-dot"></i>
                                <a>280 Hoang Quoc Viet,Co Nhue,Nam Tu Niem,Ha Noi</a>
                            </div>
                            <div className="router-footer-icon">
                                <i class="fa-solid fa-phone"></i>
                                <a>+ 123456789</a>
                            </div>
                            <div className="router-footer-icon">
                                <i class="fa-solid fa-envelope"></i>
                                <a href="">aptech.edu.vn</a>
                            </div>
                        </div>
                        <div className="router-footer-item">
                            <h2>Menu</h2>
                            <div className="focus-footer">
                                <i class="fa-solid fa-arrow-right"></i>
                                <a href="/home">Home</a>
                            </div>
                            <div className="focus-footer">
                                <i class="fa-solid fa-arrow-right"></i>
                                <a href="/about">About</a>
                            </div>
                            <div className="focus-footer">
                                <i class="fa-solid fa-arrow-right"></i>
                                <a href="/contact">Contact</a>
                            </div>
                            <div className="focus-footer">
                                <i class="fa-solid fa-arrow-right"></i>
                                <a href="/library">Library</a>
                            </div>

                        </div>
                        <div className="router-footer-item">
                            <h2>Folows Us</h2>
                            <div className="item-media-footer">
                                <input placeholder="Enter your email ..."></input>
                                <div className="icon-item-media">
                                    <i class="fa-regular fa-paper-plane"></i>
                                </div>
                            </div>
                            <div className="item-icon-media">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-square-twitter"></i>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>

}