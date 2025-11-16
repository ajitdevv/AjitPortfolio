function Contact() {
  return (
    <section
      id="contact"
      className=" flex flex-row items-center justify-center gap-[5%] w-full pt-20"
    >
      <div /* form container*/ className="w-[35%] text-primary ">
        <form
          action="https://formspree.io/f/mzzaewzd"
          method="POST"
          className="flex flex-col items-start rounded-2xl bg-foreground p-3 "
        >
          <div>
            <label htmlFor="Firstname" className="w-[40%]">First name </label>
            <input
              name="Firstname"
              type="text"
              id="Firstname"
              placeholder="First name"
              required
            />
            <label htmlFor="Lastname">Last name</label>
            <input
              name="Lastname"
              type="text"
              id="Lastname"
              placeholder="Last name"
              required
            />
          </div>
          <div>
            <label htmlFor="Gmail">Gmail</label>
            <input
              name="Gmail"
              type="gmail"
              id="Gmail"
              placeholder="gmail1234@gamil.com"
              required
            />
          </div>
          <div>
            <label htmlFor="contact">Contact</label>
            <input
              name="contact"
              type="contact"
              id="contact"
              placeholder="1234567890"
              required
            />
          </div>
          <div>
            <label htmlFor="Message">Message</label>
            <input
              name="Message"
              type="text"
              id="Message"
              placeholder="Type any message"
              required
            />
          </div>
          <div>
            <button type="submit" className="cosmic-button">
              Sand
            </button>
          </div>
        </form>
      </div>
      <div /* sosile midea container*/ className="w-[35%] ">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </section>
  );
}
export default Contact;
