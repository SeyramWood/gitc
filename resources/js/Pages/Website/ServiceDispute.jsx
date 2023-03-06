import { WebsiteLayout } from "../../components/layouts";
<<<<<<< HEAD
import React from "react";
import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import ServiceLinks from "../../components/layouts/website/ServiceLinks";
import ServicesNav from "../../components/layouts/website/ServicesNav";

function ServiceDispute() {
    return ( 
        <WebsiteLayout page="service">
             <ServiceLinks />
            <div className="bg-white">
                <div className="sm:flex px-4 pt-16">
                   <ServicesNav />
                    <div className="sm:w-[70%]">
                        <div className="text-black px-6">
                            <h2 className="text-primary text-[4rem] pb-0 ">Dispute Settlement</h2>
                           

                            {/* <h2 className="text-red-500 text-4xl font-bold mt-20">  Dispute Settlement</h2> */}
                            <div className=" my-10 ">
                                <img src="/../images/dispute.jpg" className="overflow-hidden w-full h-[28rem]" alt="" />
                                {/* <img src="i" className="overflow-hidden" alt="image" /> */}
                            </div>
                            <div className="">
                                <p className="pb-8 ">
                                    Customs valuation is a customs procedure applied
                                    to determine or assess the customs value of
                                    imported goods. If the rate of duty is ad
                                    valorem, the customs value is important to
                                    determine the duty to be paid on an imported
                                    good. The purpose of this regulation is to
                                    establish procedures that will solve disputes
                                    arising as a result of classification,
                                    valuation, or origin determination by the
                                    customs division of the Ghana Revenue Authority.
                                </p>
                                <p className="pb-8 ">
                                    An importer of goods which are the subject
                                    matter of a dispute as a result of
                                    classification, valuation, or origin
                                    determination by the customs division of the
                                    Ghana Revenue Authority may file a petition or
                                    lodge a written complaint with the Commission in
                                    a specific format including all the necessary
                                    information and documents required by the
                                    Commission. The Commission may conduct its
                                    investigation in relation to a dispute for which
                                    a complaint has been lodged and may make
                                    available information or results of
                                    investigation to the parties involved.
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
=======
import {Link} from "@inertiajs/inertia-react";
import Paragraph from "../../components/layouts/website/Paragraph";
import {
    SlCallIn,
    SlEnvelopeOpen,
    SlLocationPin,
    SlPaperPlane,
} from "react-icons/sl";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";
const ServiceDispute = () => {

    return (
        <WebsiteLayout page="home">
     <div className="bg-white ">
         <div className="bg-gray-300  p-3">
             <span>GITC . Our Services . dispute Settlement</span>
         </div>


         <div className="hero min-h-screen bg-accent-content">
             <div className="hero-content flex-col md:flex-row-reverse">
                 <div className="  max-h-4xl mt-20">

                     <HeadingSecondary>
                         Dispute Settlement
                     </HeadingSecondary>


                     <img className="w-screen" src="/images/dispute.jpg" alt="Album"/>

                 </div>
                 <div className="card h-46  text-dark  w-full shadow-2sm bg-white  ">
                     <div className="card-body">
                         <HeadingSecondary>
                         Our Services
                         </HeadingSecondary>
                         <Paragraph>

                             <Link href="/service">  Anti - Dumping Duties</Link>
                         </Paragraph>
                         <Paragraph>


                             <Link href="/service/dumping">  Anti - Dumping Duties</Link>
                         </Paragraph>
                         <Paragraph>

                             <Link href="/service/subsidy">    Subsidy and Countervailing Duties</Link>


                         </Paragraph>
                         <Paragraph>

                             <Link href="/service/safeguard">  Safeguards Measures</Link>


                         </Paragraph>
                         <Paragraph>


                             <Link href="/service/dispute">Dispute Settlement</Link>


                         </Paragraph>
                         <Paragraph>
                             <Link href="/service">  Tariff Review</Link>


                         </Paragraph>
                         <Paragraph>

                             <Link href="/service/research">  Research</Link>

                         </Paragraph>
                     </div>
                 </div>
             </div>
         </div>
         <div className="hero min-h-screen bg-accent-content">
             <div className="hero-content flex-col lg:flex-row-reverse">
                 <div className="text-center lg:text-left">

                     <p  className="py-6 tracking-normal text-xl">
                         Customs valuation is a customs procedure applied
                         to determine or assess the customs value of
                         imported goods. If the rate of duty is ad valorem,
                         the customs value is important to determine the
                         duty to be paid on an imported good.
                         The purpose of this regulation is to establish
                         procedures that will solve disputes arising as a
                         result of classification, valuation, or origin
                         determination by the customs division of the
                         Ghana Revenue Authority
                     </p>

                     <p className="py-6 tracking-normal text-xl">
                         An importer of goods which are the subject matter
                         of a dispute as a result of classification, valuation, or
                         origin determination by the customs division of the
                         Ghana Revenue Authority may file a petition or
                         lodge a written complaint with the Commission in
                         a specific format including all the necessary
                         information and documents required by the
                         Commission. The Commission may conduct its
                         investigation in relation to a dispute for which a
                         complaint has been lodged and may make
                         available information or results of investigation to
                         the parties involved.
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
>>>>>>> shadrack-dev
        </WebsiteLayout>
     );
}

export default ServiceDispute;