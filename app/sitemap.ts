import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.amanahscholars.org",
      lastModified: new Date(),
    },
    {
      url: "https://www.amanahscholars.org/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.amanahscholars.org/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.amanahscholars.org/get-involved",
      lastModified: new Date(),
    },
  ]
}