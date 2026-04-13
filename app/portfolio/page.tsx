import type { Metadata } from "next";
import { getProjects, getExperience, getEducation } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Portfolio | Fiony",
  description: "Artist portfolio and CV",
};

const defaultProjects = [
  {
    id: "1",
    title: "Project Alpha",
    category: "Digital Illustration",
    year: "2024",
    description: "A series of digital illustrations exploring themes of nature and technology.",
  },
  {
    id: "2",
    title: "Character Collective",
    category: "Character Design",
    year: "2024",
    description: "Original character designs for various clients and personal projects.",
  },
];

const defaultExperience = [
  {
    id: "1",
    role: "Freelance Artist",
    company: "Self-employed",
    period: "2022 - Present",
    description: "Creating illustrations, character designs, and concept art for clients worldwide.",
  },
];

const defaultEducation = [
  {
    id: "1",
    degree: "Bachelor of Fine Arts",
    school: "Art Institute",
    year: "2020",
  },
];

export default async function PortfolioPage() {
  const [projects, experience, education] = await Promise.all([
    getProjects(),
    getExperience(),
    getEducation(),
  ]);

  return (
    <section className="min-h-screen px-6 pt-28 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Portfolio
        </h1>
        <p className="text-secondary text-lg mb-16">
          A selection of my work and professional journey
        </p>

        <h2 className="text-2xl font-semibold mb-8">Selected Works</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {(projects?.length ? projects : defaultProjects).map((project: any) => (
            <article
              key={project._id || project.id}
              className="border border-accent p-6 hover:border-secondary transition-colors"
            >
              <p className="text-xs text-secondary uppercase tracking-wider mb-2">
                {project.category} • {project.year}
              </p>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-secondary text-sm">{project.description}</p>
            </article>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-8">Experience</h2>
        <div className="space-y-8 mb-16">
          {(experience?.length ? experience : defaultExperience).map((job: any, index: number) => {
            const period = job.startDate && job.endDate 
              ? `${job.startDate} - ${job.endDate}` 
              : job.startDate 
                ? `${job.startDate} - Present` 
                : job.period || "Present";
            return (
              <div key={job._id || index} className="flex flex-col md:flex-row md:gap-8">
                <p className="text-sm text-secondary w-32 shrink-0">{period}</p>
                <div>
                  <h3 className="text-lg font-medium">{job.role}</h3>
                  <p className="text-secondary text-sm mb-1">{job.company}</p>
                  <p className="text-secondary text-sm">{job.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-2xl font-semibold mb-8">Education</h2>
        <div className="space-y-4">
          {(education?.length ? education : defaultEducation).map((edu: any, index: number) => (
            <div key={edu._id || index} className="flex flex-col md:flex-row md:gap-8">
              <p className="text-sm text-secondary w-32 shrink-0">{edu.year}</p>
              <div>
                <h3 className="text-lg font-medium">{edu.degree}</h3>
                <p className="text-secondary text-sm">{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
