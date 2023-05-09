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

                        <div className="text-black px-6">
                            <h2 className="text-primary text-[4rem] pb-0 ">Tariff Review</h2>
                            <div className=" my-10 shadow-xl ">
                                <img src="/../images/service.jpg" className="overflow-hidden w-full sm:h-[28rem] shadow-xl" alt="" />

                            </div>
                            <div className="">
                                <p className="pb-8 ">
                                    The Commission plays a critical role in addressing the tariff competitiveness of Ghana.
                                    Sections 34 and 35 of the GITC Act 926 (2016) affords a domestic producer or a representative
                                    of the domestic industry or a labor association the opportunity to petition the Commission for
                                    a review of tariffs
                                    on imported products that are directly competitive with the products produced by the
                                    petitioner or that are used by the petitioner as inputs for the production of other
                                    products.
                                </p>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}

export default ServiceTarrif;