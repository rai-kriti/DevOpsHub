import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
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
  SiCircleci,
  SiGitlab,
  SiGooglecloud,
  SiElasticsearch,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiRabbitmq,
} from "react-icons/si";

const categories = [
  { id: "all", name: "All Tools", color: "primary" },
  { id: "containerization", name: "Containerization", color: "secondary" },
  { id: "cicd", name: "CI/CD", color: "neon-orange" },
  { id: "iac", name: "Infrastructure as Code", color: "neon-purple" },
  { id: "monitoring", name: "Monitoring", color: "neon-green" },
  { id: "cloud", name: "Cloud Platforms", color: "neon-cyan" },
  { id: "databases", name: "Databases", color: "neon-pink" },
];

const tools = [
  { Icon: SiDocker, name: "Docker", color: "#2496ED", category: "containerization", description: "Leading containerization platform for building, shipping, and running distributed applications in isolated environments." },
  { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5", category: "containerization", description: "Production-grade container orchestration for automating deployment, scaling, and management of containerized applications." },
  { Icon: SiHelm, name: "Helm", color: "#0F1689", category: "containerization", description: "The package manager for Kubernetes, simplifying application deployment and management." },
  { Icon: SiJenkins, name: "Jenkins", color: "#D24939", category: "cicd", description: "The most widely-adopted open source automation server for building CI/CD pipelines." },
  { Icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF", category: "cicd", description: "Automate workflows directly from your GitHub repository with powerful CI/CD capabilities." },
  { Icon: SiGitlab, name: "GitLab CI", color: "#FC6D26", category: "cicd", description: "Complete DevOps platform with built-in CI/CD, security testing, and deployment pipelines." },
  { Icon: SiCircleci, name: "CircleCI", color: "#343434", category: "cicd", description: "Cloud-native continuous integration and delivery platform for rapid software development." },
  { Icon: SiArgo, name: "ArgoCD", color: "#EF7B4D", category: "cicd", description: "Declarative GitOps continuous delivery tool for Kubernetes applications." },
  { Icon: SiTerraform, name: "Terraform", color: "#7B42BC", category: "iac", description: "Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently." },
  { Icon: SiAnsible, name: "Ansible", color: "#EE0000", category: "iac", description: "Simple, agentless automation platform for configuration management and application deployment." },
  { Icon: SiVault, name: "Vault", color: "#FFD814", category: "iac", description: "Securely manage secrets and protect sensitive data with identity-based security." },
  { Icon: SiPrometheus, name: "Prometheus", color: "#E6522C", category: "monitoring", description: "Open-source monitoring and alerting toolkit designed for reliability and scalability." },
  { Icon: SiGrafana, name: "Grafana", color: "#F46800", category: "monitoring", description: "Multi-platform analytics and interactive visualization for metrics, logs, and traces." },
  { Icon: SiElasticsearch, name: "Elasticsearch", color: "#005571", category: "monitoring", description: "Distributed search and analytics engine for all types of data including logs and metrics." },
  { Icon: SiAmazonwebservices, name: "AWS", color: "#FF9900", category: "cloud", description: "World's most comprehensive cloud platform with 200+ fully featured services." },
  { Icon: SiGooglecloud, name: "Google Cloud", color: "#4285F4", category: "cloud", description: "Suite of cloud computing services running on Google's infrastructure." },
  { Icon: SiLinux, name: "Linux", color: "#FCC624", category: "cloud", description: "The backbone of cloud infrastructure, powering the majority of servers worldwide." },
  { Icon: SiNginx, name: "NGINX", color: "#009639", category: "cloud", description: "High-performance web server, reverse proxy, and load balancer." },
  { Icon: SiGit, name: "Git", color: "#F05032", category: "cicd", description: "Distributed version control system for tracking changes in source code." },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1", category: "databases", description: "Powerful, open source object-relational database system with proven reliability." },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "databases", description: "Document-oriented NoSQL database for modern applications with flexible schemas." },
  { Icon: SiRedis, name: "Redis", color: "#DC382D", category: "databases", description: "In-memory data structure store used as database, cache, and message broker." },
  { Icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600", category: "databases", description: "Open source message broker for reliable messaging between distributed systems." },
];

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTools = activeCategory === "all" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        badge="DevOps Toolkit"
        title="Essential"
        titleHighlight="Tools"
        description="Explore the comprehensive collection of tools that power modern DevOps workflows and cloud-native applications."
      />

      {/* Category Filter */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground glow-box"
                    : "border border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredTools.map(({ Icon, name, color, description, category }, index) => (
              <motion.div
                key={name}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative gradient-border p-6 rounded-xl cursor-pointer overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: `${color}15` }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 inline-block"
                  >
                    <Icon size={56} style={{ color }} className="drop-shadow-lg" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {name}
                  </h3>
                  
                  <span className="inline-block px-2 py-1 rounded text-xs font-mono bg-muted text-muted-foreground mb-3">
                    {categories.find(c => c.id === category)?.name}
                  </span>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Tools;
