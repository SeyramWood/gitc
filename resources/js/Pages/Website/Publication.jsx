// slider
// gallery
import React from "react";

import { WebsiteLayout } from "../../components/layouts";

import "keen-slider/keen-slider.min.css";
// import "../../../css/style.css";

// pdf
// Import the main component
// import React, { useState } from "react";
// modal

// import { WebsiteLayout } from "../../components/layouts";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// data
import "react-responsive-modal/styles.css";
// Import styles
import { Link } from "@inertiajs/inertia-react";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

const pageLayout = {
    transformSize: ({ size }) => ({
        height: size.height + 20,
        width: size.width + 20,
    }),
};
// end pdf

const month = {
    0: "JAN",
    1: "FEB",
    2: "MAR",
    3: "APR",
    4: "MAY",
    5: "JUN",
    6: "JUL",
    7: "AUG",
    8: "SEP",
    9: "OCT",
    10: "NOV",
    11: "DEC",
};

const Publication = ({ publications }) => {
    return (
        <WebsiteLayout page="publication">
            <div className="overflow-hidden bg-white">
                <div className="pt-10 text-center">
                    <h2 className="sm:pb-16 pb-5 sm:text-[3rem] text-[2rem] text-center text-red-600">
                        Press Releases and Speeches
                    </h2>
                </div>

                {/* publicatation */}
                <div className=" sm:px-[6rem]  ">
                    <div className="relative sm:pb-28">
                        <div className="grid gap-6 sm:grid-cols-3">
                            {publications.data.map((item, index) => (
                                <div className="" key={index}>
                                    <a
                                        href={`/uploads/publications/pdf/${item.pdf}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <div className="relative">
                                            <img
                                                src={`/uploads/publications/images/${item.image}`}
                                                className="object-cover sm:h-[20rem]"
                                                alt={item.title}
                                            />
                                            <div className="absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]">
                                                <div className="block font-bold text-center text-white uppercase">
                                                    <div>
                                                        {
                                                            month[
                                                                new Date(
                                                                    item.published_date
                                                                ).getMonth()
                                                            ]
                                                        }
                                                    </div>
                                                    <div>
                                                        {new Date(
                                                            item.published_date
                                                        ).getDate()}
                                                    </div>
                                                    <div>
                                                        {new Date(
                                                            item.published_date
                                                        ).getFullYear()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-100 p-3 overflow-hidden h-[60%]">
                                            <p className="font-bold uppercase text-primary">
                                                {item.title}
                                            </p>
                                            <p>{item.description}</p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2 pt-[2rem] justify-center">
                            <>
                                {publications?.links.map((link, index) =>
                                    link.url ? (
                                        <Link
                                            preserveScroll
                                            href={`${link.url}`}
                                            className={`${
                                                link.active
                                                    ? "bg-red-400 text-white"
                                                    : "bg-gray-300"
                                            } px-4 py-2 text-gray-500 rounded-md hover:bg-red-400 hover:text-white`}
                                            key={index}
                                            as="button"
                                            type="button"
                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            ></span>
                                        </Link>
                                    ) : (
                                        <Link
                                            preserveScroll
                                            href={`${link.url}`}
                                            className={`${
                                                link.active
                                                    ? "bg-red-400 text-white"
                                                    : "bg-gray-300"
                                            } px-4 py-2 text-gray-500 rounded-md hover:bg-red-400 hover:text-white `}
                                            key={index}
                                            disabled
                                            as="button"
                                            type="button"
                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            ></span>
                                        </Link>
                                    )
                                )}
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
};

export default Publication;
