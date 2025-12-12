import Navbar from "@/components/Navbar";
import DevOpsHero from "@/components/DevOpsHero";
import DevOpsTools from "@/components/DevOpsTools";
import DevOpsPipeline from "@/components/DevOpsPipeline";
import DevOpsConcepts from "@/components/DevOpsConcepts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <DevOpsHero />
      <DevOpsTools />
      <DevOpsPipeline />
      <DevOpsConcepts />
      <Footer />
    </main>
  );
};

export default Index;
