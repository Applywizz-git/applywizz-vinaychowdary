import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "AT&T",
      location: "Dallas, TX",
      role: "Sr. Salesforce Developer",
      period: "Apr 2025 – Present",
      highlights: [
        "Migrated 100+ VF pages → LWC (↑ UI speed 40%)",
        "Automated renewals with Batch Apex (↓ manual 30%)",
        "Einstein Chatbot + Coveo integration (↓ Tier-1 cases 18%)",
        "LWC dashboards for renewal KPIs (↑ accuracy 25%)",
        "Omni-Channel skill routing for SLA optimization",
        "CI/CD via Copado + GitHub + Jenkins (zero regressions)",
      ],
    },
    {
      company: "Chubb",
      location: "Warren, NJ",
      role: "Salesforce Lightning Developer",
      period: "Jun 2024 – Mar 2025",
      highlights: [
        "Migrated 80+ VF/Aura → LWC (↑ UI 35%)",
        "Automated CPQ/CLM discount approvals (↓ quote time 35%)",
        "Twilio CTI SMS integration (↑ engagement 20%)",
        "Experience Cloud portals (↑ adoption 40%)",
        "Conga Composer reporting (↓ manual 50%)",
      ],
    },
    {
      company: "Employment Development Department",
      location: "Sacramento, CA",
      role: "Salesforce Developer",
      period: "Jan 2023 – May 2024",
      highlights: [
        "Modernized legacy VF → LWC (↑ load 35%)",
        "Automated case routing & approvals (↓ manual 30%)",
        "External REST/SOAP integration (↑ accuracy 25%)",
        "Marketing Cloud journeys (↑ engagement 28%)",
        "CI/CD via Copado (zero downtime)",
      ],
    },
    {
      company: "JPMorgan Chase & Co",
      location: "New York, NY",
      role: "Salesforce Administrator",
      period: "Nov 2021 – Dec 2022",
      highlights: [
        "Migrated 60+ VF/Aura → LWC (↑ speed 35%)",
        "Automated claims workflow (↓ manual 30%)",
        "Secure role hierarchies (↓ unauthorized 18%)",
        "Dynamic dashboards (↑ decision efficiency 22%)",
        "Marketing Cloud campaigns (↑ engagement 28%)",
      ],
    },
    {
      company: "Qualcomm",
      location: "Hyderabad, India",
      role: "Salesforce Administrator",
      period: "Mar 2019 – Jul 2021",
      highlights: [
        "Enhanced CRM objects (↓ duplicates 25%)",
        "Automated case routing (↓ resolution 30%)",
        "Validation & approval rules (↓ errors 28%)",
        "Interactive dashboards (↑ decisions 22%)",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
              } md:w-1/2`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 bg-primary rounded-full left-6 md:left-auto ${
                  index % 2 === 0 ? "md:right-[-9px]" : "md:left-[-9px]"
                }`}
              ></div>

              <div className="glass p-6 rounded-2xl ml-16 md:ml-0 hover:glow-accent transition-all duration-300">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Briefcase size={20} />
                  <h3 className="text-xl font-poppins">{exp.company}</h3>
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">{exp.role}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span>{exp.period} • {exp.location}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
