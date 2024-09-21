import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import '../styles/ContactPage.css'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@components/ui/form.jsx"

const formSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export const ContactPage = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            email: '',
            message: '',
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="contact-page">
            <div className='contact-main'>
                <div className="contact-list">
                    <div className='contact-text'>
                        <h3>Contact us</h3>
                        <p>We're open for any suggestion or just to have a chat</p>
                    </div>
                    <div className="about-contact">
                        <div className="item-about-contact">
                            <h3>Address:</h3>
                            <a href="">280 Hoang Quoc Viet,Co Nhue,Nam Tu Niem,Ha Noi</a>
                        </div>
                        <div className="item-about-contact">
                            <h3>Email:</h3>
                            <a href="">aptech.edu.vn</a>
                        </div>
                        <div className="item-about-contact">
                            <h3>Phone:</h3>
                            <a href="">+ 123456789</a>
                        </div>
                    </div>
                    <div className='form-contact'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Your username" {...field} className="item-input" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="you@example.com" {...field} className="item-input" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Your message" {...field} className="item-input" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Send Message</Button>
                            </form>
                        </Form>
                    </div>
                    <div className="contact-media">
                        <h3>Follow us here</h3>
                        <div className="list-media">
                            <a href="">Facebook</a>
                            <a href="">Twitter</a>
                            <a href="">Instagram</a>
                            <a href="">Dribbble</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-contact">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6269055963357!2d105.78059437503192!3d21.047609380606406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab32dd484c53%3A0x4201b89c8bdfd968!2zMjM4IEhvw6BuZyBRdeG7kWMgVmnhu4d0LCBD4buVIE5odeG6vywgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1726818284392!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}