import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Simulate submit (no external service)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending delay
    setTimeout(() => {
      alert("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-16 px-6 bg-gray-500 text-gray-900"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">
        Get in Touch – Let’s Connect
      </h2>
      <p className="text-center text-xl text-gray-100 mb-10">
        💬 Have questions or ideas? Let’s talk! 🚀
      </p>

      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What’s your good name?"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What’s your email address?"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-cyan-900 text-white font-semibold py-2 rounded-lg hover:bg-cyan-600 transition duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
