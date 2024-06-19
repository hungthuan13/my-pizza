// components/ServicesSection.tsx

import React from "react";
import MenuSection from "../../components/MenuSection";
import NavBar from "../../components/NavBar";
import SlideShow from "../../components/SlideShow";
import Footer from "../../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <section id="services" className="bg-gray-200">
      <NavBar />
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="mb-10 rounded-sm">
        <SlideShow />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Delivery</h3>
            <p className="text-gray-700 mb-4">
              Enjoy our delicious pizzas from the comfort of your home with our
              fast and reliable delivery service.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Catering</h3>
            <p className="text-gray-700 mb-4">
              Make your events unforgettable with our catering services. We
              provide a variety of pizzas tailored to your needs.
            </p>
          </div>
        </div>
      </div>
      <MenuSection />
      <Footer />
    </section>
  );
};

export default LandingPage;
