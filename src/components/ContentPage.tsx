import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    newsletterEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can connect this to an API or email service
    alert("Message sent successfully!");
    setFormData({ ...formData, name: "", email: "", message: "" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed to newsletter!");
    setFormData({ ...formData, newsletterEmail: "" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F2937] mb-3 flex items-center justify-center gap-2 drop-shadow-sm">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question, need support,
          or want to customize an order.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleContactSubmit}
          className="bg-white/90 shadow-xl rounded-2xl p-5 grid grid-cols-1 gap-4 text-left max-w-xs mx-auto mb-11 border border-orange-100"
        >
          <label htmlFor="name" className="font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg transition"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg transition"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message" className="font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg transition resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-xl font-semibold text-lg shadow hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Newsletter CTA */}
        {/* <div className="max-w-lg mx-auto bg-white/80 rounded-2xl shadow p-8 border border-orange-100">
          <h3 className="text-2xl font-bold text-[#1F2937] mb-3 flex items-center gap-2 justify-center">
            <span role="img" aria-label="newsletter">
              📬
            </span>{" "}
            Join Our Newsletter
          </h3>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <input
              type="email"
              name="newsletterEmail"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg transition"
              value={formData.newsletterEmail}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default ContactPage;
