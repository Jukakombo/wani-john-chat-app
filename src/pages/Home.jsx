import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home">
        <div className="container">
          <Sidebar />
          <Chat />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
