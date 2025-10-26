// src/pages/LandingPage.tsx
import React from "react";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { CheckCircle } from "lucide-react";

export const LandingPage: React.FC<{ onNavigate: (page: string) => void }> = ({
  onNavigate,
}) => {
  const features = [
    {
      title: "Easy Management",
      desc: "Create, update, and track tickets with ease",
    },
    {
      title: "Real-time Updates",
      desc: "Instant notifications on ticket status changes",
    },
    {
      title: "Team Collaboration",
      desc: "Work together seamlessly on support tickets",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onNavigate={onNavigate} />

      {/* Hero section with inline SVG circle and bottom wave */}
      <section className="relative bg-gradient-to-br from-blue-300 to-blue-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-36 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Manage Tickets Effortlessly
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-0">
            Streamline your support workflow with powerful ticket management
          </p>

          {/* Inline decorative SVG circle overlapping hero */}
          <div className="flex justify-center mt-12">
            <svg
              className="w-64 h-64 sm:w-80 sm:h-80 opacity-30 -mt-20"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c4fa60ff" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="100" fill="url(#grad1)" />
            </svg>
          </div>
        </div>

        {/* Wavy blue bottom edge */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose TicketFlow?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};
