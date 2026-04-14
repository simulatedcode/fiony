import { client } from "@/sanity/lib/client";

export async function getProjects() {
  return await client.fetch(`*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    category,
    year,
    description,
    "image": image.asset->url
  }`);
}

export async function getExperience() {
  return await client.fetch(`*[_type == "experience"] | order(startDate desc) {
    _id,
    role,
    company,
    startDate,
    endDate,
    description
  }`);
}

export async function getEducation() {
  return await client.fetch(`*[_type == "education"] | order(year desc) {
    _id,
    degree,
    school,
    year
  }`);
}

export async function getAbout() {
  return await client.fetch(`*[_type == "about"][0] {
    _id,
    bio,
    skills,
    email
  }`);
}
