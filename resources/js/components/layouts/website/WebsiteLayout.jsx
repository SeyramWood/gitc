import "animate.css";
import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import {usePage} from "@inertiajs/inertia-react";

const WebsiteLayout = ({ children, page }) => {
    const {flash} = usePage().props
    return (
        <main className="w-full">
            <Header />
            {
                flash.message &&(
                    <div className="alert bg-green-300">
                        {flash.message}

                    </div>

                )
            }
            <Navigation />
            <Banner page={page} />
            <main>{children}</main>

            <Footer />
        </main>
    );
};

export default WebsiteLayout;
