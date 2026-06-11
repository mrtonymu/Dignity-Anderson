import Landing from "@/components/Landing";

// Structured data — helps Google show the business in local/knowledge results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dignity Group Realty — Anderson Chen",
  description:
    "Dignity Group Realty team recruitment led by Team Leader Anderson Chen — structured training, one-on-one mentoring and luxury travel rewards in Bukit Jalil, Kuala Lumpur.",
  url: "https://dignity-anderson.vercel.app",
  telephone: "+60169177882",
  areaServed: "Kuala Lumpur, Malaysia",
  address: {
    "@type": "PostalAddress",
    streetAddress: "N-13-2, Jalan Jalil Utama 2, Bukit Jalil",
    addressLocality: "Kuala Lumpur",
    postalCode: "57000",
    addressCountry: "MY",
  },
  sameAs: [
    "https://www.facebook.com/dignityrealestate/",
    "https://www.instagram.com/dignityrealty_malaysia/",
    "https://www.youtube.com/@dignitygrouprealty5316",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Landing />
    </>
  );
}
