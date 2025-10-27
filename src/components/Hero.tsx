import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, Mail, Phone, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileImage from "./ProfileImage";
import { Link } from "react-scroll";

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Salesforce Developer", "Lightning Expert", "Apex Specialist", "Cloud Architect"];
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-poppins"
            >
              Hi, I'm <span className="text-gradient">Vinay</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-16"
            >
              <span className="text-2xl md:text-3xl text-primary font-semibold">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              6+ years transforming business processes with Salesforce. Expert in Sales, Service, 
              CPQ, and Financial Services Cloud. Passionate about building scalable, secure solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>Cleveland, OH</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a href="mailto:vinaydhulipalla1026@gmail.com" className="hover:text-primary transition-colors">
                  vinaydhulipalla1026@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span>+1 (216) 972-2312</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="contact" smooth={true} duration={500}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get In Touch
                </Button>
              </Link>
              <a href="https://www.linkedin.com/in/vinay-dhulipalla" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <Linkedin size={18} />
                  LinkedIn
                </Button>
              </a>
        <a href="/assets/resume.pdf" download>
    <Button size="lg" variant="outline" className="gap-2">
      <Globe size={18} /> {/* Changed icon to Globe or use FileText */}
      Download Resume
    </Button>
  </a>     </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
