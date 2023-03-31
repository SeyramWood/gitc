import React,  {useState, useEffect}from "react";
import {Dashboard} from "../../components/layouts/dashboard";
const Gallary = (props)=> {
    const {data: gallaries} = props.gallaries;

        return (
            <Dashboard page="Gallaries">
                <div>
                    {gallaries.map((gallary, index) => (
                        <div className="card p-3 flex justify-center ] " style={{width: "20rem",float: "left" }}>

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

                        </div>
                    ))}
                </div>

            </Dashboard>
        );

}
export default Gallary;