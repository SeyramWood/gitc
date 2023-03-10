import { Link } from "@inertiajs/inertia-react";

function ServicesNav() {
    return ( 
        <div className="sm:w-[30%] sm:block hidden pt-4 pb-9 px-9">
            <h2 className="sm:text-3xl  ">Our Services</h2>
            <div className="px-5">
                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/services"> Trade Remedies</Link></p>
                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dumping">Anti-Dumping Duties</Link></p>
                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/subsidy">Subsidy and Countervailing Duties </Link></p>
                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out" ><Link href="/service/safeguard">Safeguard Measures </Link></p>
                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/dispute">Dispute Settlement</Link></p>
                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/tariff">Tariff Review</Link></p>
                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/service/research"> Research</Link></p>
            </div>
           
        </div>
     );
}

export default ServicesNav;