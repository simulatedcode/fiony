import { client } from "./sanity";

export async function getAbout() {
  return client.fetch(`*[_type == "about"][0]{
    bio,
    "skills": skills[]->title,
    email
  }`);
}

export async function getProjects() {
  return client.fetch(`*[_type == "project"] | order(year desc) {
    _id,
    title,
    category,
    year,
    description,
    "image": image.asset->url
  }`);
}

export async function getExperience() {
  return client.fetch(`*[_type == "experience"] | order(startDate desc) {
    _id,
    role,
    company,
    startDate,
    endDate,
    description
  }`);
}

export async function getEducation() {
  return client.fetch(`*[_type == "education"] | order(year desc) {
    _id,
    degree,
    school,
    year
  }`);
}
