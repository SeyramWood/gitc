import { WebsiteLayout } from "../../components/layouts";

import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";

function ServiceSubsidy() {
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
                            <h2 className="text-primary text-[4rem] pb-0 pt-16">Trade Remedy</h2>
                            <p className="text-xl"> Subsidy & Countervailing Duties;
                                Anti-Dumping Duties and Safeguard Measures
                            </p>

                            <h2 className="text-red-500 text-4xl font-bold mt-20"> Subsidy & Countervailing Duties</h2>
                            <div className="sm:pr-6 my-10 ">
                                <img src="images/subsidy.png" className="overflow-hidden" alt="" />
                            </div>
                            <div className="">
                                <p className="pb-8 text-black">
                                    Countervailing duty is imposed where subsidy is
                                    specific and causes material injury to a
                                    domestic industry producing a like product or
                                    directly competitive product. .
                                </p>
                                <p className="pb-8 text-black">
                                    A subsidy is considered to exist if the
                                    Government or a public body within the territory
                                    of an exporting country provides a financial
                                    contribution to the manufacturer, producer,
                                    exporter, or transporter of any product which
                                    has been imported into the domestic market and
                                    confers a benefit on the recipient. .
                                </p>
                                <p className="pb-8 text-black">
                                    A financial contribution is considered to have
                                    been granted where a Government practice
                                    involves the direct transfer of funds including
                                    grants, loans and equity infusionto a specific
                                    industry.
                                </p>
                                <p className="pb-8 text-black">
                                    The Commission will trigger an investigation
                                    when it has sufficient evidence of the existence
                                    of the Government or public body's involvement
                                    in the provision of financial contribution to a
                                    manufacturer, producer, exporter, or transporter
                                    of any product, that imposes injury or a threat
                                    of material injury to the domestic industry .

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

export default ServiceSubsidy;