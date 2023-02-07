import { WebsiteLayout } from "../../components/layouts";

import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";

function ServiceDumping() {
    return (
        <WebsiteLayout page="service">
            <div className="sm:p-8 bg-faded">
                <div className="sm:pl-12  sm:text-[1.1rem]">
                    <span className="sm:px-5 text-md text-primary">GITC .  </span>
                    <span className="sm:px-5 text-md text-primary "> Our Services  . </span>
                    <span className="sm:px-5 text-md text-primary "> Trade Remedies  . </span>
                    <span className="sm:px-5 text-md text-primary "> AntiDumping Duties   </span>
                </div>
            </div>
            <div className="bg-white">
                <div className="sm:flex ">
                    <div className="sm:w-[30%] sm:block hidden p-9">
                        <h2 className="text-3xl ">Our Service</h2>
                        <div className="px-5">
                            <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out">Trade Remedies</p>
                            <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out">Anti-Dumping Duties</p>
                            <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out">Subsidy and Countervailing Duties </p>
                            <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" >Safeguard Measures </p>
                        </div>
                        <p className="py-3 text-red-700 hover:text-red-700/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out">Dispute Settlement</p>
                        <p className="py-3 text-red-700 hover:text-red-700/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"> Tariff Review</p>
                        <p className="py-3 text-red-700 hover:text-red-700/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"> Research</p>
                    </div>
                    <div className="sm:w-[70%]">
                        <div className="text-black">
                            <h2 className="text-primary text-[4rem] pb-0 pt-16">Ant-Dumping</h2>
                            <p className="text-xl"> Subsidy & Countervailing Duties;
                                Anti-Dumping Duties and Safeguard Measures
                            </p>

                            <h2 className="text-red-500 text-4xl font-bold mt-20">Anti Dumping Duties</h2>
                            <div className="sm:pr-6 my-10 ">
                                <img src="images/homePage/serviceOne.jpg" className="overflow-hidden" alt="" />
                            </div>
                            <div className="">
                                <p className="pb-8 text-black">
                                    An anti-dumping duty is a protectionist tariff that a
                                    government imposes on foreign imports that it
                                    believes are priced below fair market value.
                                </p>
                                <p className="pb-8 text-black">
                                    The purpose of these regulations is to establish
                                    processes for filing dumping complaints and for
                                    imposing anti-dumping duty after the Commission
                                    has duly conducted an investigation in relation to
                                    dumping. The objective of an anti-dumping
                                    investigation is to determine whether dumping has
                                    caused, is causing, or threatens to cause material
                                    injury to a domestic industry or material retardation
                                    in the establishment of domestic industry, in order
                                    to take necessary anti-dumping actions.
                                </p>
                                <p className="pb-8 text-black">
                                    These regulations apply to products imported into
                                    Ghana for commercial reasons and meant for
                                    consumption on the local market, in accordance
                                    with the World Trade Organization Anti-Dumping
                                    Agreement.
                                </p>
                                <p className="pb-8 text-black">
                                    Affected domestic industries (those whose collective
                                    output accounts for more than 50% of the entire
                                    production of 'like' goods generated by the portion
                                    of the domestic industry supporting the complaint)
                                    may file a petition with the Commission in a specific
                                    format, including all necessary requested data. The
                                    Commission will conduct investigations only when it
                                    has sufficient evidence of dumping, material injury
                                    and a causal link between the dumping and
                                    material injury. In the absence of sufficient evidence,
                                    support and or data supporting the alleged, the
                                    Commission shall not proceed with investigations.

                                </p>
                            </div>
                            <div className="sm:pr-4">
                                <h2 className="text-4xl text-primary">Related Downloads</h2>
                                <i>Downloadable Legislative Instrument and Questionnaire</i>
                                <div className="my-2 shadow-lg p-5  rounded flex  transition duration-500 ease-in-out hover:scale-110 ">
                                    <AiOutlineFilePdf className="w-[4rem] h-[4rem] text-red-700 " />{" "}
                                    <span className="pt-6">  GITC ( Anti-Dumping ) Regulations, 2019 ( L.I 2380 ) </span>
                                </div>
                                <div className="my-2 shadow-lg p-5 mb-5 rounded flex cursor-pointer transition duration-500 ease-in-out hover:scale-110 ">

                                    <AiOutlineFileWord className="w-[4rem] h-[4rem] text-blue-700" />{" "}
                                    <span className="pt-6"> GITC Questionnaire ( Editable )</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </WebsiteLayout>

    );
}

export default ServiceDumping;