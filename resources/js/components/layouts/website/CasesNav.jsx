import { Link } from "@inertiajs/inertia-react";

function CasesNav() {
    return (
        <div className="sm:pr-7">
            <h2 className="sm:text-3xl  ">Legislative Instruments</h2>
            <div className="sm:pl-3 pb-20">
                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href="/anti-dumpingcases "> (Anti - Dumping) Regulations, 2019 (L.I 2380) </Link></p>
                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href="/customscases">(Customs Valuation) (Dispute Settlement) Regulations, 2019 (L.I 2382)</Link></p>
                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href="/subsidycases"> (Subsidy and Countervailing Measures) Regulations, 2020 (L.I 2425)</Link></p>
                <p className="py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href="/safeguardscases">(Safeguards Measures) Regulations, 2020 (L.I 2426) </Link></p>
            </div>
            <div className="px-2 text-center w-[50%] border rounded bg-green-100/20 ">
                <h2 className=" border-b font-">Filter By Year</h2>
                <div className="">
                    <p className="pb-1 border-b text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href="">2019 </Link></p>
                    <p className="py-1 border-b text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href="">2020</Link></p>
                    <p className="py-1 border-b text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href="">2021</Link></p>
                    <p className="py-1 border-b text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href=""> 2022</Link></p>
                    <p className="py-1 border-b text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href=""> 2023</Link></p>
                </div>
            </div>
        </div>
    );
}

export default CasesNav;