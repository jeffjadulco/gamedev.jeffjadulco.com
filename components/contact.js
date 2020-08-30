export const ContactForm = () => {
  return (
    <>
      <h1 id="contact" className="text-6xl font-black">
        Let's get in touch.
      </h1>
      <p className="max-w-screen-lg text-2xl font-semibold">
        I love experimenting with new technologies and making quality games.
        Feel free to drop me a message about new opportunities - existing
        projects or collaborating together.
      </p>
      <form className="grid grid-cols-2 col-gap-10 mt-8 text-2xl font-bold">
        <div className="space-y-4">
          <div className="group">
            <label className="group-hover:text-teal-300" htmlFor="name">
              Name
            </label>
            <input
              className="block mt-1 p-4 w-full bg-gray-800 text-lg"
              id="name"
              name="name"
              placeholder="Enter your name"
              type="text"
            />
          </div>
          <div className="group">
            <label className="group-hover:text-teal-300" htmlFor="company">
              Company / Organization (optional)
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
            <label className="group-hover:text-teal-300" htmlFor="email">
              Email
            </label>
            <input
              className="block mt-1 p-4 w-full bg-gray-800 text-lg"
              id="email"
              name="email"
              placeholder="Enter your email address"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="group flex-auto">
            <label className="group-hover:text-teal-300" htmlFor="message">
              Message
            </label>
            <textarea
              className="block mt-1 p-4 w-full h-48 resize-none bg-gray-800 text-lg"
              id="message"
              name="message"
              placeholder="Enter your message"
              type="text"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-48 px-8 py-4 bg-teal-300 font-bold text-gray-900 text-lg"
            >
              SHOOT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
