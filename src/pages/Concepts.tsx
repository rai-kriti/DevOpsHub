import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { 
  GitBranch, 
  Boxes, 
  Shield, 
  BarChart3, 
  Cloud, 
  Workflow,
  Server,
  RefreshCw,
  Zap,
  Users,
  Target,
  Layers
} from "lucide-react";

const concepts = [
  {
    id: "cicd",
    icon: Workflow,
    title: "CI/CD Pipeline",
    shortDesc: "Continuous Integration & Continuous Deployment",
    color: "primary",
    fullDescription: "CI/CD is the backbone of modern software delivery. Continuous Integration ensures that code changes are automatically tested and merged frequently, while Continuous Deployment automates the release process to production environments.",
    benefits: [
      "Faster time to market with automated deployments",
      "Reduced human errors through automation",
      "Immediate feedback on code quality",
      "Consistent and repeatable release process"
    ],
    practices: [
      "Automated testing at every stage",
      "Feature flags for safe rollouts",
      "Blue-green deployments",
      "Canary releases"
    ],
    tools: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "ArgoCD"]
  },
  {
    id: "containerization",
    icon: Boxes,
    title: "Containerization",
    shortDesc: "Portable, isolated application environments",
    color: "secondary",
    fullDescription: "Containerization packages applications with all their dependencies into standardized units called containers. This ensures consistency across development, testing, and production environments.",
    benefits: [
      "Consistent environments across the lifecycle",
      "Efficient resource utilization",
      "Rapid scaling and deployment",
      "Microservices architecture enablement"
    ],
    practices: [
      "One process per container",
      "Immutable container images",
      "Layer optimization",
      "Security scanning"
    ],
    tools: ["Docker", "Podman", "containerd", "CRI-O"]
  },
  {
    id: "iac",
    icon: Cloud,
    title: "Infrastructure as Code",
    shortDesc: "Programmable, version-controlled infrastructure",
    color: "neon-purple",
    fullDescription: "IaC treats infrastructure provisioning as software development. Infrastructure is defined in code files, version controlled, and automatically provisioned, ensuring reproducibility and eliminating configuration drift.",
    benefits: [
      "Version-controlled infrastructure changes",
      "Reproducible environments",
      "Reduced provisioning time",
      "Self-documenting infrastructure"
    ],
    practices: [
      "Declarative configurations",
      "Modular and reusable code",
      "State management",
      "Drift detection"
    ],
    tools: ["Terraform", "Pulumi", "CloudFormation", "Ansible", "Chef"]
  },
  {
    id: "monitoring",
    icon: BarChart3,
    title: "Observability",
    shortDesc: "Deep insights into system behavior",
    color: "neon-orange",
    fullDescription: "Observability goes beyond traditional monitoring to provide deep insights into system behavior through metrics, logs, and traces. It enables teams to understand complex distributed systems and quickly identify issues.",
    benefits: [
      "Proactive issue detection",
      "Faster mean time to resolution",
      "Capacity planning insights",
      "Performance optimization data"
    ],
    practices: [
      "The three pillars: metrics, logs, traces",
      "SLOs and SLIs definition",
      "Alerting strategies",
      "Runbook automation"
    ],
    tools: ["Prometheus", "Grafana", "Elasticsearch", "Jaeger", "Datadog"]
  },
  {
    id: "devsecops",
    icon: Shield,
    title: "DevSecOps",
    shortDesc: "Security integrated into every stage",
    color: "neon-pink",
    fullDescription: "DevSecOps integrates security practices throughout the entire software development lifecycle. Security is shifted left, becoming everyone's responsibility rather than an afterthought.",
    benefits: [
      "Early vulnerability detection",
      "Reduced security debt",
      "Compliance automation",
      "Faster security remediation"
    ],
    practices: [
      "Shift-left security testing",
      "Automated vulnerability scanning",
      "Secret management",
      "Policy as code"
    ],
    tools: ["Vault", "Snyk", "SonarQube", "Trivy", "OWASP ZAP"]
  },
  {
    id: "gitops",
    icon: GitBranch,
    title: "GitOps",
    shortDesc: "Git as the single source of truth",
    color: "neon-cyan",
    fullDescription: "GitOps uses Git repositories as the source of truth for declarative infrastructure and applications. Changes are made through pull requests, and automated systems ensure the live state matches the desired state in Git.",
    benefits: [
      "Complete audit trail of changes",
      "Easy rollback capabilities",
      "Increased developer productivity",
      "Consistent deployments"
    ],
    practices: [
      "Declarative configurations",
      "Pull-based deployments",
      "Automated reconciliation",
      "Branch-based environments"
    ],
    tools: ["ArgoCD", "Flux", "Jenkins X", "Tekton"]
  },
  {
    id: "microservices",
    icon: Layers,
    title: "Microservices",
    shortDesc: "Distributed, independently deployable services",
    color: "neon-green",
    fullDescription: "Microservices architecture breaks down applications into small, loosely coupled services that can be developed, deployed, and scaled independently. Each service owns its data and communicates through well-defined APIs.",
    benefits: [
      "Independent scaling of services",
      "Technology flexibility per service",
      "Faster deployment cycles",
      "Improved fault isolation"
    ],
    practices: [
      "Domain-driven design",
      "API-first development",
      "Service mesh implementation",
      "Event-driven communication"
    ],
    tools: ["Kubernetes", "Istio", "Kong", "RabbitMQ", "Kafka"]
  },
  {
    id: "sre",
    icon: Target,
    title: "Site Reliability Engineering",
    shortDesc: "Applying software engineering to operations",
    color: "primary",
    fullDescription: "SRE applies software engineering principles to infrastructure and operations problems. It focuses on creating scalable and highly reliable software systems through automation, measurement, and continuous improvement.",
    benefits: [
      "Quantified reliability targets",
      "Balanced innovation and stability",
      "Reduced operational toil",
      "Data-driven decision making"
    ],
    practices: [
      "Error budgets",
      "SLOs/SLIs/SLAs",
      "Blameless postmortems",
      "Toil reduction"
    ],
    tools: ["Prometheus", "PagerDuty", "Statuspage", "Terraform"]
  },
];

