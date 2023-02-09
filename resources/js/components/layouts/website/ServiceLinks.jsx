import { Link } from "@inertiajs/inertia-react";

function ServiceLinks() {
    return (  
        <div className="sm:p-8 bg-faded">
            <div className="sm:pl-12  sm:text-[1.1rem]">
                <span className="sm:px-5 text-md text-primary  hover:underline"><Link href="/">GITC </Link>  </span>
                <span className="sm:px-5 text-md text-primary hover:underline "> <Link href="/services">Our Services   </Link></span>
                <span className="sm:px-5 text-md text-primary hover:underline"> <Link href="/service/subsidy">Trade Remedies  </Link> </span>
                <span className="sm:px-5 text-md text-primary hover:underline"> <Link href="/service/dumpin">AntiDumping Duties </Link>  </span>
            </div>
        </div> 
    );
}

export default ServiceLinks;