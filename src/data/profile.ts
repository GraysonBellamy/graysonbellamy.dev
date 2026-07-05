// Header / hero content and the links row. Edit freely.
//
// Any link with an empty `href` is skipped, so you can uncomment and fill these
// in later (CV, blog, Google Scholar, ORCID, email) without touching markup.

export interface ProfileLink {
  label: string;
  href: string;
  /** Inline SVG icon id from BaseLayout's <defs>, e.g. "github", "mail". */
  icon?: string;
}

export const profile = {
  name: "Grayson Bellamy",
  // The one-liner under your name. Rewrite to taste.
  tagline: "Building typed, async Python for scientific instruments and fire-science data.",
  // A short paragraph under the tagline. Keep it to a couple of sentences.
  intro:
    "I write open-source tooling for controlling lab instruments and turning their raw output into analyzable data — from serial/Modbus device drivers to file parsers and full acquisition applications.",
  links: [
    { label: "GitHub", href: "https://github.com/GraysonBellamy", icon: "github" },
    // { label: "Email", href: "mailto:you@example.com", icon: "mail" },
    // { label: "CV", href: "/cv", icon: "doc" },
    // { label: "Blog", href: "/blog", icon: "rss" },
    // { label: "Google Scholar", href: "", icon: "scholar" },
    // { label: "ORCID", href: "", icon: "orcid" },
  ] as ProfileLink[],
};
