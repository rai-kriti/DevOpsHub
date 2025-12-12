import { motion } from "framer-motion";
import { GitBranch, Boxes, Shield, BarChart3, Cloud, Workflow } from "lucide-react";

const concepts = [
  {
    icon: Workflow,
    title: "CI/CD Pipeline",
    description: "Automate your software delivery with continuous integration and continuous deployment practices.",
    color: "primary",
    features: ["Automated testing", "Continuous integration", "Automated deployment", "Release management"],
  },
  {
    icon: Boxes,
    title: "Containerization",
    description: "Package applications with all dependencies into portable containers for consistent environments.",
    color: "secondary",
    features: ["Docker containers", "Image registries", "Container orchestration", "Microservices"],
  },
  {
    icon: Cloud,
    title: "Infrastructure as Code",
    description: "Define and manage infrastructure through code for reproducible and version-controlled environments.",
    color: "neon-green",
    features: ["Terraform", "CloudFormation", "Pulumi", "Declarative configs"],
  },
  {
    icon: BarChart3,
    title: "Monitoring & Observability",
    description: "Gain deep insights into system performance with metrics, logs, and distributed tracing.",
    color: "neon-orange",
    features: ["Metrics collection", "Log aggregation", "Alerting", "Distributed tracing"],
  },
  {
    icon: Shield,
    title: "DevSecOps",
    description: "Integrate security practices throughout the development lifecycle for secure software delivery.",
    color: "neon-pink",
    features: ["Security scanning", "Vulnerability management", "Compliance", "Secret management"],
  },
  {
    icon: GitBranch,
    title: "GitOps",
    description: "Use Git as the single source of truth for declarative infrastructure and applications.",
    color: "neon-cyan",
    features: ["Version control", "Pull requests", "Automated sync", "Rollback capability"],
  },
];

const getColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    primary: "text-primary border-primary/30 bg-primary/10",
    secondary: "text-secondary border-secondary/30 bg-secondary/10",
    "neon-green": "text-neon-green border-neon-green/30 bg-neon-green/10",
    "neon-orange": "text-neon-orange border-neon-orange/30 bg-neon-orange/10",
    "neon-pink": "text-neon-pink border-neon-pink/30 bg-neon-pink/10",
    "neon-cyan": "text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10",
  };
  return colorMap[color] || colorMap.primary;
};

const DevOpsConcepts = () => {
  return (
    <section id="concepts" className="py-24 relative overflow-hidden bg-card/50">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-secondary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green font-mono text-sm mb-4">
            Core Concepts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">DevOps</span>{" "}
            <span className="text-gradient">Principles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding the fundamental concepts that drive modern DevOps practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map(({ icon: Icon, title, description, color, features }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300">
                {/* Icon container */}
                <div className={`inline-flex p-3 rounded-lg border ${getColorClass(color)} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </motion.li>
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

export default DevOpsConcepts;
