import { WebsiteLayout } from "../../components/layouts";

import ServicesNav from "../../components/layouts/website/ServicesNav";

function ServiceResarch() {
    return (
        <WebsiteLayout page="service">
            <div className="bg-white">
                <div className="sm:flex px-4 pt-16 pb-16">
                    <ServicesNav />
                    <div className="sm:w-[70%]">
                        <div className="text-black px-5">
                            <h2 className="text-primary text-[4rem] pb-0 ">
                                {" "}
                                Research
                            </h2>
                            <div className="my-10 shadow-xl ">
                                <img
                                    src="/../images/research.png"
                                    className="overflow-hidden w-full sm:h-[28rem] shadow-xl"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <p className="pb-8">
                                    The Ghana International Trade Commission’s (GITC) objective is
                                    to ensure fair competition for persons engaged in domestic
                                    production and protect the domestic market from the impact of
                                    unfair trade practices; the GITC Act 926 (2016) mandated the
                                    Commission to study, identify, and recommend to the Minister
                                    tariff levels for specific sectors of the economy with due regard
                                    to the effective rate of protection.
                                </p>
                                <p className="pb-8 ">
                                    The Commission is also mandated to conduct studies and publish
                                    reports on Ghana’s tariff structure's competitiveness and impact.
                                    The Minister may give directives to the Commission on matters of
                                    policy other than matters under adjudication, and the directives
                                    shall be consistent with the object of this Act.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}

export default ServiceResarch;
