import React from "react";

const Index = () => {
    return (
        <div className="">
            <div className="h-[45rem] bg-cover bg-[url('https://baconmockup.com/640/303')] ">
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
                        
                        <nav class="flex justify-around  p-4 mx-[7rem]  xs:mx-0 xs:block bg-[rgb(225,35,28)] " >
                            <div class="sm:flex list-none gap-8">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Our Services</li>
                                <li>Resources</li>
                                <li>News</li>
                                <li>Contact us</li>
                            </div>
                        </nav>
                        <div className=" md:pl-24 md:mt-[20rem] xs:text-center xs:mt-10">
                            <p className="text-7xl font-bold">Anti - Dumping</p>
                            <p className="text-3xl ">
                                We provide provide actions that counteract the dumping of goods in Ghana.
                            </p>
                            <div className="mt-8">
                                <button className=" border p-4 mx-1 rounded-full  hover:bg-[rgb(225,35,28)] "> Read More</button>
                                <button className=" border p-4 mx-1 rounded-full  hover:bg-[rgb(225,35,28)] ">Contact Us</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* values */}
            <div className="bg-slate-100  ">
                <div className="p-12 md:flex justify-around ">

                    <div className="border flex">
                        <div className="">
                            <img src="https://www.flaticon.com/free-icon/target_813907?related_id=813907" alt="logo1" />
                        </div>
                        <div className="">
                            <h1 className="text-[30px] text-[rgb(255,0,0)]">Objectivity</h1>
                            <p>
                                To ensure equality and
                                fairness in the application of
                                measures affecting
                                international trade and the
                                use of world trade
                                regulations.
                            </p>
                        </div>

                    </div>
                    <div className="border flex">
                        <div className="">
                            <img src="" alt="logo" />
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
                    <div className="border flex">
                        <div className="">
                            <img src="" alt="logo" />
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

            {/* services */}
            <div className="container mx-auto ">
                <div className="text-center mt-24">
                    <h3 className="text-[60px] font-bold text-[rgb(255,0,0)] ">Services We Provide</h3>
                    <p>COVERED IN THESE AREAS</p>
                </div>

                <div className=" md:flex justify-center mb-16  ">
                    <div className="m-1">
                        <div className="">
                            <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">Trade Remedies</h1>
                            <p>
                                To ensure equality and
                                fairness in the application of
                                measures affecting
                                international trade and the
                                use of world trade
                                regulations.
                            </p>
                            <p className="hover:text-red-500">Read More</p>
                        </div>

                    </div>
                    <div className="m-1">
                        <div className="">
                            <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">Dispute Settlement</h1>
                            <p>
                                To ensure equality and
                                fairness in the application of
                                measures affecting
                                international trade and the
                                use of world trade
                                regulations.
                            </p>
                            <p className="hover:text-red-500">Read More</p>
                        </div>

                    </div>
                    <div className="m-1">
                        <div className="">
                            <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">Tarrif Review</h1>
                            <p>
                                To ensure equality and
                                fairness in the application of
                                measures affecting
                                international trade and the
                                use of world trade
                                regulations.
                            </p>
                            <p className="hover:text-red-500">Read More</p>
                        </div>

                    </div>
                    <div className="m-1">
                        <div className="">
                            <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">Research</h1>
                            <p>
                                To ensure equality and
                                fairness in the application of
                                measures affecting
                                international trade and the
                                use of world trade
                                regulations.
                            </p>
                            <p className="hover:text-red-500">Read More</p>
                        </div>

                    </div>
                </div>

                <button className="block border p-4 rounded-full mx-auto w-[30%] hover:bg-[rgb(255,35,34)]"> View More</button>
            </div>

            {/* story */}
            <div className="mt-11">

                <div className="mb-16">
                    <div className="md:flex justify-center">
                        <div className="border h-[35rem]  ">
                            <img class="w-[80rem] h-[35rem]" src="https://baconmockup.com/640/303" alt="" />
                        </div>
                        <div className="border ">
                            <div className="container p-4  ">
                                <p className="sm:text-[25px]">
                                    DID YOU KNOW THAT
                                </p>
                                <p className="sm:text-[35px] font-bold text-[rgb(255,35,24)] my-5">
                                    GITC is among seven trade
                                    remedy institutions and
                                    investigating authorities in
                                    Africa.
                                </p>
                                <p className="sm:text-[25px] mb-5">
                                    These other African countries are:
                                    Egypt,South Africa, Morocco,
                                    Tunisia,Mauritius, and Madagascar.
                                    These other African countries are:
                                    Egypt,South Africa, Morocco,
                                    Tunisia,Mauritius, and Madagascar.
                                </p>
                                <button className="block border-2 border-[rgb(255,34,23)] p-4 rounded-full mx-auto mt-3 hover:border-8">
                                    Read Our Story
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-center">
                        <div className="border text-white bg-[rgb(255,35,25)] sm:w-[50%]">
                            <div className="container p-4   text-center">
                                <h1 class="text-[3rem]">
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
                                    <p className="py-3">

                                        (d)Protection of the domestic market from the impact of unfair trade practices in the course of international trade.
                                    </p>
                                </div>
                                <button className="block border-2 border-white p-4 mt-3 rounded-full mx-auto w-[30%] hover:border-8">
                                    Read Our Story
                                </button>
                            </div>
                        </div>
                        <div className="border h-[35rem] sm:w-[50%] ">
                            <img class="w-[80rem] h-[35rem]" src="https://baconmockup.com/640/303" alt="" />
                        </div>
                    </div>

                </div>

            </div>

            {/* partners */}
            <div className="bg-gray-100 py-16 px-2">
                <div className="flex justify-center gap-1 h-10rem]">
                    <div className="">
                        <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[10rem]" alt="" />
                    </div>
                    <div className="">
                        <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[10rem]" alt="" />
                    </div>
                    <div className="">
                        <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[10rem]" alt="" />
                    </div>
                    <div className="">
                        <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[10rem]" alt="" />
                    </div>
                    <div className="">
                        <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[10rem]" alt="" />
                    </div>

                </div>
            </div>

            {/* Minister */}
            <div className="mt-[5rem]">

                <div className="mb-16">
                    <div className="md:flex justify-center">
                        <div className="border  ">
                            <img class="w-[80rem] h-[40rem]" src="https://baconmockup.com/640/303" alt="" />
                        </div>
                        <div className="border h-[40rem]  ">
                            <div className="container p-4 border ">
                                <p className="pl-4 sm:text-[2rem] ">
                                    <span className="pl-4 font-bold " >“</span><br />
                                    The bane of development
                                    in developing countries as
                                    against developed
                                    countries is the lack of
                                    industrialization in the
                                    former. The inability of
                                    developing counties.......

                                </p>
                                <h1 className="pl-5 text-6  ">Read More </h1>
                                <div className="pl-5 ">
                                    <h1 class="text-[30px] font-bold text-[rgba(255,23,025)]">
                                        Frank Agyakum
                                    </h1>
                                    <p className="">Executive Secretary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* contact */}
            <div className="md:flex w-full  text-center px-4">
                <div className="sm:w-[50%] ">
                    <div className="container mx-auto">
                        <h1 className="text-[3rem] font-bold text-[rgb(255,35,25)]">Connect with us</h1>
                        <p className="text-[1.3rem]">Please fill out the form and press the submit button.
                            We will get back to you with 1-2 business days.
                        </p>
                    </div>
                </div>
                <div className="sm:w-[50%]  ">
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
