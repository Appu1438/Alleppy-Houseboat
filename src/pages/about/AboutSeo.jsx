import { Helmet } from "react-helmet-async";

export default function AboutSEO() {
    return (
        <Helmet>
            <title>About Us | Alappuzha Houseboat Holidays</title>

            <meta
                name="description"
                content="Learn more about Alappuzha Houseboat Holidays, your trusted partner for houseboat bookings and backwater experiences in Alleppey, Kerala."
            />

            <link
                rel="canonical"
                href="https://alleppey-houseboats.starkcabs.in/about"
            />

            <meta property="og:title" content="About Us | Alappuzha Houseboat Holidays" />

            <meta
                property="og:description"
                content="Trusted houseboat booking service in Alleppey, Kerala."
            />

            <meta
                property="og:url"
                content="https://alleppey-houseboats.starkcabs.in/about"
            />

            <meta
                property="og:image"
                content="https://alleppey-houseboats.starkcabs.in/logo.png"
            />
        </Helmet>
    );
}