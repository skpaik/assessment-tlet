import Container from "../container/Container";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";


export default function Layout({ children }) {
    return <div className="container py-3">
        <main>
            <div className="w-full py-8">
                <Container>
                    <Header/>
                    <div className="flex flex-wrap">
                        {children}
                    </div>
                    <Footer/>
                </Container>
            </div>
        </main>
    </div>;
}

