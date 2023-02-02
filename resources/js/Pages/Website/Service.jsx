import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { SlCallIn, SlEnvelopeOpen, SlLocationPin } from "react-icons/sl";

import { WebsiteLayout } from "../../components/layouts";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";
import Paragraph from "../../components/layouts/website/Paragraph";

const Service = () => {
    return (
        <WebsiteLayout page="service">
            <div className="text-black bg-white">
                <div className="p-3 bg-gray-300">
                    <span>GITC . Our Services </span>
                </div>

                <div className="min-h-screen hero bg-accent-content">
                    <div className="flex-col hero-content xl:flex-row-reverse">
                        <div className="w-11/12 ">
                            <HeadingSecondary>Tariff Review</HeadingSecondary>

                            <img
                                className="w-screen"
                                src="/images/service.jpg"
                                alt="Album"
                            />
                        </div>
                        <div className="flex-shrink-0 w-full max-w-sm bg-white card text-dark ">
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
                                The Ghana International Trade Commission (GITC)
                                play sacritical role in addressing the tariff
                                competitiveness of Ghana. Sections 34 and 35 of
                                the GITC Act 926 (2016) state that a domestic
                                producer or are presentative of the domestic
                                industry or a labour association may submit a
                                petition in writing to the Commission for are
                                view of customs duty that affects the production
                                and competitiveness of goods in relation to the
                                domestic producer or domestic industry and the
                                grant of a customs duty rebate or draw backs as
                                to enhanceits competitiveness. .
                            </p>

                            <p className="py-6 text-xl tracking-normal">
                                The product to be subjected to tariff review
                                shall be imported and either like or directly
                                competitive or substitutable to the products
                                produced by the applicant or that are used by
                                the applicant as inputs for the production of
                                other products. The commission shall require the
                                petitioner or an interested party to provide
                                information that relates to the substance of the
                                petition and provide a report which set
                                soutthebas is for the decision of the Commission
                                to reject or acceptapetition .
                            </p>
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

export default Service;
