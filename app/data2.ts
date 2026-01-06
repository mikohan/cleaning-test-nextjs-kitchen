// export const url = process.env.NEXT_PUBLIC_COMPANY_WEBSITE;
export const url = process.env.NEXT_PUBLIC_COMPANY_WEBSITE_LOCAL;
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Cleaning Service",
  image: [`${url}/images/couch/hero.jpg`, `${url}/images/couch/me-vasya.png`],
  name: "Angara Steamers",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13163 fountain Park Dr.",
    addressLocality: "Play Vista",
    addressRegion: "CA",
    postalCode: "90094",
    addressCountry: "US",
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 4.9,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: "Vlad Vostrikov",
    },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.9767616,
    longitude: -118.4111872,
  },
  url: url,
  telephone: "+12135987763",
  servesCuisine: "",
  priceRange: "$$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday"],
      opens: "7:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday"],
      opens: "7:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "7:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "7:00",
      closes: "22:00",
    },
  ],
};
