import { motion } from "framer-motion";
import { 
  SiDocker, 
  SiKubernetes, 
  SiJenkins, 
  SiGit, 
  SiTerraform, 
  SiAnsible,
  SiAmazonwebservices,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiNginx,
  SiLinux,
  SiHelm,
  SiArgo,
  SiVault,
  SiCircleci
} from "react-icons/si";

const tools = [
  { 
    Icon: SiDocker, 
    name: "Docker", 
    color: "#2496ED", 
    description: "Containerization platform for building, shipping, and running applications" 
  },
  { 
    Icon: SiKubernetes, 
    name: "Kubernetes", 
    color: "#326CE5", 
    description: "Container orchestration for automating deployment, scaling, and management" 
  },
  { 
    Icon: SiJenkins, 
    name: "Jenkins", 
    color: "#D24939", 
    description: "Open-source automation server for CI/CD pipelines" 
  },
  { 
    Icon: SiGit, 
    name: "Git", 
    color: "#F05032", 
    description: "Distributed version control system for tracking code changes" 
  },
  { 
    Icon: SiTerraform, 
    name: "Terraform", 
    color: "#7B42BC", 
    description: "Infrastructure as Code tool for building and managing cloud resources" 
  },
  { 
    Icon: SiAnsible, 
    name: "Ansible", 
    color: "#EE0000", 
    description: "Automation platform for configuration management and deployment" 
  },
  { 
    Icon: SiAmazonwebservices, 
    name: "AWS", 
    color: "#FF9900", 
    description: "Comprehensive cloud computing platform with 200+ services" 
  },
  { 
    Icon: SiGithubactions, 
    name: "GitHub Actions", 
    color: "#2088FF", 
    description: "CI/CD platform integrated directly into GitHub repositories" 
  },
  { 
    Icon: SiPrometheus, 
    name: "Prometheus", 
    color: "#E6522C", 
    description: "Monitoring and alerting toolkit for cloud-native environments" 
  },
  { 
    Icon: SiGrafana, 
    name: "Grafana", 
    color: "#F46800", 
    description: "Analytics and visualization platform for metrics and logs" 
  },
  { 
    Icon: SiNginx, 
    name: "NGINX", 
    color: "#009639", 
    description: "High-performance web server and reverse proxy" 
  },
  { 
    Icon: SiLinux, 
    name: "Linux", 
    color: "#FCC624", 
    description: "Open-source operating system powering most servers worldwide" 
  },
  { 
    Icon: SiHelm, 
    name: "Helm", 
    color: "#0F1689", 
    description: "Package manager for Kubernetes applications" 
  },
  { 
    Icon: SiArgo, 
    name: "ArgoCD", 
    color: "#EF7B4D", 
    description: "GitOps continuous delivery tool for Kubernetes" 
  },
  { 
    Icon: SiVault, 
    name: "Vault", 
    color: "#FFD814", 
    description: "Secrets management and data protection tool" 
  },
  { 
    Icon: SiCircleci, 
    name: "CircleCI", 
    color: "#343434", 
    description: "Continuous integration and delivery platform" 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

const DevOpsTools = () => {
  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-secondary/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-mono text-sm mb-4">
            Tools & Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">The DevOps</span>{" "}
            <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Master these essential tools that power modern software delivery pipelines
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {tools.map(({ Icon, name, color, description }, index) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative gradient-border p-6 rounded-xl cursor-pointer overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: `${color}20` }}
              />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <Icon 
                    size={48} 
                    style={{ color }} 
                    className="transition-all duration-300 group-hover:drop-shadow-lg"
                  />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsTools;
