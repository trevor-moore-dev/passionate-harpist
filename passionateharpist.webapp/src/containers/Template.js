import React from "react";
import Routes from "./Routes"
import { Header } from './Header';
import { Footer } from './Footer';

export default function Template() {
	return (
        <div>
            <Header />
            <Routes />
            <Footer />
        </div>
	);
}