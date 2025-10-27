import { motion } from "framer-motion";
import {  Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: true });
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/vinay-dhulipalla", label: "LinkedIn" },
    // { icon: Github, href: "https://github.com/vinaydhulipalla", label: "GitHub" },
    { icon: Mail, href: "mailto:vinaydhulipalla1026@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-secondary/20 py-12 px-4 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-poppins text-gradient">Vinay Dhulipalla</h3>
            <p className="text-sm text-muted-foreground">
              Salesforce Developer crafting scalable, secure cloud solutions
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-poppins text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-poppins text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 glass rounded-lg hover:glow-accent transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vinay Dhulipalla. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React + Tailwind + Framer Motion
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 right-8 z-30"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full bg-accent hover:bg-accent/90 glow-accent animate-float"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </motion.div>
    </footer>
  );
};

export default Footer;
