import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";

import { WebsiteLayout } from "../../components/layouts";
import ServicesNav from "../../components/layouts/website/ServicesNav";

function ServiceDumping() {
    return (
        <WebsiteLayout page="service">
            <div className="bg-white">
                <div className="px-4 pt-16 pb-16 sm:flex">
                    <ServicesNav />
                    <div className="sm:w-[70%]">
                        <div className="px-6 pb-16 text-black">
                            <h2 className="text-primary sm:text-[4rem] pb-0 ">
                                Anti Dumping Duties
                            </h2>

                            <div className="my-10 shadow-xl">
                                <img
                                    src="/../images/dump.jpg"
                                    className="overflow-hidden w-full sm:h-[28rem] shadow-xl"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <p className="pb-8 text-black">
                                    <b>Dumping</b> means the introduction of a product into the commerce of another country at
                                    less than its normal product value in the ordinary course of trade, for the like product when
                                    destined for consumption in the exporting country.
                                </p>
                                <p className="pb-8 text-black">
                                    The Commission will trigger an investigation when it has sufficient evidence of the
                                    existence of dumping that causes injury or a threat of material injury to the domestic
                                    industry.

                                </p>
                                <p className="pb-8 text-black">
                                    Anti-dumping duty is imposed where dumping causes material injury to a
                                    domestic
                                    industry producing a like product or directly competitive product.
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
                                        <a href="\pdfFiles\resourcesPdfs\GITC_ANTI_DUMPING_REGULATIONS,2019_PASSED.pdf" target="_blank">
                                            GITC ( Anti-Dumping ) Regulations, 2019
                                            ( L.I 2380 )</a>{" "}
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
