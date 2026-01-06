export const url = process.env.NEXT_PUBLIC_COMPANY_WEBSITE;
// export const url = process.env.NEXT_PUBLIC_COMPANY_WEBSITE_LOCAL;
// export const jsonLd = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "CleaningService",
//       "@id": `${url}/#organization`,
//       name: "Angara Streamers",
//       image: [
//         `${url}/images/couch/hero.jpg`,
//         `${url}/images/couch/me-vasya.png`,
//       ],
//       url: url,
//       telephone: "+12135987763",
//       priceRange: "$$",
//       address: {
//         "@type": "PostalAddress",
//         streetAddress: "13163 fountain Park Dr.",
//         addressLocality: "Playa Vista",
//         addressRegion: "CA",
//         postalCode: "90094",
//         addressCountry: "US",
//       },
//       geo: {
//         "@type": "GeoCoordinates",
//         latitude: 33.9767616,
//         longitude: -118.4111872,
//       },
//       openingHoursSpecification: [
//         {
//           "@type": "OpeningHoursSpecification",
//           dayOfWeek: [
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//             "Sunday",
//           ],
//           opens: "07:00",
//           closes: "22:00",
//         },
//       ],
//     },
//   ],
// };
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${url}/#organization`,
      additionalType: "https://schema.org/ProfessionalService",
      name: "Angara Streamers",
      alternateName: "Angara Cleaning",
      description:
        "Professional deep cleaning and upholstery cleaning services in Los Angeles. We provide thorough, detailed cleaning that goes beyond surface level.",
      image: [
        `${url}/images/couch/hero.jpg`,
        `${url}/images/couch/me-vasya.png`,
      ],
      logo: {
        "@type": "ImageObject",
        url: `${url}/logo.png`,
      },
      url: url,
      telephone: "+12135987763",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "13163 Fountain Park Dr.",
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
      areaServed: [
        {
          "@type": "City",
          name: "Los Angeles",
        },
        {
          "@type": "City",
          name: "Playa Vista",
        },
        {
          "@type": "City",
          name: "El Segundo",
        },
      ],
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
      sameAs: [
        // Add your social media and review profiles
        // "https://www.facebook.com/angaracleaning",
        // "https://www.instagram.com/angaracleaning",
        // "https://www.yelp.com/biz/angara-streamers",
      ],
    },
    {
      "@type": "Service",
      "@id": `${url}/#service`,
      serviceType: "Deep Cleaning Service",
      name: "Professional Deep Cleaning",
      description:
        "Comprehensive deep cleaning service that includes detailed cleaning of all surfaces, baseboards, appliances, and hard-to-reach areas.",
      provider: {
        "@id": `${url}/#organization`,
      },
      areaServed: {
        "@type": "State",
        name: "California",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cleaning Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Deep Cleaning",
              description:
                "Thorough cleaning of entire home including hard-to-reach areas",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Upholstery Cleaning",
              description:
                "Professional furniture and upholstery steam cleaning",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      url: url,
      name: "Angara Streamers",
      publisher: {
        "@id": `${url}/#organization`,
      },
    },
  ],
};
