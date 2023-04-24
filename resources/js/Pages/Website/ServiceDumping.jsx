import { WebsiteLayout } from "../../components/layouts";

<<<<<<< HEAD
import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";
import ServicesNav from "../../components/layouts/website/ServicesNav";
=======

import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import ServicesNav from "../../components/layouts/website/ServicesNav";
import ServiceLinks from "../../components/layouts/website/ServiceLinks";
>>>>>>> feature/backend

function ServiceDumping() {
    return (
        <WebsiteLayout page="service">
            <div className="bg-white">
                <div className="px-4 pt-16 pb-16 sm:flex">
                    <ServicesNav />
                    <div className="sm:w-[70%]">
                        {/* <div className="h-[15rem]">
                            <div className="" >
                                <img src="/../images/homePage/headings/SERVICE PAGE.jpg" className="object-contain " alt="" />
                                <div className="">
                                    <h1 className="text-center -translate-y-[14rem] text-red-200/ " >Services</h1>
                                </div>
                            </div>

                        </div> */}
                        <div className="text-black sm:pl-2">
                            <h2 className="text-primary text-[4rem] pb-0 ">
                                Trade Remedies
                            </h2>
                            <p className="text-xl">
                                {" "}
                                Subsidy & Countervailing Duties; Anti-Dumping
                                Duties and Safeguard Measures
                            </p>

                            <h2 className="mt-10 text-4xl font-bold text-red-500">
                                Anti Dumping Duties
                            </h2>
                            <div className="my-10 ">
                                <img
                                    src="/../images/dump.jpg"
                                    className="overflow-hidden w-full h-[28rem]"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <p className="pb-8 text-black">
                                    An anti-dumping duty is a protectionist
                                    tariff that a government imposes on foreign
                                    imports that it believes are priced below
                                    fair market value.
                                </p>
                                <p className="pb-8 text-black">
                                    The purpose of these regulations is to
                                    establish processes for filing dumping
                                    complaints and for imposing anti-dumping
                                    duty after the Commission has duly conducted
                                    an investigation in relation to dumping. The
                                    objective of an anti-dumping investigation
                                    is to determine whether dumping has caused,
                                    is causing, or threatens to cause material
                                    injury to a domestic industry or material
                                    retardation in the establishment of domestic
                                    industry, in order to take necessary
                                    anti-dumping actions.
                                </p>
                                <p className="pb-8 text-black">
                                    These regulations apply to products imported
                                    into Ghana for commercial reasons and meant
                                    for consumption on the local market, in
                                    accordance with the World Trade Organization
                                    Anti-Dumping Agreement.
                                </p>
                                <p className="pb-8 text-black">
                                    Affected domestic industries (those whose
                                    collective output accounts for more than 50%
                                    of the entire production of 'like' goods
                                    generated by the portion of the domestic
                                    industry supporting the complaint) may file
                                    a petition with the Commission in a specific
                                    format, including all necessary requested
                                    data. The Commission will conduct
                                    investigations only when it has sufficient
                                    evidence of dumping, material injury and a
                                    causal link between the dumping and material
                                    injury. In the absence of sufficient
                                    evidence, support and or data supporting the
                                    alleged, the Commission shall not proceed
                                    with investigations.
                                </p>
                            </div>
                            <div className="sm:pr-4">
                                <h2 className="text-4xl text-primary">
                                    Related Downloads
                                </h2>
                                <i>
                                    Downloadable Legislative Instrument and
                                    Questionnaire
                                </i>
                                <div className="flex p-5 my-2 transition duration-500 ease-in-out rounded shadow-lg cursor-pointer hover:scale-110 ">
                                    <AiOutlineFilePdf className="w-[4rem] h-[4rem] text-red-700 " />{" "}
                                    <span className="pt-6">
                                        {" "}
                                        GITC ( Anti-Dumping ) Regulations, 2019
                                        ( L.I 2380 ){" "}
                                    </span>
                                </div>
                                <div className="flex p-5 my-2 mb-5 transition duration-500 ease-in-out rounded shadow-lg cursor-pointer hover:scale-110 ">
                                    <AiOutlineFileWord className="w-[4rem] h-[4rem] text-blue-700" />{" "}
                                    <span className="pt-6">
                                        {" "}
                                        GITC Questionnaire ( Editable )
                                    </span>
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
