"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function ContactUs() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid = subject && email && message;

  return (
    <div className="bg-blue-200 min-h-screen">
      <Header />
      <div>
        <h1 className="text-center font-bold mt-12 text-2xl text-green-900">
          Contact Us
        </h1>
      </div>

      <form className="py-4 mt-4 border-t flex flex-col gap-5">
        <div>
          <label
            htmlFor="subject"
            className="block text-green-900 text-sm font-bold mb-2 ml-2"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="shadow appearance-none border rounded py-2 px-3 w-72 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-green-900 text-sm font-bold mb-2 ml-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            className="shadow appearance-none border rounded w-fit ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-green-900 text-sm font-bold mb-2 ml-2"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here."
            className="shadow appearance-none border rounded w-11/12 py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <a
            href={`mailto:ridhan.anbazhagan@giis.edu.sg?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(`${message}\n\nFrom: ${email}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              disabled={!isFormValid}
              className={`p-3 font-bold rounded ml-2 text-white ${
                isFormValid
                  ? "bg-green-700 hover:bg-green-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Send
            </button>
          </a>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default ContactUs;
