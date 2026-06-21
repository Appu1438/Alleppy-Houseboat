import { Helmet } from "react-helmet-async";

export default function GallerySEO() {
  return (
    <Helmet>
      <title>Gallery | Alleppey Houseboats Photos & Backwater Cruises</title>

      <meta
        name="description"
        content="Browse our gallery of Alleppey houseboats, luxury interiors, scenic Kerala backwaters, honeymoon cruises and unforgettable houseboat experiences."
      />

      <link
        rel="canonical"
        href="https://alleppey-houseboats.starkcabs.in/gallery"
      />

      <meta
        property="og:title"
        content="Gallery | Alleppey Houseboats Photos & Backwater Cruises"
      />

      <meta
        property="og:description"
        content="Explore photos of luxury houseboats, Kerala backwaters and memorable Alleppey cruise experiences."
      />

      <meta
        property="og:url"
        content="https://alleppey-houseboats.starkcabs.in/gallery"
      />

      <meta
        property="og:image"
        content="https://alleppey-houseboats.starkcabs.in/logo.png"
      />
    </Helmet>
  );
}