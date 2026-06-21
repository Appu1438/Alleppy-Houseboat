import { Helmet } from "react-helmet-async";

export default function HomeSEO() {
  return (
    <Helmet>
      <title>
        Alleppey Houseboats | Luxury Houseboat Booking in Alappuzha Kerala
      </title>

      <meta
        name="description"
        content="Book the best Alleppey Houseboats in Alappuzha, Kerala. Luxury, Deluxe, Premium & Honeymoon Houseboat Packages. Overnight Cruises, Day Cruises & Family Houseboats at Best Prices."
      />

      <meta
        name="keywords"
        content="alleppey houseboats, alleppey houseboat booking, alappuzha houseboats, houseboat kerala, luxury houseboat alleppey, premium houseboat alleppey, honeymoon houseboat alleppey, overnight houseboat alleppey, family houseboat alleppey, day cruise alleppey, backwater cruise kerala, kerala houseboats"
      />

      <link
        rel="canonical"
        href="https://alleppey-houseboats.starkcabs.in/"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Alleppey Houseboats | Luxury Houseboat Booking in Kerala"
      />
      <meta
        property="og:description"
        content="Luxury, Deluxe & Honeymoon Houseboat Packages in Alleppey. Explore Kerala Backwaters with Premium Houseboats."
      />
      <meta
        property="og:url"
        content="https://alleppey-houseboats.starkcabs.in/"
      />
      <meta
        property="og:image"
        content="https://alleppey-houseboats.starkcabs.in/logo.png"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Alleppey Houseboats | Luxury Houseboat Booking in Kerala"
      />
      <meta
        name="twitter:description"
        content="Book Luxury, Deluxe & Honeymoon Houseboats in Alleppey, Kerala."
      />
      <meta
        name="twitter:image"
        content="https://alleppey-houseboats.starkcabs.in/logo.png"
      />

      {/* Geo */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Alappuzha, Kerala" />
      <meta name="geo.position" content="9.4981;76.3388" />
      <meta name="ICBM" content="9.4981,76.3388" />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Alappuzha Houseboat Holidays",
          url: "https://alleppey-houseboats.starkcabs.in",
          logo: "https://alleppey-houseboats.starkcabs.in/logo.png",
          image: "https://alleppey-houseboats.starkcabs.in/logo.png",
          description:
            "Luxury Houseboat Booking Services in Alleppey, Kerala.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Alappuzha",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          areaServed: "Alleppey",
          serviceType: "Houseboat Booking",
        })}
      </script>
    </Helmet>
  );
}