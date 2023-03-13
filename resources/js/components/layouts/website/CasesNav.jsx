import { Link } from "@inertiajs/inertia-react";

function CasesNav() {
    return ( 
        <div className="">
            <h2 className="sm:text-3xl  ">Cases</h2>
            <div className="sm:pl-3">
                <p className="py-1 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/customscases">GITC  (Dispute Settlement Regulations) (4) </Link></p>
                <p className="py-1 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/measurescases">GIT (SafeGaurd measures) Regulations (1)</Link></p>
                <p className="py-1 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/subsidycases">GITC (anti Dumping) Regulations (2) </Link></p>
                <p className="py-1 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out"><Link href="/disputescases"> GITC (Subsidy and Countervailing Duties) Regulations (4)</Link></p>
            </div>

        </div>
     );
}

export default CasesNav;