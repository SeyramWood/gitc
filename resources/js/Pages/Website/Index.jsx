import React from "react";

const Index = () => {
    return (
        <div className="">
            <div className="h-[45rem] border bg-cyan-300">
                {/* header */}
                <div className="h-[45rem] bg-[rgba(0,0,0,0.3)] w-full">

                    <div className="border p-3 bg-white">
                        <ul className="flex justify-around px-3">
                            <li>Mon - Frid 08:00 - 17:00</li>
                            <li>+233(0) 30 296 0298</li>
                            <li>info@gitc.gov.gh</li>
                            <li>GL - 040 - 2630</li>

                        </ul>
                    </div>

                    <div className="mt-7 ">
                        <nav class="flex justify-between border p-4 mx-[7rem]">
                            <img src="" alt="logo" />
                            <div class="flex">
                                <ul class="gap-4">
                                    <a>Home</a>
                                    <a>About Us</a>
                                    <a>Our Services</a>
                                    <a>Resources</a>
                                    <a>News</a>
                                    <a>Contact us</a>
                                </ul>
                            </div>
                        </nav>
                    </div>


                </div>
            </div>

            {/* values */}
            <div className="bg-slate-100  ">
                <div className="p-12 md:flex justify-around ">

                    <div className="border flex">
                        <div className="">
                            <img src="" alt="logo" />
                        </div>
                        <div className="">
                            <h1>Objectivity</h1>
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
                            <h1>Professionalism</h1>
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
                            <h1>Integrity</h1>
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
            <div className="block w-full">
                <div className="flex justify-around my-24">
                    <h3 className="text-4xl">Services We Provide</h3>
                </div>

                <div className="md:flex justify-center mb-16">

                    <div className="m-1">
                        <div className="">
                            <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="">
                            <h1>Objectivity</h1>
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
                    <div className="m-1">
                        <div className="">
                            <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="">
                            <h1>Objectivity</h1>
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
                    <div className="m-1">
                        <div className="">
                            <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="">
                            <h1>Objectivity</h1>
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
                    <div className="m-1">
                        <div className="">
                            <img src="https://baconmockup.com/640/300" class="w-full object-cover h-[15rem]" alt="" />
                        </div>
                        <div className="">
                            <h1>Objectivity</h1>
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
                </div>

                <button className="block border p-4 rounded-full mx-auto w-[30rem]"> View More</button>
            </div>

            {/* story */}

            <div className="">

                <div className="mb-16">
                    <div className="md:flex justify-center">
                        <div className="border max-w-fit">
                            <img class="w-full object-cover" src="https://baconmockup.com/640/303" alt="" />
                        </div>
                        <div className="border max-w-fit">
                            <img src="https://baconmockup.com/640/309" alt="" />
                        </div>
                    </div>
                    <div className="md:flex justify-center">
                        <div className="border max-w-fit">
                            <img src="https://baconmockup.com/640/304" alt="" />
                        </div>
                        <div className="border max-w-fit">
                            <img src="https://baconmockup.com/640/331" alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Index;
