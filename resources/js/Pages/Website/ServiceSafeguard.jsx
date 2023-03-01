import { WebsiteLayout } from "../../components/layouts";

import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import ServicesNav from "../../components/layouts/website/ServicesNav";
import ServiceLinks from "../../components/layouts/website/ServiceLinks";

function ServiceSafeguard() {
    return ( 
        <WebsiteLayout page="service">
          <ServiceLinks />
            <div className="bg-white">
                <div className="sm:flex px-4 pt-16">
                    <ServicesNav />
                    <div className="sm:w-[70%]">
                        <div className="text-black px-6">
                            <h2 className="text-primary text-[4rem] pb-0">Trade Remedies</h2>
                            <p className="text-xl"> Subsidy & Countervailing Duties;
                                Anti-Dumping Duties and Safeguard Measures
                            </p>

                            <h2 className="text-red-500 text-4xl font-bold mt-20">Safeguard Measures</h2>
                            <div className=" my-10 ">
                                <img src="/../images/subsidy.png" className="overflow-hidden w-full h-[28rem]" alt="" />
                            </div>
                            <div className="">
                                <p className="pb-8 text-black">
                                    The Commission provides safeguard
                                    measures that ensure that domestic
                                    producers in Ghana are not adversely
                                    affected by the influx of imports.The
                                    Commission will consider the volume and
                                    rate of the increase in imported productsin
                                    absolute and relative terms ; the percentage
                                    or share of the domestic market compared
                                    and ceded to imported products and
                                    changes in the levels of sales, production,
                                    productivity, capacity utilization, profits&
                                    losses and employment of the domestic
                                    industry, indetermining the imposition of
                                    safeguard measures . Safeguard measures
                                    are not expected to exceed ten years
                                    according to the GITC Act 926 of 2016.
                                    Anytime a safeguard measure is imposed,
                                    Ghana shall notify the Committeeon
                                    Safeguards of the World Trade Organization.
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

export default ServiceSafeguard;