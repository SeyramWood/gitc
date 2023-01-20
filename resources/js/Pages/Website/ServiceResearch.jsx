import React, { useState } from "react";

const ServiceResearch = () => {

    return (
     <div className="bg-white text-black">
         <div className="bg-gray-300  p-3">
             <span>GITC . Our Services . Research</span>
         </div>


         <div className="hero min-h-screen bg-accent-content">
             <div className="hero-content flex-col md:flex-row-reverse">
                 <div className="  max-h-4xl ">

                            <h3 className="text-blue-700 mb-2 font-semibold text-3xl">
                                Research
                            </h3>

                         <img className="w-screen" src="https://placeimg.com/400/400/arch" alt="Album"/>

                 </div>
                 <div className="card h-46  text-dark  w-full shadow-2sm bg-white  ">
                     <div className="card-body">
                         <h3 className="text-black text-lg font-bold">Our Services</h3>

                         <p className="text-blue-700 text-xl">
                             Trade Remedies

                         </p>
                         <p className="text-blue-700 text-xl">

                             Anti - Dumping Duties

                         </p>
                         <p className="text-blue-700 text-xl">


                             Subsidy and Countervailing Duties

                         </p>

                         <p className="text-blue-700 text-xl">


                             Safeguards Measures

                         </p>
                         <p className="text-blue-700 text-xl">


                             Dispute Settlement

                         </p>
                         <p className="text-blue-700 text-xl">

                             Tariff Review

                         </p>
                         <p className="text-blue-700 text-xl">

                             Research
                         </p>
                     </div>
                 </div>
             </div>
         </div>
         <div className="hero min-h-screen bg-accent-content">
             <div className="hero-content flex-col lg:flex-row-reverse">
                 <div className="text-center lg:text-left">
                     <p className="py-6 tracking-normal text-xl">
                         The Ghana International Trade Commission’s (GITC)
                         objective is to ensure fair competition for persons
                         engaged in domestic production and protect the
                         domestic market from the impact of unfair trade
                         practices. To enable the Commission to properly
                         play its role, the GITC Act 926 (2016) mandates the
                         Commission to study, identify, and recommend to
                         the Minister of Trade and Industry tariff levels for
                         specific sectors of the economy with due regard to
                         the effective rate of protection
                         </p>
                     <p className="py-6 tracking-normal text-xl">
                         The Commission is also mandated to conduct
                         studies and publish reports on the competitiveness
                         of Ghana’s tariff structure and its impact on local
                         industry. The Minister may give directives to the
                         Commission on matters of policy other than
                         matters under adjudication and the directives shall
                         be consistent with the object of this Act.
                         </p>


                 </div>
                 <div className="card  text-dark flex-shrink-0 w-full max-w-sm shadow-2xl bg-white border-solid border-2 border-sky-500 ">
                     <div className="card-body">
                         <h3>Contact with us</h3>

                         <p className="text-blue-700 text-xl">
                             +233 030 296 0298
                         </p>
                         <p className="text-blue-700 text-xl">
                             info@gitc.gov.gh
                         </p>
                     </div>
                 </div>
             </div>
         </div>
     </div>

    );
};

export default ServiceResearch;
