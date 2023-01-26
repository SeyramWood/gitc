import Button from "../../components/layouts/website/Button";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";
import Paragraph from "../../components/layouts/website/Paragraph";

const Contact = () => {
    return (
        <div className="bg-white">
            {/* contacts */}
            <div className="">
                <div class="sm:grid grid-cols-3 px-[6rem] gap-4 ">
                    <div className=" mb-14">
                        <div className="mb-5 sm:block flex justify-center">
                            <img src="images/contact/phone.png" className="w-[3rem]" alt="" />
                        </div>
                        <div className="">
                            <HeadingSecondary>
                                Phone
                            </HeadingSecondary>
                            <Paragraph>
                                +233 030 296 0298
                            </Paragraph>
                        </div>
                    </div>
                    <div className=" mb-14">
                        <div className="mb-5 sm:block flex justify-center">
                            <img src="images/contact/phone.png" className="w-[3rem]" alt="" />
                        </div>
                        <div className="">
                            <HeadingSecondary>
                                Email
                            </HeadingSecondary>
                            <Paragraph>
                                info@gitc.gov.gh
                            </Paragraph>
                        </div>
                    </div>
                    <div className=" mb-14">
                        <div className="mb-5 sm:block flex justify-center">
                            <img src="images/contact/location.png" className="w-[3rem]" alt="" />
                        </div>
                        <div className="">
                            <HeadingSecondary>
                                Lcoation
                            </HeadingSecondary>
                            <Paragraph>
                                2nd Floor (West Wing),
                                5th Link Road,
                                East Cantonments
                                near US Embassy, Accra
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="">
                <div className="text-center pb-6">
                    <HeadingPrimary >
                        Contact Us
                    </HeadingPrimary>
                </div>
                <div className="mx-2 pr-2">
                    <form action="" className="flex justify-center">
                        <div class="grid grid-cols-1 ">
                            <div className="sm:flex  jutify-center gap-4">
                                <input type="text" placeholder="First Name*" required="required" className="m-1 w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                <input type="text" placeholder="Last Name*" required="required" className="m-1 w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                            </div>
                            <div className="sm:flex  jutify-center">
                                <input type="email" placeholder="Email*" required="required" className="m-1 w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                <input type="text" placeholder="Phone Number*" required="required" className="m-1 w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                            </div>
                            <div className="sm:flex  jutify-center">
                                <input type="text" placeholder="Company Name*" required="required" className="m-1 w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                                <input type="text" placeholder="Industry*" required="required" className="m-1 w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />
                            </div>
                            <div className="flex  jutify-center">
                                <input type="text" placeholder="Subject*" required="required" className="m-1 w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" id="" />

                            </div>
                            <div className="flex justify-center">
                                <textarea name="" id="" placeholder="Message" className="m-1 h-[10rem] w-[25rem] bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20" rows="0"></textarea>
                            </div>
                            <div className="">
                                <Button className="mt-[2rem] mb-[3rem]">
                                    Submit Now
                                </Button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

            {/* Map */}
            <div className="p-7 w-fill">
                <img src="images/contact/map.png" className=" sm:w-[90rem]" alt="" />
            </div>
        </div>
    );
}

export default Contact;