
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Promise from "../components/Promise";
import TopProducts from "../components/TopProducts";
import Footer from "../components/Footer";
import ChooseUs from "../components/ChooseUs";
import React from "react";


const HomePage: React.FC = () => {




    return (
  <div className="flex min-h-screen flex-col bg-gray-50">
    <Navbar />
    
    <main className=" ">
      <HeroSection />
      {/* <section className="mt-12">
        <AboutPage />
      </section> */}
      <section className="">
        <TopProducts />
      </section>

       <section className="">
        <ChooseUs />
      </section>

      <section className="">
        <Promise />
      </section>

      {/* <section className="">
        <ContentPage/>
      </section> */}
      {/*
      <section className="w-full max-w-2xl mt-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome to Our Website</h2>
        <p className="text-lg text-center text-gray-700">Explore our features and offerings.</p>
      </section>
      */}
    </main>
    <Footer />
  </div>
    )
};

export default HomePage;
