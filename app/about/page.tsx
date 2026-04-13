import type { Metadata } from "next";
import { getAbout } from "@/lib/queries";

export const metadata: Metadata = {
  title: "About | Fiony",
  description: "About the artist",
};

const defaultAbout = {
  bio: "Hello! I'm Fiony, an artist and creator based in Indonesia. I specialize in digital art, illustration, and visual storytelling.",
  skills: ["Digital Illustration", "Character Design", "Concept Art", "2D Animation", "Visual Development", "Graphic Design"],
  email: "hello@fiony.art",
};

export default async function AboutPage() {
  const data = await getAbout();
  const about = data ?? defaultAbout;

  return (
    <section className="min-h-screen px-6 pt-28 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
          About
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-secondary mb-6">{about.bio}</p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-secondary">
            {about.skills?.map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Contact</h2>
          <p className="text-secondary">
            For commissions, collaborations, or just to say hello, feel free to
            reach out at{" "}
            <a
              href={`mailto:${about.email}`}
              className="text-foreground underline underline-offset-4 hover:text-secondary"
            >
              {about.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
