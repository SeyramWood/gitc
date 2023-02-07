import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { SlCallIn, SlEnvelopeOpen, SlLocationPin } from "react-icons/sl";
import { WebsiteLayout } from "../../components/layouts";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";
import Paragraph from "../../components/layouts/website/Paragraph";

const ServiceSubsidy = () => {
    return (
        <WebsiteLayout page="service">
            <div className="text-black bg-white">
                <div className="p-3 bg-gray-300">
                    <span>
                        GITC . Our Services . Trade Remedies . Subsidy &
                        Countervailing Duties
                    </span>
                </div>
                <div className="min-h-screen hero bg-accent-content">
                    <div className="flex-col hero-content md:flex-row-reverse">
                        <div className="mt-20  max-h-4xl">
                            <HeadingSecondary>Trade Remedy</HeadingSecondary>

                            <Paragraph>
                                Subsidy & controvailing duties; antidumping
                                duties, safeguard and measures
                            </Paragraph>

                            <HeadingSecondary>
                                Subsidy & Countervailing Duties
                            </HeadingSecondary>

                            <img
                                className="w-screen"
                                src="/images/subsidy.png"
                                alt="Album"
                            />
                        </div>
                        <div className="w-full bg-white card h-46 text-dark shadow-2sm ">
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
                <div className="min-h-screen hero bg-accent-content">
                    <div className="flex-col hero-content lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <p className="py-6 text-xl tracking-normal">
                                Countervailing duty is imposed where subsidy is
                                specific and causes material injury to a
                                domestic industry producing a like product or
                                directly competitive product. .
                            </p>
                            <p className="py-6 text-xl tracking-normal">
                                A subsidy is considered to exist if the
                                Government or a public body within the territory
                                of an exporting country provides a financial
                                contribution to the manufacturer, producer,
                                exporter, or transporter of any product which
                                has been imported into the domestic market and
                                confers a benefit on the recipient. .
                            </p>

                            <p className="py-6 text-xl tracking-normal">
                                A financial contribution is considered to have
                                been granted where a Government practice
                                involves the direct transfer of funds including
                                grants, loans and equity infusionto a specific
                                industry.
                            </p>

                            <p className="py-6 text-xl tracking-normal">
                                The Commission will trigger an investigation
                                when it has sufficient evidence of the existence
                                of the Government or public body's involvement
                                in the provision of financial contribution to a
                                manufacturer, producer, exporter, or transporter
                                of any product, that imposes injury or a threat
                                of material injury to the domestic industry .
                            </p>
                            <h2 className="text-blue-700">Related Download</h2>
                            <p className="text-sm">
                                Downloadable Legislative Instrument and
                                Questionnaire
                            </p>
                            <div>
                                <div className="bg-white shadow-xl card card-side">
                                    <figure className="w-10 bo">
                                        <img
                                            src="/images/pdfred.png"
                                            alt="Movie"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {" "}
                                            GITC (Subsidy and Countervailing
                                            Measures)
                                        </h2>
                                        <p>Regulations, 2020 (L.I 2425).</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white shadow-xl card card-side">
                                    <figure className="w-10 bo">
                                        <img
                                            src="/images/pdfblue.png"
                                            alt="Movie"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <p>RGITC Questionnaire (Editable)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-full max-w-sm bg-white border-2 border-solid shadow-2xl card text-dark border-sky-500 ">
                            <div className="card-body">
                                <HeadingSecondary>Contact Us</HeadingSecondary>

                                <Paragraph>
                                    <span className="flex ">
                                        <span className="text-rose-700">
                                            {" "}
                                            <SlCallIn />{" "}
                                        </span>
                                        <span className="ml-4">
                                            {" "}
                                            +233 030 296 0298
                                        </span>
                                    </span>
                                </Paragraph>
                                <Paragraph>
                                    <span className="flex ">
                                        <span className="text-rose-700">
                                            {" "}
                                            <SlEnvelopeOpen />{" "}
                                        </span>
                                        <span className="ml-4">
                                            info@gitc.gov.gh
                                        </span>
                                    </span>
                                </Paragraph>
                                <Paragraph>
                                    <span className="flex ">
                                        <span className="text-rose-700">
                                            {" "}
                                            <SlLocationPin />{" "}
                                        </span>
                                        <span className="ml-4">
                                            GL-040-2630
                                        </span>
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

export default ServiceSubsidy;
