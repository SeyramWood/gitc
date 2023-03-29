import {Dashboard} from "../../components/layouts/dashboard";
import React, { useState } from "react";
import {Link, usePage} from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const ViewAlbum = () => {

    const { id, name,description,images} = usePage().props
    const [values] = useState({id, name,description,images });
    // console.log(values);


return(

    <Dashboard page="View Album Information">

        <div className="card flex justify-content-center ml-2">
                <p className="m-0">

                   <span className="capitalize">Name: {values.name} Description: {values.description}</span>
                </p>

            <p className="m-0">
                   <span className="uppercase"></span>
                </p>

        </div>

        <div>

                <div className="card p-3 flex justify-center ] " style={{width: "20rem",float: "left" }}>

                    <div  className="">
                        <div >
                            <div className="" style={{ borderRadius: "100%"}}>
                                <img
                                    src={window.location.origin + '/uploads/' + values.images }
                                    alt="Objectivity" style={{width: "25rem",  height: "100px"}}

                                />

                            </div>
                        </div>

                    </div>




                </div>

        </div>


    </Dashboard>
)
 }
 export default ViewAlbum;



