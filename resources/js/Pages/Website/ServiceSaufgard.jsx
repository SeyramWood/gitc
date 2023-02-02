import React, { useState } from "react";
import { WebsiteLayout } from "../../components/layouts";
import {
    SlCallIn,
    SlEnvelopeOpen,
    SlLocationPin,
    SlPaperPlane,
} from "react-icons/sl";
import {Link} from "@inertiajs/inertia-react";
import Paragraph from "../../components/layouts/website/Paragraph";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";

const ServiceSaufgard = () => {

    return (
        <WebsiteLayout page="service">
     <div className="bg-white text-black">
         <div className="bg-gray-300  p-3">
             <span>GITC . Our Services . Trade Remedies . Subsidy & Countervailing Duties</span>
         </div>


         <div className="hero min-h-screen bg-accent-content">
             <div className="hero-content flex-col md:flex-row-reverse">
                 <div className="  max-h-4xl mt-20">
                     <HeadingSecondary>
                         Trade Remedy
                     </HeadingSecondary>

                     <Paragraph className="text-sm mb-5">
                         Subsidy & controvailing duties; antidumping duties, safeguard and measures
                     </Paragraph>

                     <HeadingSecondary>
                         Safeguards Measures
                     </HeadingSecondary>


                     <img className="w-screen" src="/images/subsidy.png" alt="Album"/>

                 </div>
                 <div className="card h-46  text-dark  w-full shadow-2sm bg-white  ">
                 <div className="card-body">
                                <HeadingSecondary>
                                    Our Services
                                </HeadingSecondary>
                                <Paragraph>
                                    <Link href="/service/dumping">
                                        Anti - Dumping Duties
                                    </Link>
                                </Paragraph>
                                <Paragraph>
                                    <Link href="/service/subsidy">
                                        Subsidy and Countervailing Duties
                                    </Link>
                                </Paragraph>
                                <Paragraph>
                                    <Link href="/service/safeguard">
                                        Safeguards Measures
                                    </Link>
                                </Paragraph>
                                <Paragraph>
                                    <Link href="/service/dispute">
                                        Dispute Settlement
                                    </Link>
                                </Paragraph>
                                <Paragraph>
                                    <Link href="/service"> Tariff Review</Link>
                                </Paragraph>
                                <Paragraph>
                                    <Link href="/service/research">
                                        Research
                                    </Link>
                                </Paragraph>
                            </div>
                 </div>
             </div>
         </div>
         <div className="hero min-h-screen bg-accent-content">
             <div className="hero-content flex-col lg:flex-row-reverse">
                 <div className="text-center lg:text-left">

                     <p className="py-6 tracking-normal text-xl">
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
                         .</p>
                     <h2 className="text-blue-700">Related Download</h2>
                     <p className="text-sm">Downloadable Legislative Instrument and Questionnaire</p>
                     <div>
                         <div className="card card-side bg-white shadow-xl">
                             <figure className="w-10 bo">
                                 <img src="/images/pdfred.png" alt="Movie"/>
                             </figure>
                             <div className="card-body">
                                 <h2 className="card-title"> GITC(SafeguardsMeasures)Regulations,2020
                                     </h2>
                                 <p>(L.I2426).</p>

                             </div>
                         </div>
                     </div>
                     <div>
                         <div className="card card-side bg-white shadow-xl">
                             <figure className="w-10 bo">
                                 <img src="/images/pdfblue.png" alt="Movie"/>
                             </figure>
                             <div className="card-body">

                                 <p>RGITC Questionnaire (Editable)</p>

                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="card  text-dark flex-shrink-0 w-full max-w-sm shadow-2xl bg-white border-solid border-2 border-sky-500 ">
                     <div className="card-body">
                         <HeadingSecondary>
                             Contact Us
                         </HeadingSecondary>

                         <Paragraph>
                               <span className=" flex ">
                               <span className="text-rose-700"> < SlCallIn/> </span><span className="ml-4"> +233 030 296 0298</span>
                            </span>
                         </Paragraph>
                         <Paragraph>
                               <span className=" flex ">
                            <span className="text-rose-700"> <SlEnvelopeOpen /> </span><span className="ml-4">info@gitc.gov.gh</span>
                            </span>
                         </Paragraph>
                         <Paragraph>
                               <span className=" flex ">
                            <span className="text-rose-700"> <SlLocationPin /> </span><span className="ml-4">GL-040-2630</span>
                            </span>
                         </Paragraph>


                     </div>
                 </div>
             </div>
         </div>
     </div>
        </WebsiteLayout>
    );
};

export default ServiceSaufgard;
