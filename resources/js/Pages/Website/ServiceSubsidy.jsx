import { WebsiteLayout } from "../../components/layouts";

<<<<<<< HEAD
import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import ServicesNav from "../../components/layouts/website/ServicesNav";
import ServiceLinks from "../../components/layouts/website/ServiceLinks";

function ServiceSubsidy() {
    return ( 
        <WebsiteLayout page="service">
          {/* <ServiceLinks /> */}
            <div className="bg-white">
                <div className="sm:flex px-4 pt-16">
                    <ServicesNav  />
                    <div className="sm:w-[70%]">
                        <div className="text-black px-6">
                            <h2 className="text-primary sm:text-[4rem] pb-0 ">Trade Remedy</h2>
                            <p className="text-xl"> Subsidy & Countervailing Duties;
                                Anti-Dumping Duties and Safeguard Measures
                            </p>

                            <h2 className="text-red-500 text-4xl font-bold mt-20"> Subsidy & Countervailing Duties</h2>
                            <div className="my-10 ">
                                {/* <img src=" images/subsidy.png" alt="img" /> */}
                                <img src="/../images/subsidy.png" className="overflow-hidden w-full h-[28rem]" alt="" />
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
const ServiceSubsidy = () => {

    return (
        <WebsiteLayout page="home">
     <div className="bg-white ">
         <div className="bg-gray-300  p-3">
             <span>GITC . Our Services . Trade Remedies . Subsidy & Countervailing Duties</span>
         </div>
         <div className="hero min-h-screen bg-accent-content">
             <div className="hero-content flex-col md:flex-row-reverse">
                 <div className="  max-h-4xl mt-40">
                     <HeadingSecondary>
                         Trade Remedy
                     </HeadingSecondary>

                    <Paragraph>
                         Subsidy & controvailing duties; antidumping duties, safeguard and measures
                    </Paragraph>

                     <HeadingSecondary>
                         Subsidy & Countervailing Duties
                     </HeadingSecondary>


                     <img className="w-screen" src="/images/subsidy.png" alt="Album"/>

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
                     <p className="py-6 tracking-normal text-xl">
                         Countervailing duty is imposed where subsidy is
                         specific and causes material injury to a domestic
                         industry producing a like product or directly
                         competitive product.
                         .</p>
                     <p className="py-6 tracking-normal text-xl">
                         A subsidy is considered to exist if the Government
                         or a public body within the territory of an exporting
                         country provides a financial contribution to the
                         manufacturer, producer, exporter, or transporter of
                         any product which has been imported into the
                         domestic market and confers a benefit on the
                         recipient.
                         .</p>

                     <p  className="py-6 tracking-normal text-xl">
                         A financial contribution is considered to have been
                         granted where a Government practice involves the
                         direct transfer of funds including grants, loans and
                         equity infusionto a specific industry.
                     </p>

                     <p className="py-6 tracking-normal text-xl">


                         The Commission will trigger an investigation when
                         it has sufficient evidence of the existence of the
                         Government or public body's involvement in the
                         provision of financial contribution to a
                         manufacturer, producer, exporter, or transporter of
                         any product, that imposes injury or a threat of
                         material injury to the domestic industry
                         .</p>
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

export default ServiceSubsidy;