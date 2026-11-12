import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com";

  const routes = [
    "",
    "/about",
    "/services-&-products",
    "/Investment-Information",
    "/crypto-information",
    "/blog-&-news",
    "/business-sectors",
    "/gallery-&-testimonials",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}