const Concepts = () => {
  const [selectedConcept, setSelectedConcept] = useState(concepts[0]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        badge="Core Principles"
        title="DevOps"
        titleHighlight="Concepts"
        description="Deep dive into the fundamental principles and practices that define modern DevOps culture and methodology."
      />

      {/* Interactive Concepts Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Concept List */}
            <div className="lg:col-span-1 space-y-3">
              {concepts.map((concept, index) => {
                const Icon = concept.icon;
                return (
                  <motion.button
                    key={concept.id}
                    onClick={() => setSelectedConcept(concept)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-4 ${
                      selectedConcept.id === concept.id
                        ? "gradient-border bg-card glow-box"
                        : "border border-border bg-card/50 hover:border-primary/30"
                    }`}
                  >
                    <div className={`p-2 rounded-lg bg-${concept.color}/20`}>
                      <Icon className={`w-5 h-5 text-${concept.color}`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${selectedConcept.id === concept.id ? "text-primary" : "text-foreground"}`}>
                        {concept.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{concept.shortDesc}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Concept Detail */}
            <motion.div
              key={selectedConcept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="gradient-border p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-${selectedConcept.color}/20 border border-${selectedConcept.color}/30`}>
                    <selectedConcept.icon className={`w-8 h-8 text-${selectedConcept.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{selectedConcept.title}</h2>
                    <p className="text-muted-foreground">{selectedConcept.shortDesc}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {selectedConcept.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Benefits */}
                  <div className="p-5 rounded-lg bg-background border border-border">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-neon-green" />
                      Key Benefits
                    </h3>
                    <ul className="space-y-2">
                      {selectedConcept.benefits.map((benefit, idx) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-green mt-2 flex-shrink-0" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Best Practices */}
                  <div className="p-5 rounded-lg bg-background border border-border">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Best Practices
                    </h3>
                    <ul className="space-y-2">
                      {selectedConcept.practices.map((practice, idx) => (
                        <motion.li
                          key={practice}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {practice}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Related Tools */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Related Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedConcept.tools.map((tool, idx) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium border border-border hover:border-primary/50 transition-colors cursor-pointer"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Concepts;
