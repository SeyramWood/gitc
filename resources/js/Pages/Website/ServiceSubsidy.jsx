import { AiOutlineFilePdf } from "react-icons/ai";

import { WebsiteLayout } from "../../components/layouts";
import ServicesNav from "../../components/layouts/website/ServicesNav";

function ServiceSubsidy() {
    return (
        <WebsiteLayout page="service">
            <div className="bg-white">
                <div className="px-4 pt-16 sm:flex">
                    <ServicesNav />
                    <div className="sm:w-[70%]">
                        <div className="text-black px-6 pb-16">
                            <h2 className="text-primary sm:text-[3.5rem] pb-0 ">
                                Subsidy &amp; Countervailing Duties
                            </h2>
                            <div className="my-10 shadow-xl ">
                                <img
                                    src="/../images/subsidy.png"
                                    className="overflow-hidden w-full sm:h-[28rem] shadow-xl"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <p className="pb-8 text-black">
                                    A <b>subsidy</b> is considered to exist if the Government or a public body within the territory of
                                    an exporting country provides a financial contribution to the manufacturer, producer, exporter,
                                    or transporter of any product which has been imported into the domestic market and confers a
                                    benefit on the recipient. This may include the provision of grants, loans and equity infusion to a
                                    specific industry of the exporting country.
                                </p>
                                <p className="pb-8 text-black">
                                    The Commission will trigger an investigation when it has sufficient evidence of the
                                    existence
                                    of a subsidy that causes injury or a threat of material injury to the domestic industry.
                                </p>
                                <p className="pb-8 text-black">
                                    <b>Countervailing duty</b> is imposed where subsidy is specific and causes material injury to a
                                    domestic industry producing a like product or directly competitive product.</p>

                            </div>
                            <div className="sm:pr-4">
                                <h2 className="text-4xl text-primary">
                                    Related Downloads
                                </h2>
                                <i>
                                    Downloadable Legislative Instrument
                                </i>
                                <div className="flex p-5 my-2 transition duration-500 ease-in-out rounded shadow-lg cursor-pointer hover:scale-110 ">
                                    <AiOutlineFilePdf className="w-[4rem] h-[4rem] text-red-700 " />{" "}
                                    <span className="pt-6">
                                        {" "}
                                        <a href="\pdfFiles\resourcesPdfs\SUBSIDY_AND_COUNTERVAILING_MEASURES_REGULATIONS_2020_PASSED.pdf" target="_blank" className="font-bold">
                                            GITC (Subsidy and Countervailing Measures) Regulations, 2020 (L.I 2425)
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

export default ServiceSubsidy;
