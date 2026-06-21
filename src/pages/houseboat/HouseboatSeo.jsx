import { Helmet } from "react-helmet-async";

export default function HouseboatsSEO() {
  return (
    <Helmet>
      <title>Alleppey Houseboats | Luxury, Deluxe & Premium Houseboats</title>

      <meta
        name="description"
        content="Explore our collection of luxury, deluxe, premium, family and honeymoon houseboats in Alleppey, Kerala. Find the perfect houseboat for your backwater cruise."
      />

      <link
        rel="canonical"
        href="https://alleppey-houseboats.starkcabs.in/houseboats"
      />

      <meta
        property="og:title"
        content="Alleppey Houseboats | Luxury, Deluxe & Premium Houseboats"
      />

      <meta
        property="og:description"
        content="Browse luxury, deluxe, premium, family and honeymoon houseboats available in Alleppey, Kerala."
      />

      <meta
        property="og:url"
        content="https://alleppey-houseboats.starkcabs.in/houseboats"
      />

      <meta
        property="og:image"
        content="https://alleppey-houseboats.starkcabs.in/logo.png"
      />
    </Helmet>
  );
}