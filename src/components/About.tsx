import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Award, Briefcase, Code, Users } from "lucide-react";

const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Briefcase, label: "Years Experience", value: 6, suffix: "+" },
    { icon: Code, label: "Projects Completed", value: 100, suffix: "+" },
    { icon: Users, label: "Clients Served", value: 15, suffix: "+" },
    { icon: Award, label: "Certifications", value: 3, suffix: "" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Salesforce Developer with <span className="text-primary font-semibold">6+ years</span> of experience 
              across Sales, Service, Experience, Marketing, CPQ and Financial Services Clouds.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert in Apex, LWC, Aura, Flows, REST/SOAP APIs and CI/CD automation via Copado and GitHub. 
              Implemented Einstein dashboards, Lightning migrations and chatbots that boost efficiency and engagement.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My focus is on building <span className="text-accent font-semibold">secure, scalable, user-centric</span> Salesforce 
              solutions that enhance governance and automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass p-6 rounded-2xl text-center hover:glow transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-poppins text-foreground mb-1">
                  {inView && (
                    <>
                      <CountUp end={stat.value} duration={2} />
                      {stat.suffix}
                    </>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
