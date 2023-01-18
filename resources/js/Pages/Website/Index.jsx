import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Index = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    let [open, setOpen] = useState(false);

    // dropdowns
    let [aboutDropDown, setAboutDropDown] = useState(false);
    let [serviceDropDown, setServiceDropDown] = useState(false);

    // slide images
    const slide = [
        {
            img: 'https://baconmockup.com/640/303',
        },
        {
            img: 'https://baconmockup.com/640/301',
        },
        {
            img: 'https://baconmockup.com/640/306',
        },
    ];

    // navigation functions
    const [currentIndex, setCurrentIndex] = useState(0);
    const prev = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slide.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const next = () => {
        const lastSlide = currentIndex === slide.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="">
            <div className={`h-[45rem] bg-cover `} style={{ backgroundImage: `url(${slide[currentIndex].img})` }}>
                {/* header */}
                <div className="h-[45rem] bg-[rgba(0,0,0,0.5)] w-full">
                    {/* infor bar */}
                    <div className=" p-3 bg-white ">
                        <ul className="flex justify-around xs:text-xs ">
                            <li className="xs:flex text-center " >Mon-Fri 08:00 - 17:00</li>
                            <li className="xs:flex text-center">+233(0) 30 296 0298</li>
                            <li className="xs:flex text-center">info@gitc.gov.gh</li>
                            <li className="xs:flex text-center">GL-040-2630</li>
                        </ul>
                    </div>
                    <div className="sm:mt-7 text-white ">
                        <nav className="flex justify-around  p-4 mx-[7rem] sm:mx-0 xs:mx-0 xs:block bg-[rgb(225,35,28)] " >
                            {/* toggler */}
                            <div className="sm:hidden flex justify-center cursor-pointer " onClick={() => { setOpen(!open) }}>
                                {open ? 'close' : 'open'}
                            </div>

                            <div className={`sm:flex list-none gap-8 ${open ? '' : 'hidden'}`}>
                                <li className="hover:text-red-100 hover:underline cursor-pointer">Home</li>
                                <li className="hover:text-red-100 hover:underline cursor-pointer block " onClick={() => { setAboutDropDown(!aboutDropDown) }}>About Us
                                    <div className={`absolute text-white border p-3 mx-auto bg-red-300 ${aboutDropDown ? '' : 'hidden'}`}>
                                        <div className="">item One</div>
                                        <div className="">item two</div>
                                        <div className="">item three</div>
                                    </div>
                                </li>
                                <li className="hover:text-red-100 hover:underline cursor-pointer" onClick={() => { setServiceDropDown(!serviceDropDown) }}>Our Services
                                    <div className={`absolute text-white border p-3 bg-red-300 mx-auto  ${serviceDropDown ? '' : 'hidden'}`}>
                                        <div className="">item 1</div>
                                        <div className="">item 2</div>
                                        <div className="">item 3</div>
                                    </div>
                                </li>
                                <li className="hover:text-red-100 hover:underline cursor-pointer">Resources</li>
                                <li className="hover:text-red-100 hover:underline cursor-pointer">News</li>
                                <li className="hover:text-red-100 hover:underline cursor-pointer">Contact us</li>
                            </div>
                        </nav>
                        <div className="px-4 md:pl-24 sm:pl-24 sm:mt-[15rem] md:mt-[20rem] xs:text-center xs:mt-10">
                            <p className="text-7xl font-bold">Anti - Dumping</p>
                            <p className="text-3xl ">
                                We provide provide actions that counteract the dumping of goods in Ghana.
                            </p>
                            <div className="mt-8">
                                <button className=" border p-4 mx-1 rounded-full  hover:bg-[rgb(225,35,28)] "> Read More</button>
                                <button className=" border p-4 mx-1 rounded-full  hover:bg-[rgb(225,35,28)] ">Contact Us</button>
                            </div>
                        </div>
                        {/* nav arrows */}
                        <div className="">
                            <img src="images/left.png" onClick={prev} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 w-6 cursor-pointer " alt="left" />
                        </div>
                        <div className="">
                            <img src="images/right.png" onClick={next} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 w-6 cursor-pointer" alt="right" />
                        </div>
                    </div>
                </div>
            </div>

            {/* values section */}
            <div className="bg-slate-100" >
                <div className="container p-12 md:flex justify-center" data-aos="fade-up" data-aos-duration="2000">
                    <div className="sm:flex my-5">
                        <div className="flex p-3 xs:w-[30%] sm:w-[80%] ">
                            <img src="images/homePage/objectivity.png" alt="Objectivity" className="object-contain" />
                        </div>
                        <div className="">
                            <h1 className="text-[30px] text-[rgb(255,0,0)]">Objectivity</h1>
                            <p className=" ">
                                To ensure equality and
                                fairness in the application of
                                measures affecting
                                international trade and the
                                use of world trade
                                regulations.
                            </p>
                        </div>
                    </div>

                    <div className="sm:flex my-5">
                        <div className="flex p-3 xs:w-[30%] sm:w-[80%] ">
                            <img src="images/homePage/professionalism.png" alt="professional" className="object-contain" />
                        </div>
                        <div className="">
                            <h1 className="text-[30px] text-[rgb(255,0,0)]">Professionalism</h1>
                            <p>
                                To ensure a high level of
                                competence and efficiency
                                in applying international
                                trade rules and regulations
                                as under the World Trade
                                Organization (WTO)
                                provisions.
                            </p>
                        </div>

                    </div>
                    <div className="sm:flex my-5">
                        <div className="flex p-3 xs:w-[30%] sm:w-[80%] ">
                            <img src="images/homePage/integrity.png" alt="Integrity" className="object-contain" />
                        </div>
                        <div className="">
                            <h1 className="text-[30px] text-[rgb(255,0,0)]">Integrity</h1>
                            <p>
                                To ensure absolute
                                neutrality and consistency in
                                the execution of the
                                mandate of the
                                Commission.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* services section*/}
            <div className="container mx-auto ">
                <div className="text-center mt-24">
                    <h3 className="text-[60px] xs:text-[30px] font-bold text-[rgb(255,0,0)] ">Services We Provide</h3>
                    <p className="mb-12">COVERED IN THESE AREAS</p>
                </div>

                <div className=" md:flex justify-center mb-16" data-aos="fade-up" data-aos-duration="2000">
                    <div className="sm:w-[25%]">
                        <div className="">
                            <img src="images/homePage/serviceOne.jpg" className="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="my-9">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">Trade Remedies</h1>
                            <p className="text-[16px]">
                                To ensure equality and
                                fairness in the application of
                                measures affecting
                                international trade and the
                                use of world trade
                                regulations.
                            </p>
                            <p className="hover:text-red-300 text-red-600 pt-4">Read More</p>
                        </div>

                    </div>
                    <div className="sm:w-[25%] ">
                        <div className="">
                            <img src="images/homePage/serviceTwo.jpg" className="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="my-9 ">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">Dispute Settlement</h1>
                            <p className="text-[16px]">
                                Providing actions to
                                resolve issues arising out
                                of a member-state
                                violating the rules and
                                regulationso f the World
                                Trade Organization.
                            </p>
                            <p className="hover:text-red-300 text-red-600 pt-4">Read More</p>
                        </div>

                    </div>
                    <div className="sm:w-[25%]  ">
                        <div className="">
                            <img src="images/homePage/serviceThree.jpg" className="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="my-9">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">Tarrif Review</h1>
                            <p className="text-[16px]">
                                Providing a review of
                                customs duty that affects
                                the production and
                                competitiveness of goods
                                in relation to the
                                domestic producer or
                                domestic industry
                            </p>
                            <p className="hover:text-red-300 text-red-600 pt-4">Read More</p>
                        </div>

                    </div>
                    <div className="sm:w-[25%] ">
                        <div className="">
                            <img src="images/homePage/serviceFour.jpg" className="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="my-9">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">Research</h1>
                            <p className="text-[16px]">
                                The Commission is to
                                study, identify, and
                                recommend to the
                                Minister of Trade and
                                Industry tariff levels for
                                specific sectors of the
                                economy with due regard
                                to the effective rate of
                                protection.
                            </p>
                            <p className="hover:text-red-300 text-red-600 pt-4">Read More</p>
                        </div>

                    </div>
                </div>

                <button className="block border p-4 rounded-full mx-auto hover:text-white hover:bg-[rgb(255,35,34)]"> View More</button>
            </div>

            {/* story section*/}
            <div className="mt-11">
                <div className="mb-16">
                    <div className="md:flex justify-center">
                        <div className=" h-[35rem]  ">
                            <img className="w-[80rem] h-[35rem]" src="images/homePage/storyOne.jpg" alt="" />
                        </div>
                        <div className="" >
                            <div className="container  p-4 " data-aos="fade-up" data-aos-duration="2000">
                                <p className="sm:text-[25px]">
                                    DID YOU KNOW THAT
                                </p>
                                <p className="sm:text-[30px] font-bold text-[rgb(255,35,24)] my-5">
                                    GITC is among seven trade
                                    remedy institutions and
                                    investigating authorities in
                                    Africa.
                                </p>
                                <p className="sm:text-[1.2rem] mb-5">
                                    These other African countries are:
                                    Egypt,South Africa, Morocco,
                                    Tunisia,Mauritius, and Madagascar.
                                    These other African countries are:
                                    Egypt,South Africa, Morocco,
                                    Tunisia,Mauritius, and Madagascar.
                                </p>
                                <button className="block border-[rgb(255,35,24)] border p-4 mt-3 rounded-full mx-auto hover:border-2">
                                    Read Our Story
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-center xs:flex-col-reverse ">
                        <div className=" text-white bg-[rgb(255,35,25)]" >
                            <div className="container p-4 text-center" data-aos="fade-up" data-aos-duration="2000">
                                <h1 className="text-[3rem]">
                                    We ensure:
                                </h1>
                                <div className="sm:text-[1.3rem]">
                                    <p className="py-4">
                                        (a)Ghana’s compliance with international trade rules and regulations;
                                    </p>
                                    <p className="py-3">
                                        (b)Fairness, efficiency, transparency and objectivity in the application of measures affecting international trade rules and the use of world trade regulations;
                                    </p>
                                    <p className="py-3">
                                        (c)Fair ompetition for persons engaged in domestic production and international trade.
                                    </p>
                                    <p className="pt-3">
                                        (d)Protection of the domestic market from the impact of unfair trade practices in the course of international trade.
                                    </p>
                                </div>
                                <button className="block border-white border p-4 mt-3 rounded-full mx-auto hover:border-2">
                                    Read Our Story
                                </button>
                            </div>
                        </div>
                        <div className="h-[35rem] ">
                            <img className="w-[80rem] h-[35rem]" src="images/homePage/storyTwo.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* partners section */}
            <div className="bg-gray-100 py-16 px-2">
                <div className="flex justify-center gap-1 h-10rem]" data-aos="fade-up" data-aos-duration="2000">
                    {/* <div className="">
                        <img src="images/homePage/sponsorOne.jpg" className="w-full object-contain h-[10rem]" alt="" />
                    </div> */}
                    <div className="">
                        <img src="images/homePage/sponsorTwo.png" className="w-full object-contain h-[10rem]" alt="" />
                    </div>
                    <div className="">
                        <img src="images/homePage/sponsorThree.png" className="w-full object-contain h-[10rem]" alt="" />
                    </div>
                    <div className="">
                        <img src="images/homePage/sponsorFour.png" className="w-full object-contain h-[10rem]" alt="" />
                    </div>
                    <div className="">
                        <img src="images/homePage/sponsorFive.png" className="w-full object-contain h-[10rem]" alt="" />
                    </div>
                </div>
            </div>

            {/* Minister */}
            <div className="mt-[5rem]">
                <div className="mb-16">
                    <div className="md:flex justify-center">
                        <div className="border  ">
                            <img className="w-[80rem] sm:h-[25rem]" src="https://baconmockup.com/640/303" alt="" data-aos="zoom-in-down" data-aos-duration="300" />
                        </div>
                        <div className="">
                            <div className="container py-4" data-aos="zoom-in-down" data-aos-duration="500">
                                <img src="images/quote.png" alt="quote" className="w-[8%] pl-5 xs:hidden" />
                                <p className="pl-4 sm:text-[1.8rem] my-2">
                                    The bane of development
                                    in developing countries as
                                    against developed
                                    countries is the lack of
                                    industrialization in the
                                    former. The inability of
                                    developing counties.......
                                </p>
                                <h1 className="pl-5 text-6 my-5 ">Read More </h1>
                                <div className="pl-5 ">
                                    <h1 className="text-[30px] font-bold text-[rgba(255,23,025)]">
                                        Frank Agyakum
                                    </h1>
                                    <p className="">Executive Secretary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact section*/}
            <div className="md:flex w-full  text-center px-4">
                <div className="md:w-[50%] ">
                    <div className="container mx-auto">
                        <h1 className="text-[3rem] font-bold text-[rgb(255,35,25)]">Connect with us</h1>
                        <p className="text-[1.3rem]">Please fill out the form and press the submit button.
                            We will get back to you with 1-2 business days.
                        </p>
                    </div>
                </div>
                <div className="md:w-[50%]  ">
                    <div className="container ">
                        <form action="" className="">
                            <div className="">
                                <input className="m-3 bg-gray-100" placeholder="Full Name *" required="required" type="text" />
                                <input className="m-3 bg-gray-100" placeholder="Email *" required="required" type="Email" />
                            </div>
                            <div className="">
                                <input className="m-3 bg-gray-100" placeholder="Subject *" required="required" type="text" />
                                <input className="m-3 bg-gray-100" placeholder="Phone Number" type="text" />
                            </div>
                            <div className="">
                                {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                                <textarea className="sm:w-[70%] bg-gray-100" rows="4" placeholder="Message" required="required" name="" ></textarea>
                            </div>

                            <button className="border rounded-full px-3 py-2 hover:bg-[rgba(255,34,25)] hover:text-white my-6">Submit Now</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-black px-12 py-12">
                <div className="sm:flex  justify-around gap-9 sm:gap-3 text-white">
                    <ul>
                        <p className="mb-4">Contact Information</p>
                        <li>2nd Floor (West Wing),</li>
                        <li>5th Link Road,East Cantonment</li>
                        <li>near US Embassy, Accra</li>
                        <li className="py-4">+233 030 296 0298</li>
                        <li className="py-4">info@gitc.gov.gh</li>
                        <li className="py-4">GL - 040 - 2630</li>
                    </ul>
                    <ul className="">
                        <p className="mb-4">Useful Links</p>
                        <li className="py-2">About Us</li>
                        <li className="py-2">Our Team</li>
                        <li className="py-2">Our Services</li>
                        <li className="py-2">Resources</li>
                        <li className="py-2">News</li>
                    </ul>
                    <ul>
                        <p className="mb-4">External Links</p>
                        <li className="py-2">Ministry of Trade and Industry</li>
                        <li className="py-2">Ghana Free Zones Authority</li>
                        <li className="py-2">Ghana Revenue Authority</li>
                        <li className="py-2">Ghana Standards Authority </li>
                        <li className="py-2">World Trade Organization </li>
                    </ul>
                    <div className="">
                        <p className="mb-4">Gallery</p>
                        <div className="">
                            <div className="flex gap-2 mb-2">
                                <div className="w-[50] border bg-red-100">1</div>
                                <div className="w-[50] border bg-red-100">2</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-[50] border bg-red-100">1</div>
                                <div className="w-[50] border bg-red-100">2</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full bg-[rgba(0,0,0,0.8)]">
                <h1 className="py-8 text-white  pl-5 ">© Copyright 2022, All Right Reserved, Ghana International Trade Commission</h1>
            </div>


        </div>
    );
};

export default Index;
