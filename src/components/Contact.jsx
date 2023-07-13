import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

const Contact = () => {
  // Set our  forms and the loading that is needed to get all the information for the user
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // This will be triggered on entered input values
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // This will handle user submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // This will send user message
    emailjs
      .send(
        "service_pahk2ph",
        "template_f84glg7",
        {
          from_name: form.name,
          to_name: "Deni",
          from_email: form.email,
          to_email: "dc.work@denicabaravdic.com",
          message: form.message,
        },
        "-1lzRyPrhcS7unHOy"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className=" w-full xsm:h-full md:h-screen md:mt-[475px] flex flex-col items-start justify-start overflow-hidden">
      <div className="max-w-[1200px] m-auto w-full">
        <div className="flex ">
          <motion.div className="mx-8" variants={textVariant()}>
            <p className="uppercase text-xl tracking-widest text-violet-600">
              get in touch
            </p>
            <h1 className="py-4">Contact Me</h1>
          </motion.div>
        </div>

        <div className="mx-8">
          <motion.div
            // slide from left, typeofanimation:tween, delay:0.2s, duration 1
            variants={slideIn("left", "tween", 0.2, 1)}
            className=" bg-black-100 p-8 rounded-2xl"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              {/* NAME */}
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Write your name"
                  className="bg-tertiary py-4 px-6 placeholder:text-violet-600 text-white rounded-lg outlined-none border-none font-medium"
                />
              </label>
              {/* EMAIL */}
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Write your email"
                  className="bg-tertiary py-4 px-6 placeholder:text-violet-600 text-white rounded-lg outlined-none border-none font-medium"
                />
              </label>
              {/* MESSAGE */}
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  className="bg-tertiary py-4 px-6 placeholder:text-violet-600 text-white rounded-lg outlined-none border-none font-medium"
                />
              </label>
              {/* SUBMIT */}
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              >
                {/* Gives us a loader if not sent yet */}
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
