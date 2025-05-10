import React from "react";

function About() {
  const teamMembers = [
    { name: "ARYAN", email: "aryan564@gmail.com" },
    { name: "DEEPAN", email: "deepan804@gmail.com" },
    { name: "CHETAN REDDY", email: "chetan@gmail.com" },
  ];

  return (
    <section className="py-16 px-6 bg-white min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;