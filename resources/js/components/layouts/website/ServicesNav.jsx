import { Link } from "@inertiajs/inertia-react";
// import { router } from '@inertiajs/react';


function ServicesNav() {
    const urlPath = window.location.pathname;
    console.log(urlPath);
    return (
        <div className="sm:w-[30%] sm:block hidden pt-4 pb-9 px-9">
            <h2 className="sm:text-3xl font-bold ">Our Services</h2>
            <div className="px-5">

                {
                    urlPath === '/services' ?
                        <div className="">
                            <p className="py-3 text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></p>
                            <div className="pl-4">
                                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></p>
                                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></p>
                                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></p>
                            </div>
                            <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></p>
                            <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></p>
                            <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></p>

                        </div> :

                        urlPath === '/service/dumping' ?
                            <div className="">
                                <p className="py-3 text-red-600 font-bold  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></p>
                                <div className="pl-4">
                                    <p className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></p>
                                    <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></p>
                                    <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></p>
                                </div>
                                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></p>
                                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></p>
                                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></p>

                            </div> :

                            urlPath === '/service/subsidy' ?
                                <div className="">
                                    <p className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></p>
                                    <div className="pl-4">
                                        <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></p>
                                        <p className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></p>
                                        <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></p>
                                    </div>
                                    <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></p>
                                    <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></p>
                                    <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></p>

                                </div> :

                                urlPath === '/service/safeguard' ?
                                    <div className="">
                                        <p className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></p>
                                        <div className="pl-4">
                                            <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></p>
                                            <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></p>
                                            <p className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></p>
                                        </div>
                                        <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></p>
                                        <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></p>
                                        <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></p>

                                    </div> :

                                    urlPath === '/service/dispute' ?
                                        <div className="">
                                            <p className="py-3 text-red-500  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></p>
                                            <div className="pl-4">
                                                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></p>
                                                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></p>
                                                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></p>
                                            </div>
                                            <p className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></p>
                                            <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></p>
                                            <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></p>
                                        </div> :

                                        urlPath === '/service/tariff' ?
                                            <div className="">
                                                <p className="py-3 text-red-500  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></p>
                                                <div className="pl-4">
                                                    <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></p>
                                                    <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></p>
                                                    <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></p>
                                                </div>
                                                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></p>
                                                <p className="py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></p>
                                                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></p>

                                        </div> : 
                                                      urlPath === '/service/research' ?
                                                      <div className="">
                                                          <p className="py-3 text-red-500  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></p>
                                                          <div className="pl-4">
                                                              <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></p>
                                                              <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></p>
                                                              <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></p>
                                                          </div>
                                                          <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></p>
                                                          <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></p>
                                                          <p className="py-3 text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></p>
          
                                                      </div> : ''

                }


            </div>

        </div>
    );
}

export default ServicesNav;