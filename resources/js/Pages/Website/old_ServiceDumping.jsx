import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import {
    SlCallIn,
    SlEnvelopeOpen,
    SlLocationPin,
    SlPaperPlane,
} from "react-icons/sl";
import {WebsiteLayout} from "../../components/layouts";
import Paragraph from "../../components/layouts/website/Paragraph";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";
const ServiceDumping = () => {

    return (
        <WebsiteLayout page="service">
     <div className="bg-white text-black">
         <div className="bg-gray-300  p-3">
             <span>GITC . Our Services . Trade Remedies . Antidumping Duties</span>
         </div>


         <div className="hero min-h-screen bg-accent-content">
             <div className="hero-content flex-col md:flex-row-reverse">
                 <div className="  max-h-4xl ">
                     <HeadingSecondary>
                         Trade Remedies
                     </HeadingSecondary>

                     <Paragraph>
                         Subsidy & controvailing duties; antidumping duties, safeguard and measures
                     </Paragraph>

                     <HeadingSecondary>
                         Ant-Dumping
                     </HeadingSecondary>

                         <img className="w-screen" src="/images/dump.jpg" alt="Album"/>

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

                     <p  className="py-6 tracking-normal text-xl">
                         An anti-dumping duty is a protectionist tariff that a
                         government imposes on foreign imports that it
                         believes are priced below fair market value.

                     </p>
                     <p  className="py-6 tracking-normal text-xl">
                         The purpose of these regulations is to establish
                         processes for filing dumping complaints and for
                         imposing anti-dumping duty after the Commission
                         has duly conducted an investigation in relation to
                         dumping. The objective of an anti-dumping
                         investigation is to determine whether dumping has
                         caused, is causing, or threatens to cause material
                         injury to a domestic industry or material retardation
                         in the establishment of domestic industry, in order
                         to take necessary anti-dumping actions
                     </p>

                     <p  className="py-6 tracking-normal text-xl">
                         These regulations apply to products imported into
                         Ghana for commercial reasons and meant for
                         consumption on the local market, in accordance
                         with the World Trade Organization Anti-Dumping
                         Agreement.
                     </p>

                     <p className="py-6 tracking-normal text-xl">
                         Affected domestic industries (those whose collective
                         output accounts for more than 50% of the entire
                         production of 'like' goods generated by the portion
                         of the domestic industry supporting the complaint)
                         may file a petition with the Commission in a specific
                         format, including all necessary requested data. The
                         Commission will conduct investigations only when it
                         has sufficient evidence of dumping, material injury
                         and a causal link between the dumping and
                         material injury. In the absence of sufficient evidence,
                         support and or data supporting the alleged, the
                         Commission shall not proceed with investigations.

                     </p>
                     <h2 className="text-blue-700">Related Download</h2>
                     <p className="text-sm">Downloadable Legislative Instrument and Questionnaire</p>
                     <div>
                         <div className="card card-side bg-white shadow-xl">
                             <figure className="w-10 bo">
                                 <img src="/images/pdfred.png" alt="Movie"/>
                             </figure>
                             <div className="card-body">
                                 <h2 className="card-title"> GITC (Subsidy and Countervailing Measures)</h2>
                                 <p>Regulations, 2020 (L.I 2425).</p>

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

export default ServiceDumping;