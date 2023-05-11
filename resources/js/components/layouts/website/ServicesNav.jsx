import { Link } from "@inertiajs/inertia-react";
// import { router } from '@inertiajs/react';


function ServicesNav() {
    const urlPath = window.location.pathname;
    console.log(urlPath);
    return (
        <div className="sm:w-[30%] sm:block hidden pt-4 pb-9 px-9">
            <h2 className="sm:text-3xl font-bold ">Our Services</h2>
          
            <div className="px-5">
               <ul style={{listStyleType:"square"}}>

               </ul>
                {
                    urlPath === '/services' ?
                        <ul style={{listStyleType:"square"}} className="">
                            <li className="py-3 text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></li>
                            <div className="pl-4">
                                <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></li>
                                <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></li>
                                <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></li>
                            </div>
                            <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></li>
                            <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></li>
                            <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></li>

                        </ul> :

                        urlPath === '/service/dumping' ?
                            <ul style={{listStyleType:"square"}} className="">
                                <li className="py-3 text-red-600 font-bold  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></li>
                                <div className="pl-4">
                                    <li className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></li>
                                    <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></li>
                                    <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></li>
                                </div>
                                <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></li>
                                <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></li>
                                <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></li>

                            </ul> :

                            urlPath === '/service/subsidy' ?
                                <ul style={{listStyleType:"square"}} className="">
                                    <li className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></li>
                                    <div className="pl-4">
                                        <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></li>
                                        <li className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></li>
                                        <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></li>
                                    </div>
                                    <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></li>
                                    <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></li>
                                    <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></li>

                                </ul> :

                                urlPath === '/service/safeguard' ?
                                    <ul style={{listStyleType:"square"}} className="">
                                        <p className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></p>
                                        <div className="pl-4">
                                            <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></li>
                                            <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></li>
                                            <li className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></li>
                                        </div>
                                        <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></li>
                                        <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></li>
                                        <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></li>

                                    </ul> :

                                    urlPath === '/service/dispute' ?
                                        <ul style={{listStyleType:"square"}} className="">
                                            <li className="py-3 text-red-500  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></li>
                                            <div className="pl-4">
                                                <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></li>
                                                <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></li>
                                                <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></li>
                                            </div>
                                            <li className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></li>
                                            <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></li>
                                            <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></li>
                                        </ul> :

                                        urlPath === '/service/tariff' ?
                                            <ul style={{listStyleType:"square"}} className="">
                                                <li className="py-3 text-red-500  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></li>
                                                <div className="pl-4">
                                                    <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></li>
                                                    <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></li>
                                                    <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></li>
                                                </div>
                                                <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></li>
                                                <li className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></li>
                                                <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></li>

                                            </ul> :
                                            urlPath === '/service/research' ?
                                                <ul style={{listStyleType:"square"}} className="">
                                                    <li className="py-3 text-red-500  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></li>
                                                    <div className="pl-4">
                                                        <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></li>
                                                        <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></li>
                                                        <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></li>
                                                    </div>
                                                    <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></li>
                                                    <li className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></li>
                                                    <li className="py-3 text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></li>

                                                </ul> : ''

                }


            </div>

        </div>
    );
}

export default ServicesNav;