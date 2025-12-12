import { motion } from "framer-motion";
import { Code, GitBranch, TestTube, Package, Rocket, BarChart } from "lucide-react";

const pipelineSteps = [
  { icon: Code, label: "Code", description: "Write & commit code" },
  { icon: GitBranch, label: "Version", description: "Git version control" },
  { icon: TestTube, label: "Test", description: "Automated testing" },
  { icon: Package, label: "Build", description: "Build artifacts" },
  { icon: Rocket, label: "Deploy", description: "Release to production" },
  { icon: BarChart, label: "Monitor", description: "Observe & iterate" },
];

const DevOpsPipeline = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-neon-orange/30 bg-neon-orange/10 text-neon-orange font-mono text-sm mb-4">
            Continuous Delivery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">The</span>{" "}
            <span className="text-gradient">Pipeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From code to production — the journey of modern software delivery
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-y-1/2" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {pipelineSteps.map(({ icon: Icon, label, description }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Animated arrow between steps - hidden on smaller screens */}
                {index < pipelineSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                    className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary z-10"
                  >
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-4"
                  >
                    {/* Glowing ring */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 transition-colors" />
                    <div className="relative w-16 h-16 rounded-full border-2 border-primary/50 bg-background flex items-center justify-center group-hover:border-primary transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    {/* Step number */}
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </motion.div>

                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {label}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Infinity loop symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-4 px-6 py-3 rounded-full border border-primary/30 bg-primary/5">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-3xl"
            >
              ∞
            </motion.span>
            <span className="text-sm text-muted-foreground font-mono">
              Continuous Loop
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsPipeline;
