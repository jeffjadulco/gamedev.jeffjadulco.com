import { useRouter } from "next/router";
import { Footer } from "./footer";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

export const ContactFooter = () => {
  const router = useRouter();
  const [formState, handleSubmit] = useForm("contactForm");
  const [suceeded, setSucceeded] = useState(false);

  useEffect(() => {
    if (formState.succeeded) {
      setSucceeded(true);
    }
  }, [formState]);

  useEffect(() => {
    if (suceeded) {
      router.push("/thanks");
    }
  }, [suceeded]);

  return (
    <div className="relative pt-4 sm:pt-10 lg:pt-24 pb-16 bg-gray-950 border-b-4 border-teal-300">
      <div className="container m-auto h-full max-w-screen-lg px-8 md:px-12 lg:px-0 flex flex-col justify-between space-y-12 lg:space-y-64">
        <div className="h-60">
          <h1 id="contact" className="text-4xl sm:text-6xl font-black">
            Let's get in touch.
          </h1>
          <p className="max-w-screen-lg text-lg sm:text-2xl font-semibold">
            I love experimenting with new technologies and making quality games.
            Feel free to drop me a message about new opportunities - existing
            projects or collaborating together.
          </p>
          <form
            onSubmit={handleSubmit}
            className="lg:grid lg:grid-cols-2 col-gap-10 mt-8 space-y-4 lg:space-y-0 text-sm sm:text-base font-bold"
          >
            <div className="space-y-4">
              <div className="group">
                <label
                  className="group-hover:text-teal-300 uppercase transition-colors duration-200"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="block mt-1 p-4 w-full bg-gray-800 text-lg"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  required
                />
                <ValidationError
                  field="name"
                  prefix="Name"
                  errors={formState.errors}
                />
              </div>
              <div className="group">
                <label
                  className="group-hover:text-teal-300 uppercase transition-colors duration-200"
                  htmlFor="company"
                >
                  Company (optional)
                </label>
                <input
                  className="block mt-1 p-4 w-full bg-gray-800 text-lg"
                  id="company"
                  name="company"
                  placeholder="Enter your company or organization"
                  type="text"
                />
              </div>
              <div className="group">
                <label
                  className="group-hover:text-teal-300 uppercase transition-colors duration-200"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="block mt-1 p-4 w-full bg-gray-800 text-lg"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  type="email"
                  required
                />
                <ValidationError
                  field="email"
                  prefix="Email"
                  errors={formState.errors}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-8">
              <div className="group flex-auto">
                <label
                  className="group-hover:text-teal-300 uppercase transition-colors duration-200"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="block mt-1 p-4 w-full h-32 sm:h-48 resize-none bg-gray-800 text-lg"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  type="text"
                  required
                />
                <ValidationError
                  field="message"
                  prefix="Message"
                  errors={formState.errors}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn shoot slide relative w-48 px-8 py-4 font-bold text-gray-900 text-lg"
                  disabled={formState.submitting}
                >
                  {formState.submitting ? "LOADING" : "SHOOT"}
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer bShowContactButton={false} />
      </div>
    </div>
  );
};
