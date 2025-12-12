import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  SiDocker, 
  SiKubernetes, 
  SiJenkins, 
  SiGit, 
  SiTerraform, 
  SiAnsible,
  SiAmazonwebservices,
  SiGithubactions
} from "react-icons/si";

const floatingIcons = [
  { Icon: SiDocker, color: "#2496ED", delay: 0, x: -200, y: -100 },
  { Icon: SiKubernetes, color: "#326CE5", delay: 0.2, x: 200, y: -80 },
  { Icon: SiJenkins, color: "#D24939", delay: 0.4, x: -250, y: 50 },
  { Icon: SiTerraform, color: "#7B42BC", delay: 0.6, x: 280, y: 100 },
  { Icon: SiAnsible, color: "#EE0000", delay: 0.8, x: -180, y: 150 },
  { Icon: SiGithubactions, color: "#2088FF", delay: 1, x: 220, y: -150 },
];

const DevOpsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Floating DevOps icons */}
      {floatingIcons.map(({ Icon, color, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{ 
            opacity: { delay, duration: 0.5 },
            scale: { delay, duration: 0.5 },
            y: { delay: delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ 
            left: `calc(50% + ${x}px)`, 
            top: `calc(50% + ${y}px)`,
          }}
          whileHover={{ scale: 1.2, opacity: 1 }}
        >
          <Icon size={48} style={{ color }} className="drop-shadow-lg" />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm">
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            Automate • Deploy • Scale
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-foreground">All About</span>
          <br />
          <span className="text-gradient glow-text">DevOps</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Master the art of continuous integration, continuous delivery, and 
          infrastructure automation with modern DevOps tools and practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/tools"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 glow-box"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Tools
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </Link>
          <Link
            to="/concepts"
            className="px-8 py-4 border border-muted-foreground/30 text-foreground font-semibold rounded-lg transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
          >
            Learn Concepts
          </Link>
        </motion.div>

        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsHero;
