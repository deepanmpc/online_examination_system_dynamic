import React from "react";
import Video from "../assets/chetan_interview.mp4";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

const images = [
  {img1},
  {img2},
  {img3},
  {img4},
  {img5},
  {img6},
];

function GallerySection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Just a Demo</h2>
          <p className="text-gray-700 mb-6">
            This is an Online Examination System description
          </p>

          
        </div>

        <div className="w-full">
          <video
            src={Video}
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
