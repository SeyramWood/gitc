import {Dashboard} from "../../components/layouts/dashboard";
import React, { useState } from "react";
import {Link, usePage} from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const ViewAlbum = (props) => {
    const {data: albumGallaries } = props.albumGallaries;


return(

    <Dashboard page="View Album Information">

        <div>
            {albumGallaries.map((gallary, index) => (
                <div className="card p-3 flex justify-center ] " style={{width: "20rem",float: "left" }}>
                      <tr>
                          <div key={gallary.id} className="">
                              <div >
                                  <div className="" style={{ borderRadius: "100%"}}>
                                      <img
                                          src={window.location.origin + '/uploads/' + gallary.images }
                                          alt="Objectivity" style={{width: "25rem",  height: "100px"}}

                                      />

                                  </div>
                              </div>

                          </div>
                      </tr>


                </div>
            ))}
        </div>

    </Dashboard>
)
 }
 export default ViewAlbum;



