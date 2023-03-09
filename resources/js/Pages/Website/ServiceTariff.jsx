import { WebsiteLayout } from "../../components/layouts";
import React from "react";
import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import ServiceLinks from "../../components/layouts/website/ServiceLinks";
import ServicesNav from "../../components/layouts/website/ServicesNav";

function ServiceTarrif() {
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
                            <h2 className="text-primary text-[4rem] pb-0 ">Tariff Review</h2>
                            <div className=" my-10 ">
                                <img src="/../images/service.jpg" className="overflow-hidden w-full h-[28rem]" alt="" />
                                {/* <img src="i" className="overflow-hidden" alt="image" /> */}
                            </div>
                            <div className="">
                                <p className="pb-8 ">
                                    The Ghana International TradeCommission (GITC) 
                                    plays a critical role in addressing the tariff
                                    competitiveness of Ghana. Sections 34 and 35 of
                                    the GITC Act 926 (2016) states that a domestic
                                    producer or a representative of the domestic
                                    industry or a labour association may submit a
                                    petition in writing to the Commission for a review of
                                    customs duty that affects the production and
                                    competitiveness of goods in relation to the
                                    domestic producer or domestic industry and the
                                    grant of a customs duty rebate or draw back so as to
                                    enhance its competitiveness.
                                </p>
                                <p className="pb-8 ">
                                    The product to be subjected to tariff review shall be
                                    imported and either like or directly competitive or
                                    substitutable to the products produced by the
                                    applicant or that are used by the applicant as
                                    inputs for the production of other products.The
                                    commission shall require the petitioner or an
                                    interested party to provide information that relates
                                    to the substance of the petition and provide a
                                    report which sets out the basis for the decision of
                                    the Commission to reject or accept a petition.
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

export default ServiceTarrif;