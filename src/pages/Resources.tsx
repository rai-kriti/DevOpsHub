import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Award, 
  ExternalLink,
  Star,
  Clock,
  Users
} from "lucide-react";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAmazonwebservices,
  SiLinux,
  SiGit,
} from "react-icons/si";

const resourceCategories = [
  {
    title: "Official Documentation",
    icon: BookOpen,
    color: "primary",
    resources: [
      { name: "Docker Docs", Icon: SiDocker, iconColor: "#2496ED", url: "https://docs.docker.com", description: "Complete Docker documentation with tutorials and references" },
      { name: "Kubernetes Docs", Icon: SiKubernetes, iconColor: "#326CE5", url: "https://kubernetes.io/docs", description: "Official Kubernetes documentation and guides" },
      { name: "Terraform Docs", Icon: SiTerraform, iconColor: "#7B42BC", url: "https://terraform.io/docs", description: "Terraform language and provider documentation" },
      { name: "AWS Documentation", Icon: SiAmazonwebservices, iconColor: "#FF9900", url: "https://docs.aws.amazon.com", description: "Comprehensive AWS service documentation" },
    ]
  },
  {
    title: "Video Courses",
    icon: Video,
    color: "secondary",
    resources: [
      { name: "Docker Mastery", platform: "Udemy", duration: "22 hours", rating: 4.8, description: "From development to production with Docker and Kubernetes" },
      { name: "Kubernetes for Developers", platform: "Coursera", duration: "30 hours", rating: 4.7, description: "Build cloud-native applications with Kubernetes" },
      { name: "DevOps with AWS", platform: "A Cloud Guru", duration: "40 hours", rating: 4.9, description: "Master AWS DevOps tools and practices" },
      { name: "Terraform Deep Dive", platform: "Pluralsight", duration: "15 hours", rating: 4.6, description: "Infrastructure as Code with Terraform" },
    ]
  },
  {
    title: "Certifications",
    icon: Award,
    color: "neon-green",
    resources: [
      { name: "CKA - Certified Kubernetes Administrator", provider: "CNCF", difficulty: "Intermediate", description: "Demonstrate your ability to do basic installation and configuring of Kubernetes clusters" },
      { name: "AWS Solutions Architect", provider: "Amazon", difficulty: "Professional", description: "Design distributed systems on AWS infrastructure" },
      { name: "Docker Certified Associate", provider: "Docker", difficulty: "Intermediate", description: "Validate your Docker skills and knowledge" },
      { name: "HashiCorp Terraform Associate", provider: "HashiCorp", difficulty: "Beginner", description: "Foundational knowledge of Terraform" },
    ]
  },
  {
    title: "Cheat Sheets",
    icon: FileText,
    color: "neon-orange",
    resources: [
      { name: "Docker Commands", Icon: SiDocker, iconColor: "#2496ED", items: ["docker run", "docker build", "docker compose", "docker network"] },
      { name: "Kubernetes kubectl", Icon: SiKubernetes, iconColor: "#326CE5", items: ["kubectl get", "kubectl apply", "kubectl logs", "kubectl exec"] },
      { name: "Git Commands", Icon: SiGit, iconColor: "#F05032", items: ["git rebase", "git cherry-pick", "git stash", "git bisect"] },
      { name: "Linux Essentials", Icon: SiLinux, iconColor: "#FCC624", items: ["grep", "awk", "sed", "find", "xargs"] },
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Resources = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        badge="Learning Hub"
        title="DevOps"
        titleHighlight="Resources"
        description="Curated collection of documentation, courses, certifications, and quick references to accelerate your DevOps journey."
      />

      {/* Resources Sections */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 space-y-20">
          {resourceCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-${category.color}/20 border border-${category.color}/30`}>
                    <CategoryIcon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{category.title}</h2>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {category.resources.map((resource, index) => (
                    <motion.div
                      key={resource.name}
                      variants={itemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="group gradient-border p-5 rounded-xl cursor-pointer"
                    >
                      {/* Documentation type */}
                      {'url' in resource && (
                        <>
                          <div className="flex items-center gap-3 mb-3">
                            {resource.Icon && <resource.Icon size={28} style={{ color: resource.iconColor }} />}
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {resource.name}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                          <a 
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            Visit docs <ExternalLink className="w-3 h-3" />
                          </a>
                        </>
                      )}

                      {/* Course type */}
                      {'platform' in resource && (
                        <>
                          <span className="text-xs font-mono text-muted-foreground">{resource.platform}</span>
                          <h3 className="font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                            {resource.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {resource.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-neon-orange" /> {resource.rating}
                            </span>
                          </div>
                        </>
                      )}

                      {/* Certification type */}
                      {'provider' in resource && (
                        <>
                          <span className="text-xs font-mono text-muted-foreground">{resource.provider}</span>
                          <h3 className="font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                            {resource.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                            resource.difficulty === 'Beginner' ? 'bg-neon-green/20 text-neon-green' :
                            resource.difficulty === 'Intermediate' ? 'bg-primary/20 text-primary' :
                            'bg-neon-pink/20 text-neon-pink'
                          }`}>
                            {resource.difficulty}
                          </span>
                        </>
                      )}

                      {/* Cheat sheet type */}
                      {'items' in resource && (
                        <>
                          <div className="flex items-center gap-3 mb-3">
                            {resource.Icon && <resource.Icon size={24} style={{ color: resource.iconColor }} />}
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {resource.name}
                            </h3>
                          </div>
                          <div className="space-y-1.5">
                            {resource.items.map((item) => (
                              <code key={item} className="block text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                                {item}
                              </code>
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 relative overflow-hidden bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 p-3 rounded-full bg-neon-cyan/20 border border-neon-cyan/30 mb-6">
              <Users className="w-5 h-5 text-neon-cyan" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Join the</span>{" "}
              <span className="text-gradient">Community</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect with fellow DevOps engineers, share knowledge, and stay updated with the latest trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Reddit", "Discord", "Slack", "Twitter"].map((platform, idx) => (
                <motion.button
                  key={platform}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:border-primary/50 hover:text-primary transition-all"
                >
                  {platform}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Resources;
