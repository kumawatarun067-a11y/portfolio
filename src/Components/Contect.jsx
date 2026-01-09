import React, { useState } from "react";

const Contect = () => {
  // 🔹 state (data rakhne ke liye)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 🔹 submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      phone,
      email,
      message,
    };

    // 🔹 localStorage me save
    localStorage.setItem("contactData", JSON.stringify(data));

    alert(" save your data in Data localStorage ");

    // 🔹 form clear
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      className="w-full px-5 sm:px-10 py-10 bg-gray-900 mb-3"
      id="Contect"
    >
      <div className="flex items-center justify-between mt-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500">
          Contact Me
        </h1>
      </div>

      <div className="border-b border-orange-500 w-full mt-4"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
        <form className="space-y-10 w-full text-white" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
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
              rows="2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border-b outline-none pb-2 bg-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="border-2 border-orange-500 text-orange-500 rounded-full px-10 py-3 text-lg font-semibold hover:bg-orange-500 hover:text-white duration-300"
          >
            Send Now
          </button>
        </form>

        {/*RIGHT SIDE */}
        <div className="text-white flex flex-col justify-between">
          <div className="flex gap-6 text-3xl lg:flex-col ml-150 mt-4 ">
            <i className="fa-brands fa-github hover:text-orange-400 transition"></i>
            <i className="fa-brands fa-linkedin hover:text-orange-400 transition"></i>
            <a href="https://wa.me/917247501035" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-whatsapp text-green-400"></i> </a>       
       </div>

          <div className="flex justify-between mt-20 text-sm sm:text-lg">
            <a
              href="mailto:kumawatarun067@gmail.com"
              className="hover:text-orange-400 transition" > <i className="fa-solid fa-envelope">
                </i> kumawatarun067@gmail.com
            </a>
            <a href="tel:+917247501035"
             className="flex items-center gap-2 hover:text-orange-400"> 📞 +91-7247501035</a>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contect;
