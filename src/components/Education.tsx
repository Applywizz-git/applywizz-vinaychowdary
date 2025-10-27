import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "M.S. Computer Science",
      university: "Campbellsville University",
      location: "Kentucky, USA",
      period: "2021 – 2022",
      description: "Specialized in cloud computing and distributed systems",
    },
    {
      degree: "B.Tech Electronics & Communication Engineering",
      university: "KL University",
      location: "Hyderabad, India",
      period: "2016 – 2020",
      description: "Foundation in software development and systems engineering",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass p-8 rounded-2xl hover:glow transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <GraduationCap className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-poppins text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{edu.university}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin size={16} />
                <span>{edu.location}</span>
              </div>

              <div className="text-sm text-muted-foreground mb-4">{edu.period}</div>

              <p className="text-sm text-muted-foreground">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
