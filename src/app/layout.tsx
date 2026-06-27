import "./globals.css";
import RefreshRedirect from '@/components/RefreshRedirect'
import type { Metadata } from 'next'
import { profile } from '@/data/portfolioData'

const siteDescription =
  "Portfolio of Prajwal Bhovi — AI/ML Engineer and Data Science graduate specializing in machine learning, NLP, geospatial analytics, RAG systems, and predictive modeling.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.professionalTitle}`,
    template: `%s | ${profile.name}`,
  },
  description: siteDescription,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    "Prajwal Bhovi",
    "AI Engineer",
    "ML Engineer",
    "Data Science",
    "Machine Learning",
    "NLP",
    "RAG",
    "Geospatial Analytics",
    "Python",
    "Portfolio",
    "Kumta",
    "Karnataka",
  ],
  alternates: {
    canonical: profile.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`,
    title: `${profile.name} | ${profile.professionalTitle}`,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: `${profile.name} — AI/ML Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.professionalTitle}`,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.professionalTitle,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kumta",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    url: profile.siteUrl,
    sameAs: [profile.githubUrl, profile.linkedinUrl],
    image: `${profile.siteUrl}${profile.profileImage}`,
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Natural Language Processing",
      "Retrieval-Augmented Generation",
      "Geospatial Analytics",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <RefreshRedirect />
        {children}
        </body>
    </html>
  );
}
