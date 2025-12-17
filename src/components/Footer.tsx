import { motion } from "framer-motion";
import { SiDocker, SiKubernetes, SiGit, SiTerraform } from "react-icons/si";
import { Terminal, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-primary/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
              <Terminal className="w-6 h-6 text-primary" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              DevOps<span className="text-primary">Hub</span>
            </span>
          </motion.div>

          {/* Tool icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6 mb-8"
          >
            {[SiDocker, SiKubernetes, SiGit, SiTerraform].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <Icon size={24} />
              </motion.div>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mb-8 font-mono text-sm"
          >
            <span className="text-primary">$</span> automate all the things
          </motion.p>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />
            <span>for the DevOps community</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xs text-muted-foreground/50 mt-4"
          >
            © {new Date().getFullYear()}Kriti DevOps Hub. Automate • Deploy • Scale
          </motion.p>

          {/* test branch check  */}
        </div>
        {/* experiment edits */}
      </div>
    </footer>
  );
};

export default Footer;
