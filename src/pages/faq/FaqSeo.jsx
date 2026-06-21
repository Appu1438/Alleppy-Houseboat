import { Helmet } from "react-helmet-async";

export default function FAQSEO() {
    return (
        <Helmet>
            <title>FAQ | Alleppey Houseboat Booking Questions & Answers</title>

            <meta
                name="description"
                content="Find answers to common questions about Alleppey houseboat bookings, check-in times, packages, meals, routes, pricing and Kerala backwater cruises."
            />

            <link
                rel="canonical"
                href="https://alleppey-houseboats.starkcabs.in/faq"
            />

            <meta
                property="og:title"
                content="FAQ | Alleppey Houseboat Booking Questions & Answers"
            />

            <meta
                property="og:description"
                content="Frequently asked questions about Alleppey houseboats, packages, pricing and backwater cruises."
            />

            <meta
                property="og:url"
                content="https://alleppey-houseboats.starkcabs.in/faq"
            />

            <meta
                property="og:image"
                content="https://alleppey-houseboats.starkcabs.in/logo.png"
            />
        </Helmet>
    );
}