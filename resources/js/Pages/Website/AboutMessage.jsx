import { WebsiteLayout } from "../../components/layouts";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";;
import Paragraph from "../../components/layouts/website/Paragraph";

const AboutMessage = () => {
    return (
        <WebsiteLayout page="message" className="bg-white">
            <div className="bg-white">
                <div className="sm:py-20 py-10 bg-slate-100 px-10 sm:text-left text-center">
                    <h2 className="sm:text-[3rem]  sm:block text-[2rem] hidden  sm:py-8">
                        Top Message
                    </h2>
                    <div className="">
                        <div className="float-right sm:w-[30%] sm:h-[70%] sm:mx-4 sm:mb-4 sm:pb-0 pb-5">
                            <img
                                src="images/index/agyekum.jpg"
                                className="object-fit "
                                alt="img"
                            />
                            <h3 className="text-primary font-bold text-[1.6rem] mt-4">
                                Frank Agyekum
                            </h3>
                            <p>
                                Executive Secretary
                            </p>
                        </div>
                        <p className="mb-8">
                            The bane of development in developing countries as against developed countries is the lack of
                            industrialization in the former. The inability of developing countries to industrialize to an
                            appreciable level, however, is not so much for the want of trying, as to the prevalence, among
                            others,
                            of unfair trade practices by competing companies from developed countries.
                        </p>
                        <p className="mb-8">
                            Even as many countries in the developing world ascribe to the tenets of free trade and
                            therefore are willing to engage on equal terms, they are constantly undermined by trade
                            practices
                            by manufacturers from the developed world dealing in like products which go against WTO
                            standards.
                        </p>
                        <p className="mb-8">
                            Such unfair trade practices, include dumping – where the export price of
                            the product is lower than the domestic price in the ordinary course of trade
                            for the like products in the exporting country; subsidies – where a government
                            provides a financial contribution that confers a benefit on a particular companies,
                            sectors, producers in specified parts of its territory or targets goods for exports;
                            import surge - unforeseen increased imports that
                            result in serious harm to a domestic industry.
                        </p>
                        <p className="mb-8">
                            Free trade, however, does not mean unfair trade and so for each of these unfair trade
                            practices, the World Trade Organization (WTO) has given
                            remedies through anti-dumping duties, subsidies and countervailing measures,
                            and safeguards measures.
                        </p>
                        <p className="mb-8">
                            In all its member-states, the WTO encourages the setting up of remedy institutions, such as the
                            Ghana
                            International Trade Commission to help companies deal with the menace of unfair trade practices
                            which are inimical to their growth.
                        </p>
                        <p className="mb-8">
                            GITC has come at an opportune time for Ghana as the establishment of AfCFTA, with its
                            headquarters
                            in Accra, would enable the country to effectively fight the anticipated high increase in
                            unfair trade practices as the country is poised to become the hub of trading in Africa.
                        </p>
                    </div>

                </div>
            </div>
        </WebsiteLayout>

    );
}

export default AboutMessage;