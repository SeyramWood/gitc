import { WebsiteLayout } from "../../components/layouts";
import React from "react";
import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import ServiceLinks from "../../components/layouts/website/ServiceLinks";
import ServicesNav from "../../components/layouts/website/ServicesNav";

function ServiceDispute() {
    return ( 
        <WebsiteLayout page="service">
            <div className="bg-white">
                <div className="sm:flex px-4 pt-16 pb-16">
                   <ServicesNav />
                    <div className="sm:w-[70%]">
                        {/* <div className="h-[15rem]">
                            <div className=" " >
                                <img src="/../images/homePage/headings/SERVICE PAGE.jpg" className=" object-contain" alt="" />
                                <div className="">
                                    <h1 className="text-center -translate-y-[14rem] text-red-200/ " >Services</h1>
                                </div>
                            </div>

                        </div> */}
                        <div className="text-black px-6">
                            <h2 className="text-primary text-[4rem] pb-0 ">Dispute Settlement</h2>
                           

                            {/* <h2 className="text-red-500 text-4xl font-bold mt-20">  Dispute Settlement</h2> */}
                            <div className=" my-10 ">
                                <img src="/../images/dispute.jpg" className="overflow-hidden w-full h-[28rem]" alt="" />
                                {/* <img src="i" className="overflow-hidden" alt="image" /> */}
                            </div>
                            <div className="">
                                <p className="pb-8 ">
                                    Customs valuation is a customs procedure applied
                                    to determine or assess the customs value of
                                    imported goods. If the rate of duty is ad
                                    valorem, the customs value is important to
                                    determine the duty to be paid on an imported
                                    good. The purpose of this regulation is to
                                    establish procedures that will solve disputes
                                    arising as a result of classification,
                                    valuation, or origin determination by the
                                    customs division of the Ghana Revenue Authority.
                                </p>
                                <p className="pb-8 ">
                                    An importer of goods which are the subject
                                    matter of a dispute as a result of
                                    classification, valuation, or origin
                                    determination by the customs division of the
                                    Ghana Revenue Authority may file a petition or
                                    lodge a written complaint with the Commission in
                                    a specific format including all the necessary
                                    information and documents required by the
                                    Commission. The Commission may conduct its
                                    investigation in relation to a dispute for which
                                    a complaint has been lodged and may make
                                    available information or results of
                                    investigation to the parties involved.
                                </p>
                         
                            </div>
                            <div className="sm:pr-4">
                                <h2 className="text-4xl text-primary">Related Downloads</h2>
                                <i>Downloadable Legislative Instrument and Questionnaire</i>
                                <div className="my-2 shadow-lg p-5 cursor-pointer rounded flex  transition duration-500 ease-in-out hover:scale-110 ">
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

export default ServiceDispute;