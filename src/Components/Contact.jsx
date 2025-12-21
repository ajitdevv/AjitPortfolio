import { ArrowRight } from "lucide-react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMailbox,
  BsTelephone,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="contact">
      <div className=" flex flex-col justify-around w-full pt-20">
        <div className="w-full flex felx-row justify-center items-center max-sm:flex-col max-sm:gap-10  ">
          <div
            /* form container*/ className="w-[40%] max-sm:w-full flex flex-col items-start text-primary max-sm:justify-center max-sm:items-center"
          >
            <h1
              data-aos="fade-up"
              data-aos-offset="150"
              className="text-primary text-5xl font-bold pb-10 "
            >
              Contact <span className="text-primary-foreground"> Me</span>
            </h1>
            <form
              action="https://formspree.io/f/mzzaewzd"
              method="POST"
              className="flex flex-col shadow-xl rounded-2xl w-[90%] bg-foreground p-3 max-sm:pb-9"
            >
              <div
                data-aos="fade-left"
                data-aos-offset="150"
                className="flex flex-row  w-full justify-start font-bold text-2xl text-primary/70"
              >
                <h1>Say hi..</h1>
              </div>
              <div className="flex flex-row w-full justify-start ">
                <input
                  data-aos="fade-right"
                  data-aos-offset="150"
                  name="Firstname"
                  type="text"
                  id="Firstname"
                  placeholder="First name"
                  required
                  pattern="^[A-Za-z]{2,}$"
                  title="First name should contain only letters (2–15 characters)"
                  className="w-[50%] rounded-2xl bg-card m-5 p-3"
                />
                <input
                  data-aos="fade-left"
                  data-aos-offset="150"
                  name="Lastname"
                  type="text"
                  id="Lastname"
                  placeholder="Last name"
                  required
                  pattern="^[A-Za-z]{2,}$"
                  title="First name should contain only letters (2–15 characters)"
                  className="w-[50%]  rounded-2xl bg-card m-5 p-3"
                />
              </div>
              <div>
                <input
                  data-aos="fade-right"
                  data-aos-offset="150"
                  name="Gmail"
                  type="email"
                  id="Gmail"
                  placeholder="example1234@gamil.com"
                  required
                  pattern="^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,62}[a-zA-Z0-9])?@gmail\.com$"
                  title="Please enter a valid Gmail address (example@gmail.com)"
                  className=" rounded-2xl w-[91%] bg-card m-5 p-3"
                />
              </div>
              <div>
                <input
                  data-aos="fade-left"
                  data-aos-offset="150"
                  name="contact"
                  type="contact"
                  id="contact"
                  placeholder="Enter mobile number (Optional)"
                  pattern="^[6-9]\d{9}$"
                  title="Please enter a valid 10-digit Indian mobile number"
                  className=" rounded-2xl w-[91%] bg-card m-5 p-3"
                />
              </div>
              <div>
                <input
                  data-aos="fade-right"
                  data-aos-offset="150"
                  name="Message"
                  type="text"
                  id="Message"
                  placeholder="Type any message..."
                  className=" rounded-2xl w-[91%] bg-card m-5 p-3 h-20 "
                />
              </div>
              <div>
                <button
                  data-aos="fade-in"
                  data-aos-offset="50"
                  type="submit"
                  className="cosmic-button w-[90%]"
                >
                  Sand
                </button>
              </div>
            </form>
          </div>
          <div className="w-[35%] max-sm:w-[90%] max-sm:justify-center flex flex-col gap-2">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ajitdevv/"
              target="_blank"
              data-aos="fade-up"
              data-aos-offset="150"
            >
              <div className="flex flex-row justify-between bg-foreground py-5 rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="text-primary px-6 flex gap-2">
                  <BsInstagram className="size-8 text-pink-500" />
                  instagram.com/ajitdevv/
                </h1>
                <ArrowRight className="text-primary" />
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ajitdevv"
              target="_blank"
              data-aos="fade-up"
              data-aos-offset="150"
            >
              <div className="flex flex-row justify-between bg-foreground py-5 rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="text-primary px-6 flex gap-2">
                  <BsGithub className="size-8 text-black dark:text-white" />
                  github.com/ajitdevv
                </h1>
                <ArrowRight className="text-primary" />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ajeet-dev-947287330/"
              target="_blank"
              data-aos="fade-up"
              data-aos-offset="150"
            >
              <div className="flex flex-row justify-between bg-foreground py-5 rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="text-primary px-6 flex gap-2">
                  <BsLinkedin className="size-8 text-blue-600" />
                  linkedin.com
                </h1>
                <ArrowRight className="text-primary" />
              </div>
            </a>

            {/* Gmail */}
            <a
              href="mailto:ajitdev014@gmail.com"
              target="_blank"
              data-aos="fade-up"
              data-aos-offset="150"
            >
              <div className="flex flex-row justify-between bg-foreground py-5 rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="text-primary px-6 flex gap-2">
                  <BsMailbox className="size-8 text-red-500" />
                  ajitdev014@gmail.com
                </h1>
                <ArrowRight className="text-primary" />
              </div>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/ajitdevv"
              target="_blank"
              data-aos="fade-up"
              data-aos-offset="150"
            >
              <div className="flex flex-row justify-between bg-foreground py-5 rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="text-primary px-6 flex gap-2">
                  <BsTwitter className="size-8 text-sky-500" />
                  x.com/ajitdevv
                </h1>
                <ArrowRight className="text-primary" />
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918058339867"
              target="_blank"
              data-aos="fade-up"
              data-aos-offset="150"
            >
              <div className="flex flex-row justify-between bg-foreground py-5 rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="text-primary px-6 flex gap-2">
                  <BsWhatsapp className="size-8 text-green-500" />
                  Contact on whatsapp
                </h1>
                <ArrowRight className="text-primary" />
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+918058339867"
              target="_blank"
              data-aos="fade-up"
              data-aos-offset="150"
            >
              <div className="flex flex-row justify-between bg-foreground py-5 rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="text-primary px-6 flex gap-2">
                  <BsTelephone className="size-8 text-indigo-500" />
                  8058339867
                </h1>
                <ArrowRight className="text-primary" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
