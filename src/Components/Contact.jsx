import { Send, Mail, Phone, MapPin, ArrowUpRight, MessageSquare } from "lucide-react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useAnimations";

const socials = [
  { Icon: BsInstagram, href: "https://www.instagram.com/ajitdevv/", color: "#E1306C", label: "Instagram" },
  { Icon: BsGithub, href: "https://github.com/ajitdevv", color: "#6366f1", label: "GitHub" },
  { Icon: BsLinkedin, href: "https://www.linkedin.com/in/ajeet-dev-947287330/", color: "#0A66C2", label: "LinkedIn" },
  { Icon: BsTwitter, href: "https://x.com/ajitdevv", color: "#1DA1F2", label: "Twitter" },
  { Icon: BsWhatsapp, href: "https://wa.me/918058339867", color: "#25D366", label: "WhatsApp" },
];

function Contact() {
  const [headingRef, headingVisible] = useScrollReveal();
  const [leftRef, leftVisible] = useScrollReveal({ threshold: 0.1 });
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.1 });
  const [focused, setFocused] = useState("");

  const inputClass = (name) =>
    `w-full px-4 py-3 rounded-xl bg-card/40 text-primary text-sm placeholder:text-primary/30 outline-none transition-all duration-300 border ${
      focused === name
        ? "border-primary-foreground shadow-[0_0_0_2px_var(--primary-foreground)]"
        : "border-transparent hover:bg-card/60"
    }`;

  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        {/* Freelance badge */}
        <div
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 bg-primary-foreground/8 transition-all duration-700 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-primary-foreground text-xs md:text-sm font-medium">
            Available for freelance work
          </span>
        </div>
        <h1
          ref={headingRef}
          className={`text-3xl md:text-5xl font-bold text-primary transition-all duration-700 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Let's <span className="text-primary-foreground">Talk</span>
        </h1>
        <p
          className={`text-primary/40 mt-3 text-sm md:text-base max-w-sm mx-auto transition-all duration-700 delay-200 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Have an idea or project? I'd love to hear about it.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* ===== LEFT — Info & Socials ===== */}
          <div
            ref={leftRef}
            className={`flex flex-col justify-between transition-all duration-700 ${
              leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-primary-foreground/10">
                  <MessageSquare size={24} className="text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h2 className="text-primary font-bold text-xl md:text-2xl">Get in touch</h2>
                  <p className="text-primary/40 text-sm">I usually respond within 24 hours</p>
                </div>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-4 mt-8">
                <a
                  href="mailto:ajeetbairwa57@gmail.com"
                  className="group flex items-center gap-4 text-left hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-primary-foreground/8">
                    <Mail size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary/30 text-xs">Email</p>
                    <p className="text-primary text-sm font-medium group-hover:text-primary-foreground transition-colors">
                      ajeetbairwa57@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+918058339867"
                  className="group flex items-center gap-4 text-left hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-accent/8">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-primary/30 text-xs">Phone</p>
                    <p className="text-primary text-sm font-medium group-hover:text-primary-foreground transition-colors">
                      +91 80583 39867
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-left">
                  <div className="p-2.5 rounded-xl bg-blue-500/8">
                    <MapPin size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-primary/30 text-xs">Location</p>
                    <p className="text-primary text-sm font-medium">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social icons row */}
            <div className="mt-10">
              <p className="text-primary/30 text-xs mb-3 text-left">Find me on</p>
              <div className="flex gap-2">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    aria-label={s.label}
                    className="group p-3 rounded-xl bg-card/40 hover:bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <s.Icon
                      size={20}
                      className="text-primary/40 group-hover:text-primary transition-colors duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ===== RIGHT — Form ===== */}
          <div
            ref={formRef}
            className={`transition-all duration-700 delay-100 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form
              action="https://formspree.io/f/mzzaewzd"
              method="POST"
              className="glass rounded-3xl p-6 md:p-8"
            >
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input
                  name="Firstname"
                  type="text"
                  required
                  pattern="^[A-Za-z]{2,}$"
                  title="Only letters, min 2 characters"
                  placeholder="First name"
                  onFocus={() => setFocused("first")}
                  onBlur={() => setFocused("")}
                  className={inputClass("first")}
                />
                <input
                  name="Lastname"
                  type="text"
                  required
                  pattern="^[A-Za-z]{2,}$"
                  title="Only letters, min 2 characters"
                  placeholder="Last name"
                  onFocus={() => setFocused("last")}
                  onBlur={() => setFocused("")}
                  className={inputClass("last")}
                />
              </div>

              <div className="mb-3">
                <input
                  name="Gmail"
                  type="email"
                  required
                  pattern="^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,62}[a-zA-Z0-9])?@gmail\.com$"
                  title="Please enter a valid Gmail address"
                  placeholder="example@gmail.com"
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  className={inputClass("email")}
                />
              </div>

              <div className="mb-3">
                <input
                  name="contact"
                  type="tel"
                  pattern="^[6-9]\d{9}$"
                  title="Valid 10-digit Indian mobile number"
                  placeholder="Mobile number (optional)"
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused("")}
                  className={inputClass("phone")}
                />
              </div>

              <div className="mb-5">
                <textarea
                  name="Message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused("")}
                  className={`${inputClass("msg")} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3.5 text-base group"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
