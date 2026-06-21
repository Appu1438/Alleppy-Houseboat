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

            <link
                rel="canonical"
                href="https://alleppey-houseboats.starkcabs.in/"
            />

            <meta
                property="og:title"
                content="Alleppey Houseboats | Luxury Houseboat Booking in Kerala"
            />
            <meta
                property="og:description"
                content="Luxury, Deluxe & Honeymoon Houseboat Packages in Alleppey. Explore Kerala Backwaters with Premium Houseboats."
            />
            <meta property="og:url" content="https://alleppey-houseboats.starkcabs.in/"
            />
            <meta property="og:image" content="https://alleppey-houseboats.starkcabs.in/logo.png"
            />
        </Helmet>
    );
}