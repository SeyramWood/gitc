import { Link } from "@inertiajs/inertia-react";

function CasesNav() {
    return (
        <div className="">
            <h2 className="sm:text-3xl  ">Cases</h2>
            <div className="sm:pl-3 pb-20">
                <p className="py-1 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href="/customscases">GITC  (Dispute Settlement Regulations) (4) </Link></p>
                <p className="py-1 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href="/measurescases">GIT (SafeGaurd measures) Regulations (1)</Link></p>
                <p className="py-1 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href="/subsidycases">GITC (anti Dumping) Regulations (2) </Link></p>
                <p className="py-1 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-105 teansition duration-700 ease-in-out"><Link href="/disputescases"> GITC (Subsidy and Countervailing Duties) Regulations (4)</Link></p>
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