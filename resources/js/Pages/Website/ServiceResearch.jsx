import { WebsiteLayout } from "../../components/layouts";


import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import ServicesNav from "../../components/layouts/website/ServicesNav";
import ServiceLinks from "../../components/layouts/website/ServiceLinks";

function ServiceResarch() {
    return ( 
        <WebsiteLayout page="service">
           <ServiceLinks />
            <div className="bg-white">
                <div className="sm:flex px-4 pt-16">
                   <ServicesNav />
                    <div className="sm:w-[70%]">
                        <div className="text-black px-5">
                            <h2 className="text-primary text-[4rem] pb-0 "> Research</h2>
                            <div className="my-10 ">
                                <img src="/../images/research.png" className="overflow-hidden w-full h-[28rem]" alt="" />
                            </div>
                            <div className="">
                                <p className="pb-8">
                                    The Ghana International Trade Commission’s (GITC)
                                    objective is to ensure fair competition for persons
                                    engaged in domestic production and protect the
                                    domestic market from the impact of unfair trade
                                    practices. To enable the Commission to properly
                                    play its role, the GITC Act 926 (2016) mandates the
                                    Commission to study, identify, and recommend to
                                    the Minister of Trade and Industry tariff levels for
                                    specific sectors of the economy with due regard to
                                    the effective rate of protection
                                </p>
                                <p className="pb-8 ">
                                    The Commission is also mandated to conduct
                                    studies and publish reports on the competitiveness
                                    of Ghana’s tariff structure and its impact on local
                                    industry. The Minister may give directives to the
                                    Commission on matters of policy other than
                                    matters under adjudication and the directives shall
                                    be consistent with the object of this Act.
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

export default ServiceResarch ;