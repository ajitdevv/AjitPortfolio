import { ArrowRight, Send, MapPin, Mail, Phone } from "lucide-react";
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
  {
    name: "Instagram",
    handle: "@ajitdevv",
    href: "https://www.instagram.com/ajitdevv/",
    Icon: BsInstagram,
    color: "#E1306C",
    bg: "bg-pink-500/10",
  },
  {
    name: "GitHub",
    handle: "ajitdevv",
    href: "https://github.com/ajitdevv",
    Icon: BsGithub,
    color: "#333",
    bg: "bg-gray-500/10",
    darkColor: "#fff",
  },
  {
    name: "LinkedIn",
    handle: "Ajeet Dev",
    href: "https://www.linkedin.com/in/ajeet-dev-947287330/",
    Icon: BsLinkedin,
    color: "#0A66C2",
    bg: "bg-blue-500/10",
  },
  {
    name: "Twitter / X",
    handle: "@ajitdevv",
    href: "https://x.com/ajitdevv",
    Icon: BsTwitter,
    color: "#1DA1F2",
    bg: "bg-sky-500/10",
  },
  {
    name: "WhatsApp",
    handle: "Chat now",
    href: "https://wa.me/918058339867",
    Icon: BsWhatsapp,
    color: "#25D366",
    bg: "bg-green-500/10",
  },
];

function SocialCard({ social, index }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <a
      ref={ref}
      href={social.href}
      target="_blank"
      className={`group flex items-center gap-3 p-3 md:p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 hover:border-border/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
    >
      <div
        className={`p-2.5 rounded-xl ${social.bg} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
      >
        <social.Icon size={20} style={{ color: social.color }} />
      </div>
      <div className="flex-1 min-w-0 text-left">
        <h4 className="text-primary font-semibold text-sm">{social.name}</h4>
        <p className="text-primary/40 text-xs truncate">{social.handle}</p>
      </div>
      <ArrowRight
        size={16}
        className="text-primary/30 group-hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-300 shrink-0"
      />
    </a>
  );
}

function Contact() {
  const [headingRef, headingVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.1 });
  const [focused, setFocused] = useState("");

  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h1
          ref={headingRef}
          className={`text-3xl md:text-5xl font-bold text-primary transition-all duration-700 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get In <span className="text-primary-foreground">Touch</span>
        </h1>
        <p
          className={`text-primary/50 mt-3 text-sm md:text-base max-w-md mx-auto transition-all duration-700 delay-200 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Have a project in mind? Let's build something amazing together
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          {/* ===== FORM (takes 3 cols) ===== */}
          <div
            ref={formRef}
            className={`lg:col-span-3 transition-all duration-700 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form
              action="https://formspree.io/f/mzzaewzd"
              method="POST"
              className="bg-card/40 backdrop-blur-sm rounded-3xl p-5 md:p-8 border border-border/20"
            >
              <h2 className="text-primary font-bold text-lg md:text-xl mb-1">
                Send a message
              </h2>
              <p className="text-primary/40 text-xs md:text-sm mb-6">
                Fill out the form and I'll get back to you soon
              </p>

              {/* Name row */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="relative">
                  <input
                    name="Firstname"
                    type="text"
                    required
                    pattern="^[A-Za-z]{2,}$"
                    title="Only letters, min 2 characters"
                    placeholder="First name"
                    onFocus={() => setFocused("first")}
                    onBlur={() => setFocused("")}
                    className={`w-full px-4 py-3 rounded-xl bg-background/60 border text-primary text-sm placeholder:text-primary/30 outline-none transition-all duration-300 ${
                      focused === "first"
                        ? "border-primary-foreground shadow-[0_0_0_3px_rgba(var(--primary-foreground),0.1)]"
                        : "border-border/30 hover:border-border/60"
                    }`}
                  />
                </div>
                <div className="relative">
                  <input
                    name="Lastname"
                    type="text"
                    required
                    pattern="^[A-Za-z]{2,}$"
                    title="Only letters, min 2 characters"
                    placeholder="Last name"
                    onFocus={() => setFocused("last")}
                    onBlur={() => setFocused("")}
                    className={`w-full px-4 py-3 rounded-xl bg-background/60 border text-primary text-sm placeholder:text-primary/30 outline-none transition-all duration-300 ${
                      focused === "last"
                        ? "border-primary-foreground shadow-[0_0_0_3px_rgba(var(--primary-foreground),0.1)]"
                        : "border-border/30 hover:border-border/60"
                    }`}
                  />
                </div>
              </div>

              {/* Email */}
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
                  className={`w-full px-4 py-3 rounded-xl bg-background/60 border text-primary text-sm placeholder:text-primary/30 outline-none transition-all duration-300 ${
                    focused === "email"
                      ? "border-primary-foreground shadow-[0_0_0_3px_rgba(var(--primary-foreground),0.1)]"
                      : "border-border/30 hover:border-border/60"
                  }`}
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <input
                  name="contact"
                  type="tel"
                  pattern="^[6-9]\d{9}$"
                  title="Valid 10-digit Indian mobile number"
                  placeholder="Mobile number (optional)"
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused("")}
                  className={`w-full px-4 py-3 rounded-xl bg-background/60 border text-primary text-sm placeholder:text-primary/30 outline-none transition-all duration-300 ${
                    focused === "phone"
                      ? "border-primary-foreground shadow-[0_0_0_3px_rgba(var(--primary-foreground),0.1)]"
                      : "border-border/30 hover:border-border/60"
                  }`}
                />
              </div>

              {/* Message */}
              <div className="mb-5">
                <textarea
                  name="Message"
                  rows={4}
                  placeholder="Your message..."
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused("")}
                  className={`w-full px-4 py-3 rounded-xl bg-background/60 border text-primary text-sm placeholder:text-primary/30 outline-none resize-none transition-all duration-300 ${
                    focused === "msg"
                      ? "border-primary-foreground shadow-[0_0_0_3px_rgba(var(--primary-foreground),0.1)]"
                      : "border-border/30 hover:border-border/60"
                  }`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn-primary py-3 text-base group"
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

          {/* ===== RIGHT SIDE (takes 2 cols) ===== */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/20">
                <div className="p-2.5 rounded-xl bg-primary-foreground/10">
                  <Mail size={18} className="text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-primary/40 text-xs">Email</p>
                  <a
                    href="mailto:ajeetbairwa57@gmail.com"
                    className="text-primary text-sm font-medium hover:text-primary-foreground transition-colors duration-300"
                  >
                    ajeetbairwa57@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/20">
                <div className="p-2.5 rounded-xl bg-accent/10">
                  <Phone size={18} className="text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-primary/40 text-xs">Phone</p>
                  <a
                    href="tel:+918058339867"
                    className="text-primary text-sm font-medium hover:text-primary-foreground transition-colors duration-300"
                  >
                    +91 80583 39867
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/20">
                <div className="p-2.5 rounded-xl bg-blue-500/10">
                  <MapPin size={18} className="text-blue-500" />
                </div>
                <div className="text-left">
                  <p className="text-primary/40 text-xs">Location</p>
                  <p className="text-primary text-sm font-medium">India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-1">
              <h3 className="text-primary font-semibold text-sm mb-3 text-left">
                Connect with me
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {socials.map((social, i) => (
                  <SocialCard key={social.name} social={social} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
