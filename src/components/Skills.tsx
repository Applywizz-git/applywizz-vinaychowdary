import { motion } from "framer-motion";
import { Cloud, Code, Database, GitBranch, GitCommit, Lock, Settings, Zap, ZapOff, ZoomInIcon } from "lucide-react";
import { Tooltip } from "recharts";

const Skills = () => {
  const skillCategories = [
    {
      title: "Salesforce Clouds & Platforms",
      icon: Cloud,
      skills: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Marketing Cloud", "CPQ", "Financial Services", "Data Cloud", "Einstein 1"],
    },
    {
      title: "Development & Customization: ",
      icon: Code,
      skills: ["Apex", "LWC", "Aura", "Visualforce", "SLDS", "Platform Events", "Dynamic Forms"],
    },
    {
      title: "Automation & Process Optimization",
      icon: Zap,
      skills: ["Flow Builder", "Process Builder", "Approval Processes", "Validation Rules", "Orchestrations"],
    },
    {
      title: "Integrations & APIs",
      icon: Settings,
      skills: ["REST APIs", "SOAP", "GraphQL", "MuleSoft", "Named Credentials", "Outbound Messaging"],
    },
    {
      title: "DevOps & Deployment",
      icon: GitBranch,
      skills: ["Copado", "Gearset", "Jenkins", "GitHub Actions", "sfdx", "CI/CD Pipelines"],
    },
    {
      title: "Data & Security Management",
      icon: Lock,
      skills: ["Shield Encryption", "Role Hierarchy", "Sharing Rules", "Data Mask", "Field-Level Security"],
    },
    {
      title: "Analytics & Intelligence ",
      icon: Database,
      skills: ["Reports & Dashboards", "Einstein Analytics", "Einstein GPT", "Slack Insights"],
    },
    {
      title: "Tools & Environments ",
      icon: GitCommit,
      skills: ["Visual Studio Code", "Developer Console", "Workbench", "Postman", "GitHub", "Jira", "MS SQL Server", "MySQL", "UNIX/Linux"],
    },
       {
      title: "Methodologies & Practices ",
      icon: ZoomInIcon,
      skills: ["Agile/Scrum", "CI/CD", "Test-Driven Development (TDD)", "SDLC", "Release Governance", "Code Review & Quality Assurance. "],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl hover:glow-accent transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-poppins text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground 
                             rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
