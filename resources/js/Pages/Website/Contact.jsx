import Button from "../../components/layouts/website/Button";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";
import Paragraph from "../../components/layouts/website/Paragraph";
import { WebsiteLayout } from "../../components/layouts";

const Contact = () => {
    return (
        <WebsiteLayout page="contactUs">
            <div className="bg-white">
                {/* contacts */}
                <div className="pt-16 text-center">
                    <div class="grid sm:grid-cols-3 grid-cols-2 sm:px-[10rem] sm:gap-4 ">
                        <div className=" mb-14 mt-7">
                            <div className="mb-5 sm:block flex justify-center">
                                <img src="images/contact/phone.png" className="sm:w-[3rem] w-[2rem]" alt="" />
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
                        <div className="px-2 sm:px-0  mt-7 sm:block hidden">
                            <div className="mb-5 sm:block flex justify-center">
                                <img src="images/contact/location.png" className="w-[3rem]" alt="" />
                            </div>
                            <div className="">
                                <h2>
                                    Location
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
                <div className="sm:px-32  px-5 sm:py-0 py-14">
                    <div className="text-center pb-6">
                        <HeadingPrimary >
                            Contact Us
                        </HeadingPrimary>
                    </div>
                    <div className="mx-2 sm:pr-2">
                        <form action="" className="sm:flex justify-center ">
                            <div className="grid grid-cols-1 ">
                                <div className="sm:flex  justify-center gap-3 sm:p-3 ">
                                    <input type="text" placeholder="First Name*" required="required" className="m-1 sm:mb-0 mb-2 sm:w-screen w-full sm:h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                    <input type="text" placeholder="Last Name*" required="required" className="m-1 sm:mb-0 mb-2  sm:w-screen w-full sm:h-full   bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                </div>
                                <div className="sm:flex  justify-center gap-3 sm:p-3">
                                    <input type="email" placeholder="Email*" required="required" className="m-1 sm:mb-0 mb-2  sm:w-screen  sm:h-full w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                    <input type="text" placeholder="Phone Number*" required="required" className="m-1 sm:mb-0 mb-2  sm:w-screen w-full sm:h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                </div>
                                <div className="sm:flex  justify-center gap-3 sm:p-3">
                                    <input type="text" placeholder="Company Name*" required="required" className="m-1 sm:mb-0 mb-2  sm:w-screen  sm:h-full w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                    <input type="text" placeholder="Industry*" required="required" className="m-1  sm:mb-0 mb-2 sm:w-screen  sm:h-full w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                </div>
                                <div className="sm:flex  justify-center gap-3 sm:p-3 ">
                                    <input type="text" placeholder="Subject*" required="required" className="m-1 sm:mb-0 mb-2  sm:w-screen  sm:h-full w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />

                                </div>
                                <div className="sm:flex justify-center gap-3 sm:p-3">
                                    <textarea name="" id="" placeholder="Message" className="m-1 sm:w-screen  sm:mb-0 mb-2  sm:h-80 w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" rows="0"></textarea>
                                </div>
                                <div className="">
                                    <Button className=" sm:w-80 mt-[2rem] mb-[3rem] ">
                                        Submit Now
                                    </Button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="sm:p-7 overflow-hidden">
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