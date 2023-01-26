import { WebsiteLayout } from "../../components/layouts";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";;
import Paragraph from "../../components/layouts/website/Paragraph";

const AboutMessage = () => {
    return (
        <WebsiteLayout page="about" className="bg-white">
            <div className="bg-white">
                <div className="my-20 bg-slate-100 px-10">
                    <HeadingPrimary className="text-black text-left py-8">
                        Top Message
                    </HeadingPrimary>
                    <div className="">
                        <div className="float-right sm:w-[30%] sm:h-[70%] sm:mx-4 sm:mb-4">
                            <img
                                src="images/homePage/serviceFour.jpg"
                                className="object-fit "
                                alt="img"
                            />
                            <Paragraph className="text-primary font-bold text-[1.6rem] mt-4">
                                Frank Agyekum
                            </Paragraph>
                            <Paragraph>
                                Executive Secretary
                            </Paragraph>
                        </div>
                        <Paragraph className="mb-8">
                            The bane of development in developing countries as against
                            developed countries

                            is the lack of industrialization in the
                            former.

                            The inability of developing countries to industrialize
                            to an appreciable level, however, is not so much for the
                            want of trying, as to the prevalence, among others, of unfair
                            trade practices by competing companies from developed
                            countries.
                        </Paragraph>
                        <Paragraph className="mb-8">
                            Even as many countries in the developing world ascribe to
                            the tenets of free trade and therefore are willing to engage
                            on equal terms, they are constantly undermined by trade
                            practices by manufacturers from the developed world
                            dealing in like products which go against WTO standards.
                        </Paragraph>
                        <Paragraph className="mb-8">
                            Such unfair trade practices, include dumping – where the
                            export price of the product is lower than the domestic price
                            in the ordinary course of trade for the like products;
                            subsidies – where a government provides a financial
                            contribution that confers a benefit on a particular
                            companies, sectors, producers in specified parts of its
                            territory or targets goods for exports; import surge -
                            unforeseen increased imports that result in serious harm to
                            a domestic industry
                        </Paragraph>
                        <Paragraph className="mb-8">
                            Free trade, however, does not mean unfair trade and so for each of these unfair trade
                            practices, the World Trade Organization (WTO) has given remedies in the way of
                            anti-dumping duties, subsidies and countervailing measures, and safeguards measures
                            respectively.
                        </Paragraph>
                        <Paragraph className="mb-8">
                            In all its member-states, the WTO encourages the setting up of remedy institutions, such as
                            the Ghana International Trade Commission to help companies deal with the menace of
                            unfair trade practices which are inimical to their growth.
                        </Paragraph>
                        <Paragraph className="mb-8">
                            GITC has come at an opportune time for Ghana as the establishment of AfCFTA, with its
                            headquarters in Accra, would enable the country to effectively fight the anticipated high
                            increase in unfair trade practices as the country is poised to become the hub of trading in
                            Africa.
                        </Paragraph>
                    </div>

                </div>
            </div>
        </WebsiteLayout>

    );
}

export default AboutMessage;