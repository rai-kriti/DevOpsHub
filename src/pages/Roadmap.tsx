import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import {
  SiLinux,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiAmazonwebservices,
} from "react-icons/si";
import { CheckCircle2, Circle, Lock } from "lucide-react";

const roadmapStages = [
  {
    level: "Beginner",
    color: "neon-green",
    description: "Foundation skills every DevOps engineer needs",
    skills: [
      { 
        name: "Linux Fundamentals", 
        Icon: SiLinux, 
        iconColor: "#FCC624",
        topics: ["Command line basics", "File system navigation", "Process management", "Shell scripting", "User permissions"],
        status: "available"
      },
      { 
        name: "Version Control with Git", 
        Icon: SiGit, 
        iconColor: "#F05032",
        topics: ["Repositories", "Branching strategies", "Merging & rebasing", "Pull requests", "Git workflows"],
        status: "available"
      },
      { 
        name: "Networking Basics", 
        Icon: null, 
        iconColor: "#00D4FF",
        topics: ["TCP/IP", "DNS", "HTTP/HTTPS", "Load balancing", "Firewalls"],
        status: "available"
      },
    ]
  },
  {
    level: "Intermediate",
    color: "primary",
    description: "Core DevOps tools and practices",
    skills: [
      { 
        name: "Containerization", 
        Icon: SiDocker, 
        iconColor: "#2496ED",
        topics: ["Docker images", "Containers", "Docker Compose", "Container networking", "Docker Hub"],
        status: "available"
      },
      { 
        name: "CI/CD Pipelines", 
        Icon: SiJenkins, 
        iconColor: "#D24939",
        topics: ["Build automation", "Testing strategies", "Deployment automation", "Pipeline as code", "Artifact management"],
        status: "available"
      },
      { 
        name: "Cloud Platforms", 
        Icon: SiAmazonwebservices, 
        iconColor: "#FF9900",
        topics: ["EC2 & compute", "S3 & storage", "VPC & networking", "IAM & security", "Serverless basics"],
        status: "available"
      },
    ]
  },
  {
    level: "Advanced",
    color: "secondary",
    description: "Production-grade infrastructure skills",
    skills: [
      { 
        name: "Container Orchestration", 
        Icon: SiKubernetes, 
        iconColor: "#326CE5",
        topics: ["Pods & deployments", "Services & ingress", "ConfigMaps & secrets", "Helm charts", "Operators"],
        status: "available"
      },
      { 
        name: "Infrastructure as Code", 
        Icon: SiTerraform, 
        iconColor: "#7B42BC",
        topics: ["Terraform basics", "State management", "Modules", "Providers", "Best practices"],
        status: "available"
      },
      { 
        name: "Configuration Management", 
        Icon: SiAnsible, 
        iconColor: "#EE0000",
        topics: ["Playbooks", "Roles", "Inventory", "Templates", "Ansible Galaxy"],
        status: "available"
      },
    ]
  },
  {
    level: "Expert",
    color: "neon-pink",
    description: "Enterprise-scale operations",
    skills: [
      { 
        name: "Monitoring & Observability", 
        Icon: SiPrometheus, 
        iconColor: "#E6522C",
        topics: ["Metrics collection", "Alerting", "Log aggregation", "Distributed tracing", "SRE practices"],
        status: "available"
      },
      { 
        name: "Security & Compliance", 
        Icon: null, 
        iconColor: "#00FF88",
        topics: ["DevSecOps", "Secret management", "Vulnerability scanning", "Compliance automation", "Zero trust"],
        status: "available"
      },
      { 
        name: "Platform Engineering", 
        Icon: null, 
        iconColor: "#FF00FF",
        topics: ["Internal developer platforms", "Self-service infrastructure", "Golden paths", "Platform APIs", "Developer experience"],
        status: "available"
      },
    ]
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-5 h-5 text-neon-green" />;
    case "locked":
      return <Lock className="w-5 h-5 text-muted-foreground/50" />;
    default:
      return <Circle className="w-5 h-5 text-primary" />;
  }
};

const Roadmap = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        badge="Learning Path"
        title="DevOps"
        titleHighlight="Roadmap"
        description="Your structured path from beginner to expert DevOps engineer with hands-on skills and real-world tools."
      />

      {/* Timeline */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-primary via-secondary to-neon-pink" />

            {roadmapStages.map((stage, stageIndex) => (
              <motion.div
                key={stage.level}
                initial={{ opacity: 0, x: stageIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: stageIndex * 0.2 }}
                className={`relative mb-16 md:mb-24 ${
                  stageIndex % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Stage marker */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stageIndex * 0.2 + 0.3 }}
                  className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-${stage.color} glow-box z-10`}
                />

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${stageIndex % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="gradient-border p-6 rounded-xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-mono bg-${stage.color}/20 text-${stage.color} border border-${stage.color}/30`}>
                        {stage.level}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{stage.description}</p>

                    <div className="space-y-4">
                      {stage.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: stageIndex * 0.2 + skillIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="group p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              {skill.Icon ? (
                                <skill.Icon size={32} style={{ color: skill.iconColor }} />
                              ) : (
                                <div 
                                  className="w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold"
                                  style={{ backgroundColor: `${skill.iconColor}20`, color: skill.iconColor }}
                                >
                                  {skill.name.charAt(0)}
                                </div>
                              )}
                            </div>
                            
                            <div className="flex-grow">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {skill.name}
                                </h4>
                                {getStatusIcon(skill.status)}
                              </div>
                              
                              <div className="flex flex-wrap gap-2">
                                {skill.topics.map((topic) => (
                                  <span
                                    key={topic}
                                    className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground"
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Roadmap;
