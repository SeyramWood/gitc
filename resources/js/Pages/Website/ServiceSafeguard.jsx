import { WebsiteLayout } from "../../components/layouts";

import { AiOutlineFilePdf } from "react-icons/ai";
import ServicesNav from "../../components/layouts/website/ServicesNav";

function ServiceSafeguard() {
    return (
        <WebsiteLayout page="service">
            <div className="bg-white">
                <div className="sm:flex px-4 pt-16 pb-16">
                    <ServicesNav />
                    <div className="sm:w-[70%]">

                        <div className="text-black px-6 pb-16">
                            <h2 className="text-primary sm:text-[4rem] pb-0 ">Safeguard Measures</h2>

                            <div className=" my-10 shadow-xl">
                                <img src="/../images/subsidy.png" className="overflow-hidden w-full sm:h-[28rem] shadow-xl" alt="" />
                            </div>
                            <div className="">
                                <p className="pb-8 text-black">
                                    The Commission provides safeguard measures that ensure domestic producers in Ghana are not
                                    adversely affected by the sudden, sharp, and significant influx of imports.
                                </p>
                                <p className="pb-8 text-black">
                                    The Commission will consider the volume and rate of the increase in imported products in
                                    absolute and relative terms; the percentage or share of the domestic market compared and
                                    ceded to imported products and changes in the levels of sales, production, productivity,
                                    capacity utilization, profits & losses, and employment of
                                    the domestic industry, in determining the imposition of safeguard measures.
                                </p>
                                <p className="pb-8 text-black">
                                    Safeguard measures are reviewed periodically but are not expected to exceed ten years
                                    according to the GITC Act 926 of 2016. Anytime a safeguard measure is imposed,
                                    Ghana shall notify the Committee on Safeguards of the World Trade Organization.
                                </p>
                            </div>
                            <div className="sm:pr-4">
                                <h2 className="text-4xl text-primary">Related Downloads</h2>
                                <i>Downloadable Legislative Instrument </i>
                                <div className="my-2 shadow-lg p-5 cursor-pointer rounded flex  transition duration-500 ease-in-out hover:scale-110 ">
                                    <AiOutlineFilePdf className="w-[4rem] h-[4rem] text-red-700 " />{" "}
                                    <span className="pt-6">
                                        <a className="font-bold" href="\pdfFiles\resourcesPdfs\GITC_SAFEGUARD_MEASURES_REGULATIONS_2020_YET_TO_BE_PASSED.pdf" target="_blank">
                                            GITC (Safeguards Measures) Regulations, 2020 (L.I 2426)
                                        </a>
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

export default ServiceSafeguard;