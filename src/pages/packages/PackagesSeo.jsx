import { Helmet } from "react-helmet-async";

export default function PackagesSEO() {
    return (
        <Helmet>
            <title>
                Houseboat Packages in Alleppey | Luxury, Deluxe & Honeymoon Cruises
            </title>

            <meta
                name="description"
                content="Explore our Alleppey houseboat packages including Luxury, Deluxe, Premium, Family and Honeymoon houseboats. Enjoy unforgettable Kerala backwater cruises at the best prices."
            />

            <meta
                name="keywords"
                content="alleppey houseboats, alleppey houseboat booking, alappuzha houseboats, houseboat kerala, luxury houseboat alleppey, premium houseboat alleppey, honeymoon houseboat alleppey, overnight houseboat alleppey, family houseboat alleppey, day cruise alleppey, backwater cruise kerala, kerala houseboats"
            />
            
            <link
                rel="canonical"
                href="https://alleppey-houseboats.starkcabs.in/packages"
            />

            <meta
                property="og:title"
                content="Houseboat Packages in Alleppey"
            />

            <meta
                property="og:description"
                content="Luxury, Deluxe, Premium and Honeymoon Houseboat Packages in Alleppey, Kerala."
            />

            <meta
                property="og:url"
                content="https://alleppey-houseboats.starkcabs.in/packages"
            />

            <meta
                property="og:image"
                content="https://alleppey-houseboats.starkcabs.in/logo.png"
            />
        </Helmet>
    );
}