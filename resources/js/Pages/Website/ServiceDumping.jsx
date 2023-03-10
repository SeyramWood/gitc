import { WebsiteLayout } from "../../components/layouts";

<<<<<<< HEAD
import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import ServicesNav from "../../components/layouts/website/ServicesNav";
import ServiceLinks from "../../components/layouts/website/ServiceLinks";
=======
    return (
        <WebsiteLayout page="home">
     <div className="bg-white ">
         <div className="bg-gray-300  p-3">
             <span>GITC . Our Services . Trade Remedies . Antidumping Duties</span>
         </div>


         <div className="hero min-h-screen bg-accent-content">
             <div className="hero-content flex-col md:flex-row-reverse">
                 <div className="  max-h-4xl mt-40">
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
>>>>>>> shadrack-dev

function ServiceDumping() {
    return (
        <WebsiteLayout page="service">
           {/* <ServiceLinks /> */}
            <div className="bg-white">
                <div className="sm:flex px-4 pt-16">
                    <ServicesNav />
                    <div className="sm:w-[70%]">
                        <div className="text-black sm:pl-2">
                            <h2 className="text-primary text-[4rem] pb-0 ">Trad Remedies</h2>
                            <p className="text-xl"> Subsidy & Countervailing Duties;
                                Anti-Dumping Duties and Safeguard Measures
                            </p>

                            <h2 className="text-red-500 text-4xl font-bold mt-20">Anti Dumping Duties</h2>
                            <div className=" my-10 ">
                                <img src="/../images/dump.jpg" className="overflow-hidden w-full h-[28rem]" alt="" />
                            </div>
                            <div className="">
                                <p className="pb-8 text-black">
                                    An anti-dumping duty is a protectionist tariff that a
                                    government imposes on foreign imports that it
                                    believes are priced below fair market value.
                                </p>
                                <p className="pb-8 text-black">
                                    The purpose of these regulations is to establish
                                    processes for filing dumping complaints and for
                                    imposing anti-dumping duty after the Commission
                                    has duly conducted an investigation in relation to
                                    dumping. The objective of an anti-dumping
                                    investigation is to determine whether dumping has
                                    caused, is causing, or threatens to cause material
                                    injury to a domestic industry or material retardation
                                    in the establishment of domestic industry, in order
                                    to take necessary anti-dumping actions.
                                </p>
                                <p className="pb-8 text-black">
                                    These regulations apply to products imported into
                                    Ghana for commercial reasons and meant for
                                    consumption on the local market, in accordance
                                    with the World Trade Organization Anti-Dumping
                                    Agreement.
                                </p>
                                <p className="pb-8 text-black">
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

export default ServiceDumping;