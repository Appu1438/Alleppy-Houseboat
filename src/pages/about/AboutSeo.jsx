import { Helmet } from "react-helmet-async";

export default function AboutSEO() {
  return (
    <Helmet>
      <title>
        About Us | Alappuzha Houseboat Holidays | Trusted Alleppey Houseboat Experts
      </title>

      <meta
        name="description"
        content="Learn more about Alappuzha Houseboat Holidays. We specialize in luxury, deluxe, premium and honeymoon houseboat experiences in Alleppey, Kerala with personalized service and unforgettable backwater cruises."
      />

      <meta
        name="keywords"
        content="about alleppey houseboats, alappuzha houseboat holidays, houseboat company alleppey, kerala backwater experts, luxury houseboat booking alleppey, trusted houseboat operators kerala, houseboat tourism alleppey"
      />

      <link
        rel="canonical"
        href="https://alleppey-houseboats.starkcabs.in/about"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="About Alappuzha Houseboat Holidays"
      />
      <meta
        property="og:description"
        content="Discover our story, experience and commitment to providing memorable houseboat holidays across the beautiful Alleppey backwaters."
      />
      <meta
        property="og:url"
        content="https://alleppey-houseboats.starkcabs.in/about"
      />
      <meta
        property="og:image"
        content="https://alleppey-houseboats.starkcabs.in/logo.png"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="About Alappuzha Houseboat Holidays"
      />
      <meta
        name="twitter:description"
        content="Trusted experts in Alleppey houseboat bookings, luxury cruises and Kerala backwater experiences."
      />
      <meta
        name="twitter:image"
        content="https://alleppey-houseboats.starkcabs.in/logo.png"
      />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Alappuzha Houseboat Holidays",
          url: "https://alleppey-houseboats.starkcabs.in/about",
          description:
            "Learn about Alappuzha Houseboat Holidays and our expertise in organizing memorable houseboat experiences in Kerala.",
          publisher: {
            "@type": "TravelAgency",
            name: "Alappuzha Houseboat Holidays",
            url: "https://alleppey-houseboats.starkcabs.in",
          },
        })}
      </script>
    </Helmet>
  );
}