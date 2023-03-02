import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";

function Download() {
    return ( 
        <div className="sm:pr-4">
            <h2 className="text-4xl text-primary">Related Downloads</h2>
            <i>Downloadable Legislative Instrument and Questionnaire</i>
            <div className="my-2 shadow-lg p-5  rounded flex cursor-pointer transition duration-500 ease-in-out hover:scale-110 ">
                <AiOutlineFilePdf className="w-[4rem] h-[4rem] text-red-700 " />{" "}
                <span className="pt-6">  GITC ( Anti-Dumping ) Regulations, 2019 ( L.I 2380 ) </span>
            </div>
            <div className="my-2 shadow-lg p-5 mb-5 rounded flex cursor-pointer transition duration-500 ease-in-out hover:scale-110 ">

                <AiOutlineFileWord className="w-[4rem] h-[4rem] text-blue-700" />{" "}
                <span className="pt-6"> GITC Questionnaire ( Editable )</span>
            </div>
        </div>
     );
}

export default Download;