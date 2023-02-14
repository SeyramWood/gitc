// import "animate.css";
import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

const WebsiteLayout = ({ children, page }) => {
    return (
        <main className="w-full">
            <Header />
            <Navigation />
            <Banner page={page} />
            <main>{children}</main>
            <Footer />
        </main>
    );
};

export default WebsiteLayout;
