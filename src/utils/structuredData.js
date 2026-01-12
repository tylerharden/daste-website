// Structured Data (JSON-LD) helpers for SEO

export const getMusicGroupSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "daste.",
  "alternateName": "daste",
  "description": "Australian electronic music band",
  "genre": ["Electronic", "Alternative", "Indie Electronic"],
  "url": "https://daste.world",
  "image": "https://daste.world/images/daste-band.jpg",
  "sameAs": [
    "https://www.facebook.com/daste.music",
    "https://www.instagram.com/daste.music",
    "https://open.spotify.com/artist/5uXWOfu1kA8mQ9bUp5GgxT",
    "https://www.tiktok.com/@daste.music",
    "https://daste.bandcamp.com",
    "https://music.apple.com/au/artist/daste/1442679290",
    "https://www.bandsintown.com/a/daste."
  ],
  "foundingDate": "2018",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Australia"
    }
  }
});

export const getEventSchema = (event) => ({
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  "name": event.eventName || "daste. Live",
  "startDate": event.date,
  "location": {
    "@type": "Place",
    "name": event.venue,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": event.city,
      "addressCountry": event.country
    }
  },
  "performer": {
    "@type": "MusicGroup",
    "name": "daste.",
    "url": "https://daste.world"
  },
  "offers": event.ticketLink ? {
    "@type": "Offer",
    "url": event.ticketLink,
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString()
  } : undefined,
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
});

export const getEventsListSchema = (events) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": events.map((event, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": getEventSchema(event)
  }))
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://daste.world${item.url}`
  }))
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "daste.",
  "url": "https://daste.world",
  "description": "Official website of daste. - Australian electronic music band",
  "publisher": {
    "@type": "MusicGroup",
    "name": "daste.",
    "url": "https://daste.world"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://daste.world/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "daste.",
  "url": "https://daste.world",
  "logo": "https://daste.world/images/daste-logo.png",
  "description": "Australian electronic music band",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "thatdasteband@gmail.com",
    "contactType": "General Inquiries"
  },
  "sameAs": [
    "https://www.facebook.com/daste.music",
    "https://www.instagram.com/daste.music",
    "https://open.spotify.com/artist/5uXWOfu1kA8mQ9bUp5GgxT",
    "https://www.tiktok.com/@daste.music"
  ]
});

// Helper to inject JSON-LD into page
export const StructuredData = ({ data }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
};
