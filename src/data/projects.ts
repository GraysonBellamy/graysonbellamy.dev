// The single source of truth for the project grid.
// Add / edit / reorder entries here — the homepage renders straight from this.
//
// Grouping: `category` controls which section a card appears under. Section
// order is defined by `categoryOrder` below; cards keep the order they appear
// in this array within their section.

export interface Project {
  /** Display name (usually the repo name). */
  name: string;
  /** One-line description shown on the card. Keep it to a sentence. */
  description: string;
  /** GitHub repository URL. */
  github: string;
  /** Docs site URL. Omit if the project has no docs site yet. */
  docs?: string;
  /** Primary language badge, e.g. "Python". */
  language?: string;
  /** Section this card belongs to (see categoryOrder). */
  category: string;
}

/** Order sections appear on the page. Any category not listed falls to the end. */
export const categoryOrder = [
  "Applications",
  "Instrument drivers",
  "Comms foundations",
  "Analysis & data",
] as const;

export const projects: Project[] = [
  // ── Applications ──────────────────────────────────────────────────────────
  {
    name: "capa",
    description:
      "Control & DAQ for a custom controlled-atmosphere pyrolysis instrument. Async workers drive NI-DAQ, Watlow heaters, Alicat MFCs, Sartorius balances, and cameras; every run seals into a self-contained bundle.",
    github: "https://github.com/GraysonBellamy/capa",
    docs: "https://capa.graysonbellamy.dev/",
    language: "Python",
    category: "Applications",
  },

  // ── Instrument drivers ────────────────────────────────────────────────────
  {
    name: "alicatlib",
    description:
      "Typed Python library for Alicat Scientific instruments over serial — flow & pressure, meters & controllers, gas & liquid, plus CODA.",
    github: "https://github.com/GraysonBellamy/alicatlib",
    docs: "https://alicatlib.graysonbellamy.dev/",
    language: "Python",
    category: "Instrument drivers",
  },
  {
    name: "sartoriuslib",
    description:
      "Async Python client for Sartorius lab balances over RS-232/USB — SBI & xBPI protocols, streaming reads, persistent SQLite sinks, and a typed CLI.",
    github: "https://github.com/GraysonBellamy/sartoriuslib",
    docs: "https://sartoriuslib.graysonbellamy.dev/",
    language: "Python",
    category: "Instrument drivers",
  },
  {
    name: "servomexlib",
    description:
      "Async Python driver for Servomex SERVOPRO 4000-series gas analysers — one channel-oriented API over Continuous ASCII, Modbus RTU, and Modbus ASCII.",
    github: "https://github.com/GraysonBellamy/servomexlib",
    docs: "https://servomexlib.graysonbellamy.dev/",
    language: "Python",
    category: "Instrument drivers",
  },
  {
    name: "watlowlib",
    description:
      "Async Python driver for Watlow temperature controllers — one API over Standard Bus (BACnet MS/TP) and Modbus RTU, with auto-detect and drift-free streaming.",
    github: "https://github.com/GraysonBellamy/watlowlib",
    docs: "https://watlowlib.graysonbellamy.dev/",
    language: "Python",
    category: "Instrument drivers",
  },
  {
    name: "nidaqlib",
    description:
      "Typed, lifecycle-managed NI-DAQmx acquisition for Python — declarative task specs, async/sync APIs, TDMS/Parquet/SQLite logging, and hardware-free testing.",
    github: "https://github.com/GraysonBellamy/nidaqlib",
    docs: "https://nidaqlib.graysonbellamy.dev/",
    language: "Python",
    category: "Instrument drivers",
  },
  {
    name: "dtollib",
    description:
      "Typed async acquisition layer for Data Translation DT9805/DT9806 USB modules — ctypes binding to the DataAcq SDK with software thermocouple linearization.",
    github: "https://github.com/GraysonBellamy/dtollib",
    docs: "https://dtollib.graysonbellamy.dev/",
    language: "Python",
    category: "Instrument drivers",
  },

  // ── Comms foundations ─────────────────────────────────────────────────────
  {
    name: "anyserial",
    description: "Low-latency async serial I/O for Python, built on AnyIO.",
    github: "https://github.com/GraysonBellamy/anyserial",
    docs: "https://anyserial.graysonbellamy.dev/",
    language: "Python",
    category: "Comms foundations",
  },
  {
    name: "anymodbus",
    description:
      "Async-native Modbus RTU client on AnyIO + anyserial — runs under asyncio, uvloop, or trio. Strict-typed, with hardware-free test helpers.",
    github: "https://github.com/GraysonBellamy/anymodbus",
    docs: "https://anymodbus.graysonbellamy.dev/",
    language: "Python",
    category: "Comms foundations",
  },

  // ── Analysis & data ───────────────────────────────────────────────────────
  {
    name: "pyngb",
    description: "Parse and analyze NETZSCH STA NGB files in Python.",
    github: "https://github.com/GraysonBellamy/pyngb",
    docs: "https://pyngb.graysonbellamy.dev/",
    language: "Python",
    category: "Analysis & data",
  },
  {
    name: "pyhfm",
    description:
      "Read and analyze Heat Flow Meter (HFM) data files in Python.",
    github: "https://github.com/GraysonBellamy/pyhfm",
    docs: "https://pyhfm.graysonbellamy.dev/",
    language: "Python",
    category: "Analysis & data",
  },
  {
    name: "psplines",
    description: "P-splines (penalized B-splines) implementation for Python.",
    github: "https://github.com/GraysonBellamy/psplines",
    docs: "https://psplines.graysonbellamy.dev/",
    language: "Python",
    category: "Analysis & data",
  },
  {
    name: "pyfds",
    description:
      "Python interface to the NIST Fire Dynamics Simulator (FDS).",
    github: "https://github.com/GraysonBellamy/pyfds",
    docs: "https://pyfds.graysonbellamy.dev/",
    language: "Python",
    category: "Analysis & data",
  },
];
