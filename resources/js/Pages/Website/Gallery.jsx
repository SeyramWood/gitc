import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import { WebsiteLayout } from "../../components/layouts";
import { formatDateTimeShort } from "../../helpers";

import { Link } from "@inertiajs/inertia-react";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";

function Gallery({ albums }) {
    const [currentGallery, setCurrentGallery] = useState();
    const [selectedIndex, setSelectedIndex] = useState(-1);

    function openGallery(gallery, index) {
        setCurrentGallery(
            gallery.map((gallery) => ({
                src: `/uploads/gallery/${gallery.image}`,
            }))
        );
        setSelectedIndex(index);
    }

    return (
        <WebsiteLayout page="gallery">
            <Lightbox
                open={selectedIndex >= 0}
                fullscreen={{ auto: false }}
                plugins={[Fullscreen, Counter]}
                index={selectedIndex}
                close={() => {
                    setSelectedIndex(-1);
                    setCurrentGallery();
                }}
                slides={currentGallery}
            />

            <div className="pb-10 bg-white">
                {/* gallery */}
                <div className="">

                    <div className="justify-center pt-16 sm:flex">
                        <div className="grid-cols-3 sm:grid">
                            {albums.data.map((item, index) => (
                                <div
                                    key={`album__${index}`.toString()}
                                    className="relative sm:w-[20rem] mx-3 mb-10"
                                >
                                    <div className="overflow-hidden bg-black cursor-pointer ">
                                        <div className="w-full bg-white/90">
                                            <div className="h-[15rem] ">
                                                <div
                                                    className={`overflow-hidden p-3 justify-between ${
                                                        item.gallery.length == 1
                                                            ? "h-[100%]"
                                                            : "h-[50%]"
                                                    }`}
                                                >
                                                    <div className="overflow-hidden ">
                                                        <img
                                                            src={`/uploads/gallery/${item.gallery[0].image}`}
                                                            className="object-cover transition duration-700 ease-in-out hover:opacity-75 bg-black/40 hover:scale-110"
                                                            alt=""
                                                            onClick={() =>
                                                                openGallery(
                                                                    item.gallery,
                                                                    0
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex p-3 justify-between gap-4  h-[50%]">
                                                    {item.gallery[1] && (
                                                        <div className="overflow-hidden ">
                                                            <img
                                                                src={`/uploads/gallery/${item.gallery[1].image}`}
                                                                className="object-cover transition duration-700 ease-in-out hover:opacity-75 bg-black/40 hover:scale-110"
                                                                alt=""
                                                                onClick={() =>
                                                                    openGallery(
                                                                        item.gallery,
                                                                        1
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                    {item.gallery[2] && (
                                                        <div className="overflow-hidden">
                                                            <img
                                                                src={`/uploads/gallery/${item.gallery[2].image}`}
                                                                className="object-cover transition duration-700 ease-in-out hover:opacity-75 bg-black/40 hover:scale-110"
                                                                alt=""
                                                                onClick={() =>
                                                                    openGallery(
                                                                        item.gallery,
                                                                        2
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center bg-slate-100 p-5  sm:h-[35%]">
                                        <p className="uppercase text-primary ">
                                            {item.name}
                                        </p>
                                        <p>{formatDateTimeShort(item.date)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2 pt-[2rem] justify-center">
                        <>
                            {albums?.links.map((link, index) =>
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
        </WebsiteLayout>
    );
}

export default Gallery;
