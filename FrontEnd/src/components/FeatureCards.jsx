import React from "react";
import { Link } from "react-router-dom";

// Import images
import practiceImg from "./practice-questions.png";
import onlineExamImg from "./online-exam.webp";
import examSchedulesImg from "./exam-schedules.webp";
import samplePaperImg from './samplePaperImg.webp';
const features = [
  {
    title: "Practice Questions",
    bgColor: "bg-blue-100",
    route: "/practice-questions",
    image: practiceImg,
  },
  {
    title: "Online Exam",
    bgColor: "bg-gray-900 text-white",
    route: "/online-exam",
    image: onlineExamImg,
  },
  {
    title: "Exam Schedules",
    bgColor: "bg-orange-100",
    route: "/exam-schedules",
    image: examSchedulesImg,
  },
  {
    title: "Sample Papers",
    bgColor: "bg-purple-100",
    route: "/sample-papers",
    image: samplePaperImg,
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-green-200 py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.route}
            className={`p-6 rounded-lg shadow-lg w-72 text-center transition-transform transform hover:scale-105 ${feature.bgColor}`}
          >
            <div className="flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;