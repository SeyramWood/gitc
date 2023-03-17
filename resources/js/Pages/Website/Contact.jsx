import Button from "../../components/layouts/website/Button";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";
import Paragraph from "../../components/layouts/website/Paragraph";
import {WebsiteLayout} from "../../components/layouts";
import {useForm, usePage} from "@inertiajs/inertia-react";
import React from "react";

const Contact = () => {
  const {flash} = usePage()
    const { data, setData, post,progress, processing, reset, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        company: '',
        industry: '',
    })

    function submit(e) {
        e.preventDefault()
        post(route('contact.store'), {
            data,
            onSuccess: () => {
                reset()
            },
        });
    }
    return (
        <WebsiteLayout page="contactUs">
        <div className="bg-white">
            {/* contacts */}
            <div className="pt-16">
                <div class="sm:grid grid-cols-3 px-[10rem] gap-4 ">
                    <div className=" mb-14 mt-7">
                        <div className="mb-5 sm:block flex justify-center">
                            <img src="images/contact/phone.png" className="w-[3rem]" alt="" />
                        </div>
                        <div className="">
                            <h2>
                                Phone
                            </h2>
                            <p>
                                +233 030 296 0298
                            </p>
                        </div>
                    </div>
                    <div className=" mb-14 mt-7">
                        <div className="mb-5 sm:block flex justify-center">
                            <img src="images/contact/email.png" className="w-[3rem]" alt="" />
                        </div>
                        <div className="">
                            <h2>
                                Email
                            </h2>
                            <p>
                                info@gitc.gov.gh
                            </p>
                        </div>
                    </div>
                    <div className="  mt-7">
                        <div className="mb-5 sm:block flex justify-center">
                            <img src="images/contact/location.png" className="w-[3rem]" alt="" />
                        </div>
                        <div className="">
                            <h2>
                                Lcoation
                            </h2>
                            <p>
                                2nd Floor (West Wing),
                                5th Link Road,
                                East Cantonments
                                near US Embassy, Accra
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="px-32 py-20 ">
                <div className="text-center pb-6">
                    <HeadingPrimary >
                        Contact Us
                    </HeadingPrimary>
                </div>
                <div className="mx-2 pr-2">
                    <form onSubmit={submit} className="flex justify-center ">
                        <div className="grid grid-cols-1 ">
                            <div className="lg:flex  justify-center gap-3 p-3 ">
                                <input type="text" placeholder="First Name*" required="required" value={data.first_name} onChange={e => setData('first_name', e.target.value)} className="m-1 w-screen  h-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                <input type="text" placeholder="Last Name*" required="required" value={data.last_name} onChange={e => setData('last_name', e.target.value)} className="m-1 w-screen  h-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                            </div>
                            <div className="sm:flex  justify-center gap-3 p-3">
                                <input type="email" placeholder="Email*" required="required"  value={data.email} onChange={e => setData('email', e.target.value)} className="m-1 w-screen  h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                <input type="text" placeholder="Phone Number*" value={data.phone} onChange={e => setData('phone', e.target.value)} required="required" className="m-1 w-screen  h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                            </div>
                            <div className="sm:flex  justify-center gap-3 p-3">
                                <input type="text" placeholder="Company Name*" value={data.company} onChange={e => setData('company', e.target.value)} required="required" className="m-1 w-screen  h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                <input type="text" placeholder="Industry*" value={data.industry} onChange={e => setData('industry', e.target.value)} required="required" className="m-1 w-screen  h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                            </div>
                            <div className="flex  justify-center gap-3 p-3 mb-2">
                                <input type="text" placeholder="Subject*" value={data.subject} onChange={e => setData('subject', e.target.value)} required="required" className="m-1 w-screen  h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />

                            </div>
                            <div className="flex justify-center gap-3 p-3">
                                <textarea name="" id="" placeholder="Message" value={data.message} onChange={e => setData('message', e.target.value)} className="m-1 w-screen  h-80  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" rows="0"></textarea>
                            </div>
                            <div className="">
                                {/*<Button className=" w-80 mt-[2rem] mb-[3rem]"  >*/}
                                    {/*Submit Now*/}
                                {/*</Button>*/}
                                {progress && (
                                    <progress value={progress.percentage} max="100">
                                        {progress.percentage}%
                                    </progress>
                                )}
                                <button className={`block border p-4 sm:w-[20rem] rounded-full mx-auto
         text-white bg-[rgb(255,35,34)] hover:scale-110 transition ease-in-out`}
                                        type="submit"  disabled={processing}>Submit Now

                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

            {/* Map */}
            <div className="p-7 w-screen">
                <div className="mapouter">
                    <div className="gmap_canvas ">
                        <iframe width="1290" height="500" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=2nd%20Floor%20(West%20Wing),%20%205th%20Link%20Road,%20East%20Cantonments%20near%20US%20Embassy,%20Accra&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0" >

                        </iframe>

                    </div>
                </div>
            </div>
        </div>
        </WebsiteLayout>
    );
}

export default Contact;