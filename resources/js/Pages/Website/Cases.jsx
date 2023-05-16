// Import styles
import { Link } from "@inertiajs/inertia-react";
// pdf reader
// Import the main component
import React, { useState } from "react";

import { WebsiteLayout } from "../../components/layouts";
import { formatDateShort } from "../../helpers";

// files
// modal

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
// data
import "react-responsive-modal/styles.css";

const pageLayout = {
    transformSize: ({ size }) => ({
        height: size.height + 20,
        width: size.width + 20,
    }),
};

function Cases({ categories, yearFilters, cases }) {
    const [currentURL, setCurrentURL] = useState();

    React.useEffect(() => {
        const path = document.location.pathname.split("/");
        if (!isNaN(parseInt(path[path.length - 1]))) {
            const path = document.location.pathname.split("/");
            path.pop();
            setCurrentURL(path.join("/"));
        } else {
            setCurrentURL(path.join("/"));
        }
    }, []);

    return (
        <WebsiteLayout page="resource">
            <div className="w-[100%]   bg-white">
                <div className="px-10 py-16 sm:flex">
                    <div className="sm:w-[40%] sm:block hidden">
                        <div className="sm:pr-7">
                            <h2 className="sm:text-3xl ">
                                Legislative Instruments
                            </h2>
                            <div className="pb-20 sm:pl-3">
                                {categories?.map((cat) => (
                                    <p
                                        key={cat.name}
                                        className={`${
                                            cat.slug ===
                                                currentURL?.split("/")[2] &&
                                            "font-bold"
                                        } py-3 text-red-500  duration-700 ease-in-out cursor-pointer hover:text-red-500/90 hover:scale-105 transition`}
                                    >
                                        <Link
                                            href={`/cases/${cat.slug}`}
                                            preserveScroll
                                        >
                                            {`${cat.name} - (${cat.cases_count})`}
                                        </Link>
                                    </p>
                                ))}
                            </div>
                            {yearFilters.length > 0 && (
                                <div className="px-2 text-center w-[50%] border rounded bg-green-100/20 ">
                                    <h2 className="border-b font-">
                                        Filter By Year
                                    </h2>
                                    <div className="">
                                        {yearFilters.map((yearFilter) => (
                                            <p
                                                key={yearFilter.year}
                                                className="pb-1 text-red-500 duration-700 ease-in-out border-b cursor-pointer hover:text-red-500/90 hover:scale-105 teansition"
                                            >
                                                <Link
                                                    preserveScroll
                                                    href={`${currentURL}/${yearFilter.year}`}
                                                >
                                                    {`${yearFilter.year} - (${yearFilter.count})`}
                                                </Link>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className=" sm:w-[60%]">
                        <p className="pb-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id, suscipit reiciendis porro laborum
                            inventore beatae pariatur ex omnis? Voluptatem
                            consequatur reprehenderit harum enim blanditiis!
                            Eligendi in laborum tempora eius doloremque?
                        </p>

                        <div className="border">
                            <table className="table-fixed w-[100%] ">
                                <thead className="text-left bg-red-100/30">
                                    <tr className="border-b">
                                        <th className="p-3 text-sm">
                                            Investigation Title
                                        </th>
                                        <th className="p-3 text-sm">Inv #</th>
                                        <th className="p-3 text-sm">Action</th>
                                        <th className="p-3 text-sm w-[5rem]">
                                            Date Issued
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cases.data.length > 0 ? (
                                        cases.data.map((item, index) => (
                                            <tr
                                                className="border-b"
                                                key={index}
                                            >
                                                <td className="p-3">
                                                    <a
                                                        href={`/uploads/cases/${item.pdf}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-3 text-primary/60 hover:underline"
                                                    >
                                                        {item.title}
                                                    </a>
                                                </td>
                                                <td className="p-3">
                                                    {item.investigation_number}
                                                </td>
                                                <td className="p-3">
                                                    {item.description}
                                                </td>
                                                <td className="p-3">
                                                    {formatDateShort(
                                                        item.issued_date
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className="p-3">
                                                No case found!
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex gap-2 pt-[2rem] justify-center">
                            <>
                                {cases?.links.map((link, index) =>
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
}

export default Cases;
