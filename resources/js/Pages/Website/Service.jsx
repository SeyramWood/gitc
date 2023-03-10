import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";
import { WebsiteLayout } from "../../components/layouts";
import ServicesNav from "../../components/layouts/website/ServicesNav";

function Service() {
    return (
        <WebsiteLayout page="service">
            {/* <ServiceLinks /> */}
            <div className="bg-white">
                <div className="px-4 pt-16 sm:flex">
                    <ServicesNav />
                    <div className="sm:w-[70%]">
                        <div className="text-black ">
                            <h2 className="text-primary text-[4rem] pb-0 ">
                                Trade Remedies
                            </h2>
                            <p className="text-xl">
                                {" "}
                                Subsidy & Countervailing Duties; Anti-Dumping
                                Duties and Safeguard Measures
                            </p>

                            <h2 className="mt-20 text-4xl font-bold text-red-500">
                                Subsidy & Countervailing Duties
                            </h2>
                            <div className="my-10 sm:pr-6 ">
                                <img
                                    src="images/subsidy.png"
                                    className="overflow-hidden w-full h-[28rem]"
                                    alt=""
                                />
                            </div>
                            <div className="pr-5">
                                <p className="pb-8 text-black">
                                    Countervailing duty is imposed where subsidy
                                    is specific and causes material injury to a
                                    domestic industry producing a like product
                                    or directly competitive product.
                                </p>
                                <p className="pb-8 text-black">
                                    A subsidy is considered to exist if the
                                    Government or a public body within the
                                    territory of an exporting country provides a
                                    financial contribution to the manufacturer,
                                    producer, exporter, or transporter of any
                                    product which has been imported into the
                                    domestic market and confers a benefit on the
                                    recipient.
                                </p>
                                <p className="pb-8 text-black">
                                    A financial contribution is considered to
                                    have been granted where a Government
                                    practice involves the direct transfer of
                                    funds including grants, loans and equity
                                    infusionto a specific industry.
                                </p>
                                <p className="pb-8 text-black">
                                    The Commission will trigger an investigation
                                    when it has sufficient evidence of the
                                    existence of the Government or public body's
                                    involvement in the provision of financial
                                    contribution to a manufacturer, producer,
                                    exporter, or transporter of any product,
                                    that imposes injury or a threat of material
                                    injury to the domestic industry.
                                </p>
                            </div>
                            <div className="sm:pr-4">
                                <h2 className="text-4xl text-primary">
                                    Related Downloads
                                </h2>
                                <i>
                                    Downloadable Legislative Instrument and
                                    Questionnaire
                                </i>
                                <div className="flex p-5 my-2 transition duration-500 ease-in-out rounded shadow-lg cursor-pointer hover:scale-110 ">
                                    <AiOutlineFilePdf className="w-[4rem] h-[4rem] text-red-700 " />{" "}
                                    <span className="pt-6">
                                        {" "}
                                        GITC ( Anti-Dumping ) Regulations, 2019
                                        ( L.I 2380 ){" "}
                                    </span>
                                </div>
                                <div className="flex p-5 my-2 mb-5 transition duration-500 ease-in-out rounded shadow-lg cursor-pointer hover:scale-110 ">
                                    <AiOutlineFileWord className="w-[4rem] h-[4rem] text-blue-700" />{" "}
                                    <span className="pt-6">
                                        {" "}
                                        GITC Questionnaire ( Editable )
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

export default Service;
