import { Helmet } from "react-helmet-async";

export default function ContactSEO() {
  return (
    <Helmet>
      <title>Contact Us | Alleppey Houseboat Booking</title>

      <meta
        name="description"
        content="Contact Alappuzha Houseboat Holidays for houseboat bookings, package details, pricing and availability in Alleppey, Kerala."
      />

      <link
        rel="canonical"
        href="https://alleppey-houseboats.starkcabs.in/contact"
      />

      <meta
        property="og:title"
        content="Contact Us | Alleppey Houseboat Booking"
      />

      <meta
        property="og:description"
        content="Get in touch with us for Alleppey houseboat bookings and Kerala backwater cruise packages."
      />

      <meta
        property="og:url"
        content="https://alleppey-houseboats.starkcabs.in/contact"
      />

      <meta
        property="og:image"
        content="https://alleppey-houseboats.starkcabs.in/logo.png"
      />
    </Helmet>
  );
}