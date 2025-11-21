import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import TemplateLibrary from "@/components/TemplateLibrary";
import AssignmentBuilder from "@/components/AssignmentBuilder";
import StudentEditor from "@/components/StudentEditor";
import TeacherDashboard from "@/components/TeacherDashboard";
import IntegrityAnalytics from "@/components/IntegrityAnalytics";
import DocsTeaser from "@/components/DocsTeaser";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <TemplateLibrary />
        <AssignmentBuilder />
        <StudentEditor />
        <TeacherDashboard />
        <IntegrityAnalytics />
        <DocsTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
