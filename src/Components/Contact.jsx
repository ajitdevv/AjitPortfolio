import { ArrowRight } from "lucide-react";
import { BsGithub, BsInstagram, BsLinkedin, BsMailbox, BsTelephone, BsTwitter } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact">
      <div className=" flex flex-col items-start w-full pt-20">
        <div>
          <h1 className="text-primary text-5xl font-bold pb-10">Contact Me</h1>
        </div>
        <div className="w-full flex felx-row justify-center items-center max-sm:flex-col">
          <div
            /* form container*/ className="w-[40%] flex flex-col items-center text-primary "
          >
            <form
              action="https://formspree.io/f/mzzaewzd"
              method="POST"
              className="flex flex-col rounded-2xl w-[90%] bg-foreground p-3"
            >
              <div className="flex flex-row w-full jestify-srart font-bold text-2xl text-primary/70">
                <h1>Say hi..</h1>
              </div>
              <div className="flex flex-row w-full jestify-srart ">
                <input
                  name="Firstname"
                  type="text"
                  id="Firstname"
                  placeholder="First name"
                  required
                  className="w-[50%] rounded-2xl bg-card m-5 p-3"
                />
                <input
                  name="Lastname"
                  type="text"
                  id="Lastname"
                  placeholder="Last name"
                  required
                  className="w-[50%]  rounded-2xl bg-card m-5 p-3"
                />
              </div>
              <div>
                <input
                  name="Gmail"
                  type="gmail"
                  id="Gmail"
                  placeholder="gmail1234@gamil.com"
                  required
                  className=" rounded-2xl w-[91%] bg-card m-5 p-3"
                />
              </div>
              <div>
                <input
                  name="contact"
                  type="contact"
                  id="contact"
                  placeholder="+91-1234567890"
                  required
                  className=" rounded-2xl w-[91%] bg-card m-5 p-3"
                />
              </div>
              <div>
                <input
                  name="Message"
                  type="text"
                  id="Message"
                  placeholder="Type any message..."
                  required
                  className=" rounded-2xl w-[91%] bg-card m-5 p-3 h-[80px] "
                />
              </div>
              <div>
                <button type="submit" className="cosmic-button w-[90%]">
                  Sand
                </button>
              </div>
            </form>
          </div>
          <div /* sosile midea container*/ className="w-[35%] flex flex-col gap-4">
            <a href="">
              <div className="flex flex-row justify-between bg-foreground p-[22px] rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="text-primary "><BsInstagram className="text-primary"/></h1>
                <ArrowRight className="text-primary"/>
              </div>
            </a>
            <a href="">
              <div className="flex flex-row justify-between bg-foreground p-[22px] rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="text-primary"><BsGithub className="text-primary"/></h1>
                <ArrowRight className="text-primary"/>
              </div>
            </a>
            <a href="">
              <div className="flex flex-row justify-between bg-foreground p-[22px] rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="text-primary"><BsLinkedin className="text-primary" /></h1>
                <ArrowRight className="text-primary"/>
              </div>
            </a>
            <a href="">
              <div className="flex flex-row justify-between bg-foreground p-[22px] rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="text-primary"><BsMailbox className="text-primary" /></h1>
                <ArrowRight className="text-primary"/>
              </div>
            </a>
            <a href="">
              <div className="flex flex-row justify-between bg-foreground p-[22px] rounded-2xl hover:scale-110 transition-transform duration-300 ">
                <h1 className="text-primary"> <BsTwitter className="text-primary" /></h1>
                <ArrowRight className="text-primary"/>
              </div>
            </a>
            <a href="">
              <div className="flex flex-row justify-between bg-foreground p-[22px] rounded-2xl hover:scale-110 transition-transform duration-300  ">
                <h1 className="text-primary"> <BsTelephone className="text-primary" /></h1>
                <ArrowRight className="text-primary"/>
              </div>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
