import { Link } from "@inertiajs/inertia-react";
import axios from "axios";
import { WebsiteLayout } from "../../components/layouts";
import Button from "../../components/layouts/website/Button";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import useFormValidation from "../../components/form/useFormValidation";
import { useState } from "react";

const Contact = () => {
    // const { data, setData, post, progress, processing, reset, errors } =
    //     useForm({
    //         first_name: "",
    //         last_name: "",
    //         email: "",
    //         phone: "",
    //         subject: "",
    //         message: "",
    //         industry: "",
    //     });

    // function submit(e) {
    //     e.preventDefault();
    //     post(route("contact.store"), {
    //         data,
    //         onSuccess: () => {
    //             reset();
    //         },
    //     });
    // }
    const [successMessage, setSuccessMessage] = useState(false)

    const [error, setError] = useState(true)

    const contactForm = useFormValidation(
        {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            companyName: "",
            industry: "",
            subject: "",
            message: "",
        },
        {
            firstName: "required|string",
            lastName: "required|string",
            email: "required|email",
            phone: "required|numeric|min:9|max:9",
            companyName: "string",
            industry: "string",
            subject: "required|string",
            message: "required|string",
        },
        submitForm
    )

    function submitForm() {
        axios.post(`http://127.0.0.1:8000/contact`, contactForm.state)
            .then((response) => {
                contactForm.clearValues(true);
                contactForm.updateIsSubmitting(false);
            })
            .catch((error)=>{
                setError("eerror occured")
            })


        setSuccessMessage(true)
    }

    return (
        <WebsiteLayout page="contactUs">
            <div className="bg-white">
                {/* contacts */}
                <div className="pt-16 text-center">
                    <div class="grid sm:grid-cols-3 grid-cols-2 sm:px-[10rem] sm:gap-4 ">
                        <div className=" mb-14 mt-7">
                            <div className="flex justify-center mb-5 sm:block">
                                <img
                                    src="images/contact/phone.png"
                                    className="sm:w-[3rem] w-[2rem]"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <h2>Phone</h2>
                                <p>+233 030 296 0298</p>
                            </div>
                        </div>
                        <div className=" mb-14 mt-7">
                            <div className="flex justify-center mb-5 sm:block">
                                <img
                                    src="images/contact/email.png"
                                    className="w-[3rem]"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <h2>Email</h2>
                                <p>info@gitc.gov.gh</p>
                            </div>
                        </div>
                        <div className="hidden px-2 sm:px-0 mt-7 sm:block">
                            <div className="flex justify-center mb-5 sm:block">
                                <img
                                    src="images/contact/location.png"
                                    className="w-[3rem]"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <h2>Location</h2>
                                <p>
                                    2nd Floor (West Wing), 5th Link Road, East
                                    Cantonments near US Embassy, Accra
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="px-5 sm:px-32 sm:py-0 py-14">
                    {successMessage ?

                        <div className="pb-6 sm:pt-14 text-center">
                            <HeadingPrimary>Your message is sent !</HeadingPrimary>
                            <Button className=" sm:w-80 mt-[2rem] mb-[3rem] ">
                                <Link href="/">Okay</Link>
                            </Button>
                        </div> :
                        <div>
                            <div className="pb-6 sm:pt-14 text-center">
                                <HeadingPrimary>Leave A Message</HeadingPrimary>
                            </div>
                            <div className="mx-2 sm:pr-2">
                               <h2>
                                {error}
                               </h2>
                                <form onSubmit={contactForm.handleSubmit} className="justify-center ">
                                    <div className="sm:grid grid-cols-2 text-center">

                                        <div className="p-2">
                                            <p className="text-left text-[13px] text-red-600"> {contactForm.errors.firstName}</p>
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name*"

                                                className="w-full rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20"
                                                id="firstName"
                                                onChange={contactForm.handleChange}
                                                value={contactForm.state.firstName}
                                            />
                                        </div>
                                        <div className="p-2">
                                            <p className="text-left text-[13px]  text-red-600">{contactForm.errors.lastName}</p>
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name*"

                                                className="w-full rounded bg-gray-100 border-none p-3 focus:outline-none focus:ring focus:ring-primary/20"
                                                id="lastName"
                                                onChange={contactForm.handleChange}
                                                value={contactForm.state.lastName}
                                            />
                                        </div>
                                        <div className="p-2">
                                            <p className="text-left text-[13px] text-red-600">{contactForm.errors.email}</p>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email*"

                                                className="w-full rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20"
                                                id="email"
                                                onChange={contactForm.handleChange}
                                                value={contactForm.state.email}
                                            />
                                        </div>
                                        <div className="p-2">
                                            {Array.of(contactForm.errors.phone)
                                                .map((it) => (
                                                    Array.of(it).map((a) => (
                                                        <>
                                                            <div className="text-left text-[13px] text-red-600"> {it} </div>
                                                        </>
                                                    ))
                                                    // <>
                                                    //     <p className="text-left text-[13px] text-red-600">{it[0]}  {it[1]} </p>

                                                    // </>
                                                )
                                                )
                                            }
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Phone Number*"

                                                className="w-full rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20"
                                                id="phone"
                                                onChange={contactForm.handleChange}
                                                value={contactForm.state.phone}
                                            />
                                        </div>
                                        <div className="p-2">
                                            <p className="text-left text-[13px] text-red-600">{contactForm.errors.companyName}</p>
                                            <input
                                                type="text"
                                                name="companyName"
                                                placeholder="Company Name*"

                                                className="w-full rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20"
                                                id="companyName"
                                                onChange={contactForm.handleChange}
                                                value={contactForm.state.companyName}
                                            />
                                        </div>
                                        <div className="p-2">
                                            <p className="text-left text-[13px] text-red-600">{contactForm.errors.industry}</p>
                                            <input
                                                type="text"
                                                name="industry"
                                                placeholder="Industry*"

                                                className="w-full rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20"
                                                id="industry"
                                                onChange={contactForm.handleChange}
                                                value={contactForm.state.industry}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <p className="text-left text-[13px] text-red-600">{contactForm.errors.subject}</p>
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject*"

                                            className="w-full  rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20"
                                            id="subject"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.state.subject}
                                        />
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <p className="text-left text-[13px] text-red-600">{contactForm.errors.message}</p>
                                            <textarea
                                                cols="30"
                                                rows="10"
                                                name="message"
                                                id="message"
                                                placeholder="Message"
                                                className="w-full rounded  bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20"
                                                onChange={contactForm.handleChange}
                                                value={contactForm.state.message}

                                            />
                                        </div>

                                    </div>
                                    <div className="">
                                        <Button type="submit" className=" sm:w-80 mt-[2rem] mb-[3rem] ">
                                            Submit Now
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>}
                </div>

                {/* Map */}
                <div className="overflow-hidden sm:p-7">
                    <div className="mapouter">
                        <div className="gmap_canvas ">
                            <iframe
                                width="1290"
                                height="500"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=2nd%20Floor%20(West%20Wing),%20%205th%20Link%20Road,%20East%20Cantonments%20near%20US%20Embassy,%20Accra&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="yes"
                                marginHeight="0"
                                marginWidth="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div >
        </WebsiteLayout >
    );
};

export default Contact;
