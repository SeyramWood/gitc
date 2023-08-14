import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { WebsiteLayout } from "../../components/layouts";
import ServicesNav from "../../components/layouts/website/ServicesNav";

function ServiceDispute() {
    return (
        <WebsiteLayout page="service">
            <div className="bg-white">
                <div className="sm:flex px-4 pt-16 pb-16">
                    <ServicesNav />
                    <div className="sm:w-[70%]">
                        <div className="text-black px-6">
                            <h2 className="text-primary text-[3rem] pb-0 ">
                                Customs Valuation (Dispute Settlement)
                            </h2>
                            <div className=" my-10 shadow-xl">
                                <img
                                    src="/../images/dispute.jpg"
                                    className="overflow-hidden w-full sm:h-[28rem] shadow-xl"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <p className="pb-8 ">
                                    The GITC Act 926 and the GITC Customs Valuation (Dispute Settlement) Regulations, 2019
                                    (L.I 2382) empowers the Commission to settle a dispute arising as a result of classification,
                                    valuation, or origin determination by the Customs Division of the Ghana Revenue Authority. An
                                    importer or representative of an importer of goods which is the subject matter of a dispute may
                                    lodge a written complaint with the Commission.
                                </p>
                                <p className="pb-8 ">
                                    An importer whose products are the subject matter of a dispute liable for the payment or
                                    the customs duty in relation to that product is not required to pay a penalty for lodging a
                                    complaint in relation to the decision of the Commissioner-General in
                                    respect of the value of customs duty on the products imported.
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
                                <div className="my-2 shadow-lg p-5 cursor-pointer rounded flex  transition duration-500 ease-in-out hover:scale-110 ">
                                    <AiOutlineFilePdf className="w-[4rem] h-[4rem] text-red-700 " />{" "}
                                    <span className="pt-6">
                                        {" "}
                                        <a className="font-bold" href="\pdfFiles\resourcesPdfs\CUSTOMS_VALUATION_AND_DISPUTE_SETTLEMENT_REGULATIONS_2019_L.I_2382.pdf" target="_blank">
                                            GITC (Customs Valuation) (Dispute Settlement) Regulations, 2019 (L.I 2382)
                                        </a>{" "}
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

export default ServiceDispute;
