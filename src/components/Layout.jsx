import { Outlet, useNavigate } from "react-router-dom";
import { Input } from "@components/ui/input.jsx";
import { Button } from "@components/ui/button.jsx";
import { Bell, Search } from "lucide-react";
import { useLoggined } from "@/src/libs/hooks/useLoggined.js";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import { toCapitalize } from "@/src/libs/utils.js";
import '../styles/Layout.css'
const menu = ['home', 'about', 'contact', 'library']

export const Layout = ({ children }) => {

    const { loggined, loading, user } = useLoggined()
    const navigate = useNavigate()

    return (
        <div className="flex flex-col justify-center items-center">
            <header className="w-[1200px] flex items-center rounded-2xl justify-between py-2">
                <div className="flex items-center gap-8">
                    <div onClick={() => navigate('/')} className="flex items-center gap-1 cursor-pointer">
                        <img className="w-[40px] h-[40px]" src="https://wanderlog.com/assets/logo.png" alt="" />
                        <h1 className="text-red-500 font-semibold">Wanderlog</h1>
                    </div>
                    {menu.map(item => {
                        return <div>
                            <a className="no-underline hover:underline underline-offset-8 text-black font-bold decoration-2 decoration-red-400"
                                href={`/${item}`}>{toCapitalize(item)}</a>
                        </div>
                    })}
                </div>

                <div className="flex gap-5 items-center">
                    <div className="relative flex items-center gap-1">
                        <Input className="w-[270px] pl-10" type="string" placeholder="Search something..." />
                        <Search className="absolute left-2" size={18} />
                    </div>
                    <div className="cursor-pointer hover:text-red-300">
                        <Bell />
                    </div>
                    <div>
                        {loggined ? <DropdownMenu>
                            <DropdownMenuTrigger>
                                <img className="cursor-pointer rounded-full w-[40px] h-[40px] object-cover"
                                    src={user.img || "https://itin-dev.sfo2.cdn.digitaloceanspaces.com/profilePicture/wIO396WUKEh5Hs81"}
                                    alt="" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => {
                                    localStorage.removeItem("accessToken")
                                    navigate("/auth/login")
                                }}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu> : <Button onClick={() => navigate("/auth/login")}>Login</Button>}
                    </div>
                </div>
            </header>
            {children}
            <Outlet />
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
    )
}