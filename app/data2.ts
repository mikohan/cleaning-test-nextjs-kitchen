export const url = process.env.NEXT_PUBLIC_COMPANY_WEBSITE;
// export const url = process.env.NEXT_PUBLIC_COMPANY_WEBSITE_LOCAL;
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CleaningService",
      "@id": `${url}/#organization`,
      name: "Angara Streamers",
      image: [
        `${url}/images/couch/hero.jpg`,
        `${url}/images/couch/me-vasya.png`,
      ],
      url: url,
      telephone: "+12135987763",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "13163 fountain Park Dr.",
        addressLocality: "Playa Vista",
        addressRegion: "CA",
        postalCode: "90094",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.9767616,
        longitude: -118.4111872,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "29",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "07:00",
          closes: "22:00",
        },
      ],
    },
  ],
};
