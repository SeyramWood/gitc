import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";
import { WebsiteLayout } from "../../components/layouts";
import ServicesNav from "../../components/layouts/website/ServicesNav";
function Service() {
    return (
        <WebsiteLayout page="service">
            {/* <ServiceLinks /> */}
            <div className="bg-white">
                <div className="sm:flex px-4 pt-16 pb-16 overflow-hidden">
                    <ServicesNav />
                    <div className="sm:w-[70%]">
                        <div className="text-black px-6 pb-16">
                            <h2 className="text-primary sm:text-[3.5rem] pb-0 ">
                                Subsidy &amp; Countervailing Duties
                            </h2>

                            <div className="sm:pr-6 my-10  ">
                                <img
                                    src="images/subsidy.png"
                                    className="overflow-hidden w-full sm:h-[28rem] shadow-xl"
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
                                        <a href="\pdfFiles\resourcesPdfs\SUBSIDY_AND_COUNTERVAILING_MEASURES_REGULATIONS_2020_PASSED.pdf" target="_blank">
                                            {" "}
                                            SUBSIDY &amp; COUNTERVAILING MEASURES REGULATIONS, 2020
                                            ( L.I 2380 ){" "}</a>
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
