import React from "react";

const subjects = [
  {
    title: "Math",
    description: "Sky was cloudless and of a deep dark blue spectacle before us was indeed",
    img: "/math.png",
    bgColor: "bg-orange-100",
  },
  {
    title: "English",
    description: "Even the all-powerful Pointing has no control about the blind texts.",
    img: "/english.png",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Science",
    description: "Unorthographic life One day however a small line of blind text.",
    img: "/science.png",
    bgColor: "bg-white shadow-lg",
  },
  {
    title: "Physics",
    description: "However a small line of blind text by the name.",
    img: "/physics.png",
    bgColor: "bg-orange-100",
  },
  {
    title: "General Knowledge",
    description: "Text by the name of Lorem Ipsum decided to leave for the far World.",
    img: "/gk.png",
    bgColor: "bg-white shadow-lg",
  },
];

function ExamCategories() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Explore Our Exam</h2>
          <button className="border border-gray-900 px-6 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition">
            EXPLORE ALL
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${subject.bgColor} transition-transform transform hover:scale-105`}
            >
              <div className="flex items-center space-x-4">
                <img src={subject.img} alt={subject.title} className="w-10 h-10" />
                <h3 className="text-lg font-bold">{subject.title}</h3>
              </div>
              <p className="mt-2 text-gray-700">{subject.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExamCategories;
