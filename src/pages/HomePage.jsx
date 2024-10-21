import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@components/ui/carousel.jsx'
import '../styles/HomePage.css'
import { Card, CardContent } from '@components/ui/card.jsx'
import {AddTripModal} from "@components/AddTripModal.jsx";
import {RecentlyViewed} from "@components/RecentlyViewed.jsx";
export const HomePage = () => {
    return (
        <div className="home-page">
            <div className="banner-home">
                <div className='content-banner'>
                    <div className="main-banner">
                        <h3>A travel planner for everyone</h3>
                        <p>Organize flights & hotels and map your trips in a free travel app designed for vacation planning & road trips, powered by AI and Google Maps.</p>
                        <AddTripModal>
                            <a className="absolute z-20" href="#">Start planning</a>
                        </AddTripModal>
                    </div>
                    <div className='bg-banner'>
                        <img src="https://wanderlog.com/assets/LandingPageHero__path.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="px-32">
                <RecentlyViewed />
            </div>
            <div className='view-plane'>
                <div className='bg-view-plane'>
                    <img src="https://wanderlog.com/assets/LandingPageProductAnimation__background.jpg" alt="" />
                    <div className='item-view-plane'>
                        <img src="https://wanderlog.com/assets/LandingPageProductAnimation__card1.jpg" alt="" />
                        <img src="https://wanderlog.com/assets/LandingPageProductAnimation__card0.jpg" alt="" />
                        <img src="https://wanderlog.com/assets/LandingPageProductAnimation__card2.jpg" alt="" />
                        <img src="https://wanderlog.com/assets/LandingPageProductAnimation__card3.jpg" alt="" />
                    </div>
                </div>
                <div className='text-view-plane'>
                    <h3>Your itinerary and your map in one view</h3>
                    <p>No more switching between different apps, tabs, and tools to keep track of your travel plans.</p>
                </div>
            </div>
            <div className='comment-home'>
                <h3>What travelers are raving about</h3>
                <div className='main-comment'>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner flex ">
                            <div class="carousel-item active">
                                <div className='content-comment'>
                                    <div className='item-comment'>
                                        <div className='star-comment'>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='text-comment'>
                                            <p>I'm a rather extensive planner when I take trips so this was great. I liked how it auto-filled all of my travel information from my email account.</p>
                                        </div>
                                        <div className='avatar-comment'>
                                            <img src="https://itin-strapi.sfo2.digitaloceanspaces.com/Josh_M_1fe508b124.jpg" alt="" />
                                            <p>Josh M.</p>
                                        </div>
                                    </div>
                                    <div className='item-comment'>
                                        <div className='star-comment'>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='text-comment'>
                                            <p>It left me speechless that I can add places to my trip and they get automatically populated with a featured pic and description from the web.</p>
                                        </div>
                                        <div className='avatar-comment'>
                                            <img src="https://itin-strapi.sfo2.digitaloceanspaces.com/Jorge_D_ca03cc6416.jpg" alt="" />
                                            <p>Jorge D.</p>
                                        </div>
                                    </div>
                                    <div className='item-comment'>
                                        <div className='star-comment'>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='text-comment'>
                                            <p>Very intuitive and simple while still providing a bunch of features, like photos on the destinations, descriptions and suggestions for nearby places to visit.</p>
                                        </div>
                                        <div className='avatar-comment'>
                                            <img src="https://lh3.googleusercontent.com/a/ACg8ocIzqQ19ir0k76gV7coc8okWYZyIX_1plH6LfJcJY8wzct7wQx8=s96-c-rg-br100" alt="" />
                                            <p>Jorge D.</p>
                                        </div>
                                    </div>
                                    <div className='item-comment'>
                                        <div className='star-comment'>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='text-comment'>
                                            <p>I’ve been dreaming of a tool like this for years and finally it’s here! Travellog is my new go-to tool after decades of professional travel.</p>
                                        </div>
                                        <div className='avatar-comment'>
                                            <img src="https://lh3.googleusercontent.com/a/ACg8ocLylRaYGsOxVeFfFWN6BtIJhUF8BML4N2MCWoHmlFWZv3-wnJo=s96-c-rg-br100" alt="" />
                                            <p>Jonwick D.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div class="carousel-item">*/}
                            {/*    <div className='content-comment'>*/}
                            {/*        <div className='item-comment'>*/}
                            {/*            <div className='star-comment'>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*            </div>*/}
                            {/*            <div className='text-comment'>*/}
                            {/*                <p>It left me speechless that I can add places to my trip and they get automatically populated with a featured pic and description from the web.</p>*/}
                            {/*            </div>*/}
                            {/*            <div className='avatar-comment'>*/}
                            {/*                <img src="https://itin-strapi.sfo2.digitaloceanspaces.com/Jorge_D_ca03cc6416.jpg" alt="" />*/}
                            {/*                <p>Jorge D.</p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className='item-comment'>*/}
                            {/*            <div className='star-comment'>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*            </div>*/}
                            {/*            <div className='text-comment'>*/}
                            {/*                <p>I really like how user friendly it is and the auto-save. I also enjoy being able to look at trips that others have planned for inspiration.</p>*/}
                            {/*            </div>*/}
                            {/*            <div className='avatar-comment'>*/}
                            {/*                <img src="https://itin-strapi.sfo2.digitaloceanspaces.com/Inside_The_Travel_Lab_d1ecc97dc7.jpg" alt="" />*/}
                            {/*                <p>Dasha S.</p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className='item-comment'>*/}
                            {/*            <div className='star-comment'>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*            </div>*/}
                            {/*            <div className='text-comment'>*/}
                            {/*                <p>Planning your trip by having all the attractions already plugged into a map makes trip planning so much easier.</p>*/}
                            {/*            </div>*/}
                            {/*            <div className='avatar-comment'>*/}
                            {/*                <img src="https://itin-strapi.sfo2.digitaloceanspaces.com/Couple_Travel_The_World_8cd99ff8e1.jpg" alt="" />*/}
                            {/*                <p>Nadia</p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className='item-comment'>*/}
                            {/*            <div className='star-comment'>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*                <i class="fa-solid fa-star"></i>*/}
                            {/*            </div>*/}
                            {/*            <div className='text-comment'>*/}
                            {/*                <p>Yesterday I walked my kids through the vacation timeline that I've built so far and their excitement levels went way up!</p>*/}
                            {/*            </div>*/}
                            {/*            <div className='avatar-comment'>*/}
                            {/*                <img src="https://itin-strapi.sfo2.digitaloceanspaces.com/Kelvin_S_09c480af0c.jpg" alt="" />*/}
                            {/*                <p>Kelvin S .</p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        {/*<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">*/}
                        {/*    <span class="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                        {/*    <span class="visually-hidden">Previous</span>*/}
                        {/*</button>*/}
                        {/*<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">*/}
                        {/*    <span class="carousel-control-next-icon" aria-hidden="true"></span>*/}
                        {/*    <span class="visually-hidden">Next</span>*/}
                        {/*</button>*/}
                    </div>
                </div>
            </div>
            <div className='feature-about'>
                <h3>Features to replace all your other tools</h3>
                <div className='main-feature'>
                    <div className='item-main-feature'>
                        <img src="https://wanderlog.com/assets/MainFeatureTiles__addPlaces.png" alt="" />
                        <h3>Add places from guides with 1 click</h3>
                        <p>We crawled the web so you don’t have to. Easily save mentioned places.</p>
                    </div>
                    <div className='item-main-feature'>
                        <img src="https://wanderlog.com/assets/MainFeatureTiles__collaborate.png" alt="" />
                        <h3>Collaborate with friends in real time</h3>
                        <p>Plan along with your friends with live syncing and collaborative editing.</p>
                    </div>
                    <div className='item-main-feature'>
                        <img src="https://wanderlog.com/assets/MainFeatureTiles__import.png" alt="" />
                        <h3>Import flight and hotel reservations</h3>
                        <p>Connect or forward your emails to get them magically added into your trip plan.</p>
                    </div>
                    <div className='item-main-feature'>
                        <img src="https://wanderlog.com/assets/MainFeatureTiles__budget.png" alt="" />
                        <h3>Expense tracking and splitting</h3>
                        <p>Keep track of your budget and split the cost between your tripmates.</p>
                    </div>
                    <div className='item-main-feature'>
                        <img src="https://wanderlog.com/assets/MainFeatureTiles__checklist.png" alt="" />
                        <h3>Checklists for anything</h3>
                        <p>Stay organized with a packing list, to-do list, shopping list, any kind of list.</p>
                    </div>
                    <div className='item-main-feature'>
                        <img src="https://wanderlog.com/assets/MainFeatureTiles__recommendations.png" alt="" />
                        <h3>Get personalized suggestions</h3>
                        <p>Find the best places to visit with smart recommendations based on your itinerary.</p>
                    </div>
                </div>
            </div>
            <div className='plane-pro'>
                <h3>Plan like a Pro</h3>
                <p>Unlock premium features like offline access, unlimited attachments, flight deals, export to Google maps, and <span><a href="">much more</a></span></p>
                <div className='main-feature'>
                    <div className='item-main-feature'>
                        <img src="https://wanderlog.com/assets/LandingPageProFeatureTiles__offline.png" alt="" />
                        <h3>Offline access</h3>
                        <p>No wifi, no problem. Your trip plans are locally downloaded for access anywhere.</p>
                    </div>
                    <div className='item-main-feature'>
                        <img src="https://wanderlog.com/assets/LandingPageProFeatureTiles__attachments.png" alt="" />
                        <h3>Collaborate with friends in real time</h3>
                        <p>Never dig through your emails again — access all your trip files and PDFs in one place.</p>
                    </div>
                    <div className='item-main-feature'>
                        <img src="https://wanderlog.com/assets/LandingPageProFeatureTiles__optimize.png" alt="" />
                        <h3>Optimize your route</h3>
                        <p>Perfect for road trips and saving $$$ on gas! Get the best route auto-rearranged.</p>
                    </div>
                </div>
            </div>
            <div className='app-home'>
                <div className='main-app-home'>
                    <div className='text-app-home'>
                        <h3>Plan on the go with our<span><a href=""> free travel app</a></span></h3>
                    </div>
                    <div className='confirm-app'>
                        <a href="">Start planning</a>
                    </div>
                    <div className='bg-app-home'>
                        <img src="https://wanderlog.com/assets/LandingPageGetAppPromo__app.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}