import React, { useState } from "react";

const Contect = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, phone, email, message };
    localStorage.setItem("contactData", JSON.stringify(data));
    alert("Saved your data in localStorage");
    setName(""); setPhone(""); setEmail(""); setMessage("");
  };

  return (
    <section
      className="w-full px-5 sm:px-10 py-10 bg-gray-900 "
      id="Contect"
    >
      <div className="flex flex-col md:flex-row items-start justify-between mt-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500">
          Contact Me
        </h1>
        <div className="border-b border-orange-500 w-full md:hidden mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-10 ">
        {/* FORM */}
        <form className="space-y-8 sm:space-y-10 w-full text-white" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
            <div>
              <label className="block mb-2 font-medium">Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b shadow-xl outline-none pb-2 bg-transparent"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Phone *</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-b outline-none pb-2 bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b outline-none pb-2 bg-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message *</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border-b outline-none pb-2 bg-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto border-2 border-orange-500 text-orange-500 rounded-full px-10 py-3 text-lg font-semibold hover:bg-orange-500 hover:text-white duration-300"
          >
            Send Now
          </button>
        </form>

        
      </div>
    </section>
  );
};

export default Contect;
