import { WebsiteLayout } from "../../components/layouts";
import { Link } from "@inertiajs/inertia-react";
import Paragraph from "../../components/layouts/website/Paragraph";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";
const Faq = () => {
    return (
        <WebsiteLayout page="faq">
            <main className="text-lg bg-white">
                <div className="w-10/12 mx-auto mt-8 text-oscuro">

                    <div className="flex flex-col justify-center w-full drop-shadow-md hover:drop-shadow-xl">

                        <div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle1" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle1">
                                    1.	What is the purpose of the Ghana International Trade Commission?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        The Commission was established to regulate Ghana’s international trade to be
                                        in conformity with the rules and regulations of the world trade system and related matters.
                                    </p>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle2" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle2">
                                    2.	What services does the GITC provide?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">

                                        The Commission offers policy advice to Government on matters affecting trade
                                        and industry, and undertakes investigations into matters relating to unfair trade practices. The key services
                                        include Safeguard Measures, Countervailing Measures, Anti-Dumping Duties, Tariff Review, Dispute Settlement.
                                    </p>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle3" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle3">
                                    3.	What does margin of Dumping mean?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        The margin of dumping is the amount by which the normal value of an imported product exceeds the export price.
                                    </p>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle4" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle4">
                                    4.	What is Dumping?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        Dumping is the introduction of a product into the commerce of another country at less than its normal product value in the ordinary course of
                                        trade in the country of origin. This makes the product sell cheaply in the importing country as against locally produced like product.
                                    </p>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle5" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle5">
                                    5.	What is Subsidy?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        Subsidy is the financial contribution by a Government of a country other than Ghana which transfers a benefit to a person/industry
                                        engaged in the production, manufacture, growth, processing, purchase, distribution, transportation, sales, export or import of products.
                                    </p>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle6" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle6">
                                    6.	How are investigations conducted?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        The investigations are conducted by a detailed examination of data presented by both sides in a dispute to enable the Commission reach an unbiased conclusion on a matter. The Commission also affords all parties to a dispute to engage each other at an open hearing
                                        process. Where necessary, the Commission engages international sources and authorities for relevant data to aid investigation into a petition.    </p>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle7" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle7">
                                    7.	Where and when are hearings held? Are they open to the public?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        The Commission shall hold proceedings (hearing) in public at a place and time to be determined by the
                                        Commission. The Commission may, where circumstances so require, hold proceedings (hearing) in private on request
                                        by a party.
                                    </p>
                                    </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle8" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle8">
                                    8.	How does one file a petition?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        A domestic producer or a representative of a domestic producer shall submit a written complaint in a form contained in
                                        the relevant regulations. The Commission may self-initiate an investigation if it has sufficient evidence of unfair practice.
                                    </p>
                                    </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle9" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle9">
                                    9.	What documents need to be attached when filing a petition?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        A domestic industry is required to submit all the necessary documents containing evidence and data to support a petition.
                                    </p>
                                    </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle10" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle10">
                                    10.	How do I obtain information about the status of a filed petition?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        All relevant non-confidential information about proceedings and
                                        investigations undertaken by the Commission are available for public retrieval and reference, upon request.
                                    </p>
                                    </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle11" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle11">
                                  11.  Is preliminary relief available?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        The Commission may impose preliminary measures if it is satisfied that an imported product is causing or threatening to
                                        cause material or serious injury or material retardation to the establishment of a domestic industry that produces a like product.
                                    </p>
                                    </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle12" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle12">
                                    12.	How long do investigations last?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        The Commission conducts proceedings expeditiously as the circumstances and regulations of each measure require.
                                    </p>
                                    </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle13" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle13">
                                    13.	Can the decisions of the Commission be appealed in court?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        Where a person is dissatisfied with a decision of the Commission, that person may apply for a
                                        judicial review of the final decision, recommendation, order or ruling of the Commission in accordance
                                        with the High Court (Civil Procedure) Rules, 2004 (C.I.47).  An application for judicial review of a final decision,
                                        recommendation, order or ruling of the Commission in a
                                        proceeding shall be made within six months of the date of the decision, determination, recommendation, order or ruling.
                                    </p>
                                    </div>
                            </div>
                            <div className="relative mb-4">
                                <input type="checkbox" id="toggle14" className="toggle hidden"/>
                                <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle14">

                                    14.	What are the fees and charges associated with filing a petition?
                                    urt?
                                </label>
                                <div className="content bg-white overflow-hidden">
                                    <p className="p-4">
                                        Fees and Charges for services rendered by the Commission are as determined by Parliamentary Act which applies to the GITC.
                                    </p>
                                    </div>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </WebsiteLayout>
    );
};

export default Faq;
