import React from "react";

const contactDetails = [
  {
    icon: "/icon1.png", // Replace with actual icon URL
    title: "Head",
    info: "Head@gmail.com",
    linkText: "Click here",
    linkUrl: "mailto:Head@gmail.com",
  },
  {
    icon: "/icon2.png", // Replace with actual icon URL
    title: "Main branch",
    info: "+9178654xxxx",
    linkText: null, // No link for this
  },
];

function ContactSection() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactDetails.map((contact, index) => (
            <div key={index} className="bg-orange-100 p-6 rounded-lg shadow-md flex items-center">
              <div>
                <h3 className="text-lg font-bold">{contact.title}</h3>
                <p className="text-gray-700">{contact.info}</p>
                {contact.linkText && (
                  <a href={contact.linkUrl} className="text-blue-600 font-semibold">
                    {contact.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
