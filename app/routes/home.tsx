import type { Route } from "./+types/home";
import { json } from "@remix-run/node";
import { useState } from "react";

/* =========================================================
   META
========================================================= */
export function meta({}: Route.MetaArgs) {
  const title =
    "I Love Unit Converters | Free Online Conversions for Length, Weight, Temperature, Cooking, Volume, Area, Speed, Time, Currency, and More";
  const description =
    "All-in-one page for quick, accurate unit conversions: length, weight, temperature, cooking, volume, area, speed, time, pressure, energy, power, currency, and more. Examples: meters⇆feet⇆inches, kg⇆lbs⇆oz, Celsius⇆Fahrenheit⇆Kelvin, cups⇆grams⇆ml, liters⇆gallons, mph⇆kph, psi⇆bar, joules⇆calories.";
  const url = "https://iloveunitconverters.com/";
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { rel: "canonical", href: url },
    { name: "theme-color", content: "#e0f2fe" },
  ];
}

/* =========================================================
   Related Tools (Card Grid)
========================================================= */

const ExternalToolCards = () => {
  const tools = [
    {
      name: "All Text Converters",
      emoji: "🔤",
      url: "https://www.alltextconverters.com",
      description:
        "Quickly convert text formats like uppercase, lowercase, title case, and more in one simple tool.",
    },
    {
      name: "Morse Code Translator",
      emoji: "📡",
      url: "https://www.morsewords.com",
      description:
        "Translate text to Morse code and back instantly, complete with audio playback for learning and fun.",
    },
    {
      name: "Typing Practice & Speed",
      emoji: "⌨️",
      url: "https://www.freetypingcamp.com",
      description:
        "Build fast, accurate typing skills with guided lessons, games, and real-time accuracy tracking.",
    },
    {
      name: "Learn Word Games",
      emoji: "🧩",
      url: "https://www.learnwordgames.com",
      description:
        "Wordle, crosswords, and anagram strategies. Improve your brain and win more puzzles.",
    },
    {
      name: "All Fitness Calculators",
      emoji: "💪",
      url: "https://www.allfitnesscalculators.com",
      description:
        "BMR, BMI, calorie burn, ideal weight, and body fat calculators to help you hit your health goals.",
    },
    {
      name: "Timers & Stopwatches",
      emoji: "⏱️",
      url: "https://www.ilovetimers.com",
      description:
        "Simple countdown timers and stopwatches for workouts, cooking, study sessions, and more.",
    },
    {
      name: "GPA Calculator Hub",
      emoji: "🎓",
      url: "https://www.allgpacalculators.com",
      description:
        "Calculate college, semester, and weighted GPAs for any school or grading system around the world.",
    },
    {
      name: "Step Counter & Pedometer",
      emoji: "🚶‍♂️",
      url: "https://ilovesteps.com/",
      description:
        "Track your daily steps and movement progress. Perfect for fitness goals and maintaining activity streaks.",
    },
    {
      name: "Habit Tracker",
      emoji: "✅",
      url: "https://ilovehabits.com/",
      description:
        "Build better habits and improve consistency with a clean, motivating daily habit tracker.",
    },
  ];

  return (
    <section className="mt-14 mb-3 max-w-[1200px] mx-auto ">
      <h2 className="text-2xl font-bold text-sky-900 mb-6 text-center">
        More Helpful Tools You Can Use
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <a
            key={i}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-white border border-sky-200 rounded-xl shadow-sm 
            flex flex-col gap-3 transition-transform hover:scale-[1.03]
            hover:shadow-lg hover:border-sky-400"
          >
            <div className="flex items-center gap-3 text-sky-900">
              <span className="text-2xl">{tool.emoji}</span>
              <span className="font-semibold text-lg">{tool.name}</span>
            </div>
            <p className="text-sky-700 text-base leading-snug">
              {tool.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

/* =========================================================
   LOADER
========================================================= */
export function loader() {
  return json({ nowISO: new Date().toISOString() });
}

/* =========================================================
   IMPROVED MINI CONVERTERS (Grid Format)
========================================================= */

function InputField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (t: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-sky-300 px-3 py-2 text-base text-sky-900
      focus:outline-none focus:ring-2 focus:ring-sky-400"
      inputMode="decimal"
    />
  );
}

/* =========================================================
   FULL BI-DIRECTIONAL CONVERTERS
   Titles = Full unit names
   Placeholders = Short symbols
   No forced "0"
========================================================= */

/* ✅ Shared Grid Component */
const ConverterGrid = ({
  titles,
  units,
  values,
  onChanges,
}: {
  titles: string[];
  units: string[];
  values: string[];
  onChanges: ((t: string) => void)[];
}) => (
  <div className="bg-white border border-sky-200 rounded-xl shadow-sm p-4 mt-6 space-y-3">
    {/* Full Titles */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm sm:text-base font-semibold text-sky-900">
      {titles.map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </div>

    {/* Inputs */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {values.map((v, i) => (
        <InputField
          key={i}
          value={v}
          onChange={(t) => onChanges[i](t)}
          placeholder={units[i]}
        />
      ))}
    </div>
  </div>
);

/* ======================================================================
   ✅ INDIVIDUAL CONVERTERS (ALL UNITS BIDIRECTIONAL + BLANKABLE INPUTS)
   NOTE: No default "0" — values start empty and convert only when typed
====================================================================== */

/* ✅ Length */
function LengthConv() {
  const [m, setM] = useState("");
  const [ft, setFt] = useState("");
  const [inch, setInch] = useState("");
  const [yd, setYd] = useState("");

  const update = (u: string, raw: string) => {
    if (raw === "") return (setM(""), setFt(""), setInch(""), setYd(""));
    const v = parseFloat(raw);
    if (isNaN(v)) return;

    if (u === "m") {
      setM(raw);
      setFt((v * 3.28084).toFixed(3));
      setInch((v * 39.37).toFixed(3));
      setYd((v * 1.09361).toFixed(3));
    } else if (u === "ft") {
      const x = v / 3.28084;
      setM(x.toFixed(3));
      setFt(raw);
      setInch((x * 39.37).toFixed(3));
      setYd((x * 1.09361).toFixed(3));
    } else if (u === "in") {
      const x = v / 39.37;
      setM(x.toFixed(3));
      setFt((x * 3.28084).toFixed(3));
      setInch(raw);
      setYd((x * 1.09361).toFixed(3));
    } else if (u === "yd") {
      const x = v / 1.09361;
      setM(x.toFixed(3));
      setFt((x * 3.28084).toFixed(3));
      setInch((x * 39.37).toFixed(3));
      setYd(raw);
    }
  };

  return (
    <ConverterGrid
      titles={["Meters", "Feet", "Inches", "Yards"]}
      units={["m", "ft", "in", "yd"]}
      values={[m, ft, inch, yd]}
      onChanges={[
        (t) => update("m", t),
        (t) => update("ft", t),
        (t) => update("in", t),
        (t) => update("yd", t),
      ]}
    />
  );
}

/* ✅ Weight */
function WeightConv() {
  const [kg, setKg] = useState("");
  const [lb, setLb] = useState("");
  const [oz, setOz] = useState("");
  const [st, setSt] = useState("");

  const update = (u: string, raw: string) => {
    if (raw === "") return (setKg(""), setLb(""), setOz(""), setSt(""));
    const v = parseFloat(raw);
    if (isNaN(v)) return;

    if (u === "kg") {
      setKg(raw);
      setLb((v * 2.20462).toFixed(3));
      setOz((v * 35.274).toFixed(3));
      setSt((v * 0.157473).toFixed(4));
    } else if (u === "lb") {
      const x = v / 2.20462;
      setKg(x.toFixed(3));
      setLb(raw);
      setOz((x * 35.274).toFixed(3));
      setSt((x * 0.157473).toFixed(4));
    } else if (u === "oz") {
      const x = v / 35.274;
      setKg(x.toFixed(3));
      setLb((x * 2.20462).toFixed(3));
      setOz(raw);
      setSt((x * 0.157473).toFixed(4));
    } else if (u === "st") {
      const x = v / 0.157473;
      setKg(x.toFixed(3));
      setLb((x * 2.20462).toFixed(3));
      setOz((x * 35.274).toFixed(3));
      setSt(raw);
    }
  };

  return (
    <ConverterGrid
      titles={["Kilograms", "Pounds", "Ounces", "Stones"]}
      units={["kg", "lb", "oz", "st"]}
      values={[kg, lb, oz, st]}
      onChanges={[
        (t) => update("kg", t),
        (t) => update("lb", t),
        (t) => update("oz", t),
        (t) => update("st", t),
      ]}
    />
  );
}

/* ✅ Temperature */
function TempConv() {
  const [c, setC] = useState("");
  const [f, setF] = useState("");
  const [k, setK] = useState("");

  const update = (u: string, raw: string) => {
    if (raw === "") return (setC(""), setF(""), setK(""));
    const v = parseFloat(raw);
    if (isNaN(v)) return;

    if (u === "c") {
      setC(raw);
      setF(((v * 9) / 5 + 32).toFixed(2));
      setK((v + 273.15).toFixed(2));
    } else if (u === "f") {
      const cVal = ((v - 32) * 5) / 9;
      setC(cVal.toFixed(2));
      setF(raw);
      setK((cVal + 273.15).toFixed(2));
    } else if (u === "k") {
      const cVal = v - 273.15;
      setC(cVal.toFixed(2));
      setF(((cVal * 9) / 5 + 32).toFixed(2));
      setK(raw);
    }
  };

  return (
    <ConverterGrid
      titles={["Celsius", "Fahrenheit", "Kelvin"]}
      units={["°C", "°F", "K"]}
      values={[c, f, k]}
      onChanges={[
        (t) => update("c", t),
        (t) => update("f", t),
        (t) => update("k", t),
      ]}
    />
  );
}

/* ✅ Cooking */
function CookingConv() {
  const [cup, setCup] = useState("");
  const [g, setG] = useState("");
  const [ml, setMl] = useState("");

  const update = (u: string, raw: string) => {
    if (raw === "") return (setCup(""), setG(""), setMl(""));
    const v = parseFloat(raw);
    if (isNaN(v)) return;

    if (u === "cups") {
      setCup(raw);
      setG((v * 120).toFixed(2));
      setMl((v * 240).toFixed(2));
    } else if (u === "g") {
      const x = v / 120;
      setCup(x.toFixed(3));
      setG(raw);
      setMl((x * 240).toFixed(2));
    } else if (u === "ml") {
      const x = v / 240;
      setCup(x.toFixed(3));
      setG((x * 120).toFixed(2));
      setMl(raw);
    }
  };

  return (
    <ConverterGrid
      titles={["Cups (Flour)", "Grams", "Milliliters"]}
      units={["cups", "g", "ml"]}
      values={[cup, g, ml]}
      onChanges={[
        (t) => update("cups", t),
        (t) => update("g", t),
        (t) => update("ml", t),
      ]}
    />
  );
}

/* ✅ Volume */
function VolumeConv() {
  const [l, setL] = useState("");
  const [gal, setGal] = useState("");
  const [qt, setQt] = useState("");
  const [cups, setCups] = useState("");

  const update = (u: string, raw: string) => {
    if (raw === "") return (setL(""), setGal(""), setQt(""), setCups(""));
    const v = parseFloat(raw);
    if (isNaN(v)) return;

    if (u === "L") {
      setL(raw);
      setGal((v * 0.264172).toFixed(3));
      setQt((v * 1.05669).toFixed(3));
      setCups((v * 4.22675).toFixed(2));
    } else if (u === "gal") {
      const x = v / 0.264172;
      setL(x.toFixed(3));
      setGal(raw);
      setQt((x * 1.05669).toFixed(3));
      setCups((x * 4.22675).toFixed(2));
    } else if (u === "qt") {
      const x = v / 1.05669;
      setL(x.toFixed(3));
      setGal((x * 0.264172).toFixed(3));
      setQt(raw);
      setCups((x * 4.22675).toFixed(2));
    } else if (u === "cups") {
      const x = v / 4.22675;
      setL(x.toFixed(3));
      setGal((x * 0.264172).toFixed(3));
      setQt((x * 1.05669).toFixed(3));
      setCups(raw);
    }
  };

  return (
    <ConverterGrid
      titles={["Liters", "Gallons", "Quarts", "Cups"]}
      units={["L", "gal", "qt", "cups"]}
      values={[l, gal, qt, cups]}
      onChanges={[
        (t) => update("L", t),
        (t) => update("gal", t),
        (t) => update("qt", t),
        (t) => update("cups", t),
      ]}
    />
  );
}

/* ✅ Area */
function AreaConv() {
  const [m2, setM2] = useState("");
  const [ft2, setFt2] = useState("");
  const [ac, setAc] = useState("");
  const [ha, setHa] = useState("");

  const update = (u: string, raw: string) => {
    if (raw === "") return (setM2(""), setFt2(""), setAc(""), setHa(""));
    const v = parseFloat(raw);
    if (isNaN(v)) return;

    if (u === "m²") {
      setM2(raw);
      setFt2((v * 10.7639).toFixed(3));
      setAc((v * 0.000247105).toFixed(5));
      setHa((v * 0.0001).toFixed(5));
    } else if (u === "ft²") {
      const x = v / 10.7639;
      setM2(x.toFixed(3));
      setFt2(raw);
      setAc((x * 0.000247105).toFixed(5));
      setHa((x * 0.0001).toFixed(5));
    } else if (u === "ac") {
      const x = v / 0.000247105;
      setM2(x.toFixed(3));
      setFt2((x * 10.7639).toFixed(3));
      setAc(raw);
      setHa((x * 0.0001).toFixed(5));
    } else if (u === "ha") {
      const x = v / 0.0001;
      setM2(x.toFixed(3));
      setFt2((x * 10.7639).toFixed(3));
      setAc((x * 0.000247105).toFixed(5));
      setHa(raw);
    }
  };

  return (
    <ConverterGrid
      titles={["Square Meters", "Square Feet", "Acres", "Hectares"]}
      units={["m²", "ft²", "ac", "ha"]}
      values={[m2, ft2, ac, ha]}
      onChanges={[
        (t) => update("m²", t),
        (t) => update("ft²", t),
        (t) => update("ac", t),
        (t) => update("ha", t),
      ]}
    />
  );
}

/* ✅ Speed */
function SpeedConv() {
  const [mph, setMph] = useState("");
  const [kmh, setKmh] = useState("");
  const [kt, setKt] = useState("");
  const [mach, setMach] = useState("");

  const update = (u: string, raw: string) => {
    if (raw === "") return (setMph(""), setKmh(""), setKt(""), setMach(""));
    const v = parseFloat(raw);
    if (isNaN(v)) return;

    if (u === "mph") {
      setMph(raw);
      setKmh((v * 1.60934).toFixed(3));
      setKt((v * 0.868976).toFixed(3));
      setMach((v / 761.2).toFixed(5));
    } else if (u === "km/h") {
      const x = v / 1.60934;
      setMph(x.toFixed(3));
      setKmh(raw);
      setKt((x * 0.868976).toFixed(3));
      setMach((x / 761.2).toFixed(5));
    } else if (u === "kt") {
      const x = v / 0.868976;
      setMph(x.toFixed(3));
      setKmh((x * 1.60934).toFixed(3));
      setKt(raw);
      setMach((x / 761.2).toFixed(5));
    } else if (u === "mach") {
      const x = v * 761.2;
      setMph(x.toFixed(3));
      setKmh((x * 1.60934).toFixed(3));
      setKt((x * 0.868976).toFixed(3));
      setMach(raw);
    }
  };

  return (
    <ConverterGrid
      titles={["Miles per Hour", "Kilometers per Hour", "Knots", "Mach"]}
      units={["mph", "km/h", "kt", "mach"]}
      values={[mph, kmh, kt, mach]}
      onChanges={[
        (t) => update("mph", t),
        (t) => update("km/h", t),
        (t) => update("kt", t),
        (t) => update("mach", t),
      ]}
    />
  );
}

/* ✅ Time */
function TimeConv() {
  const [h, setH] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");
  const [days, setDays] = useState("");

  const update = (u: string, raw: string) => {
    if (raw === "") return (setH(""), setMin(""), setSec(""), setDays(""));
    const v = parseFloat(raw);
    if (isNaN(v)) return;

    if (u === "h") {
      setH(raw);
      setMin((v * 60).toFixed(0));
      setSec((v * 3600).toFixed(0));
      setDays((v / 24).toFixed(5));
    } else if (u === "min") {
      const x = v / 60;
      setH(x.toFixed(3));
      setMin(raw);
      setSec((x * 3600).toFixed(0));
      setDays((x / 24).toFixed(5));
    } else if (u === "sec") {
      const x = v / 3600;
      setH(x.toFixed(3));
      setMin((x * 60).toFixed(0));
      setSec(raw);
      setDays((x / 24).toFixed(5));
    } else if (u === "days") {
      const x = v * 24;
      setH(x.toFixed(3));
      setMin((x * 60).toFixed(0));
      setSec((x * 3600).toFixed(0));
      setDays(raw);
    }
  };

  return (
    <ConverterGrid
      titles={["Hours", "Minutes", "Seconds", "Days"]}
      units={["h", "min", "sec", "days"]}
      values={[h, min, sec, days]}
      onChanges={[
        (t) => update("h", t),
        (t) => update("min", t),
        (t) => update("sec", t),
        (t) => update("days", t),
      ]}
    />
  );
}

/* ✅ Pressure */
function PressureConv() {
  const [psi, setPsi] = useState("");
  const [bar, setBar] = useState("");
  const [kpa, setKpa] = useState("");

  const update = (u: string, raw: string) => {
    if (raw === "") return (setPsi(""), setBar(""), setKpa(""));
    const v = parseFloat(raw);
    if (isNaN(v)) return;

    if (u === "psi") {
      setPsi(raw);
      setBar((v * 0.0689476).toFixed(4));
      setKpa((v * 6.89476).toFixed(2));
    } else if (u === "bar") {
      const x = v / 0.0689476;
      setPsi(x.toFixed(3));
      setBar(raw);
      setKpa((x * 6.89476).toFixed(2));
    } else if (u === "kPa") {
      const x = v / 6.89476;
      setPsi(x.toFixed(3));
      setBar((x * 0.0689476).toFixed(4));
      setKpa(raw);
    }
  };

  return (
    <ConverterGrid
      titles={["PSI", "Bar", "Kilopascals"]}
      units={["psi", "bar", "kPa"]}
      values={[psi, bar, kpa]}
      onChanges={[
        (t) => update("psi", t),
        (t) => update("bar", t),
        (t) => update("kPa", t),
      ]}
    />
  );
}

/* ✅ Energy */
function EnergyConv() {
  const [j, setJ] = useState("");
  const [cal, setCal] = useState("");
  const [kcal, setKcal] = useState("");

  const update = (u: string, raw: string) => {
    if (raw === "") return (setJ(""), setCal(""), setKcal(""));
    const v = parseFloat(raw);
    if (isNaN(v)) return;

    if (u === "J") {
      setJ(raw);
      setCal((v * 0.239006).toFixed(4));
      setKcal((v / 4184).toFixed(6));
    } else if (u === "cal") {
      const x = v / 0.239006;
      setJ(x.toFixed(3));
      setCal(raw);
      setKcal((x / 4184).toFixed(6));
    } else if (u === "kcal") {
      const x = v * 4184;
      setJ(x.toFixed(3));
      setCal((x * 0.239006).toFixed(4));
      setKcal(raw);
    }
  };

  return (
    <ConverterGrid
      titles={["Joules", "Calories", "Kilocalories"]}
      units={["J", "cal", "kcal"]}
      values={[j, cal, kcal]}
      onChanges={[
        (t) => update("J", t),
        (t) => update("cal", t),
        (t) => update("kcal", t),
      ]}
    />
  );
}

/* ✅ Power */
function PowerConv() {
  const [w, setW] = useState("");
  const [hp, setHp] = useState("");
  const [kw, setKw] = useState("");

  const update = (u: string, raw: string) => {
    if (raw === "") return (setW(""), setHp(""), setKw(""));
    const v = parseFloat(raw);
    if (isNaN(v)) return;

    if (u === "W") {
      setW(raw);
      setHp((v / 746).toFixed(4));
      setKw((v / 1000).toFixed(4));
    } else if (u === "hp") {
      const x = v * 746;
      setW(x.toFixed(3));
      setHp(raw);
      setKw((x / 1000).toFixed(4));
    } else if (u === "kW") {
      const x = v * 1000;
      setW(x.toFixed(3));
      setHp((x / 746).toFixed(4));
      setKw(raw);
    }
  };

  return (
    <ConverterGrid
      titles={["Watts", "Horsepower", "Kilowatts"]}
      units={["W", "hp", "kW"]}
      values={[w, hp, kw]}
      onChanges={[
        (t) => update("W", t),
        (t) => update("hp", t),
        (t) => update("kW", t),
      ]}
    />
  );
}

/* =========================================================
   PAGE
========================================================= */
export default function Home({ loaderData: { nowISO } }: Route.ComponentProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "I Love Unit Converters",
        url: "https://iloveunitconverters.com/",
        description:
          "One-page free online unit converters for length, weight, temperature, cooking, volume, area, speed, time, pressure, energy, power, currency, and more.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How accurate are these converters?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All calculators use standard SI conversion factors such as 1 m = 3.28084 ft and 1 kg = 2.20462 lb. Rounding is to two decimals by default for readability.",
            },
          },
          {
            "@type": "Question",
            name: "Can I convert fractional measurements like 5 ft 7 in or 3/4 cup?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You can enter decimals (for example 5.58 ft or 0.75 cup) and the tool converts them instantly. Future updates will include a mixed-unit input box.",
            },
          },
          {
            "@type": "Question",
            name: "Which cooking ingredients are supported?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The cooking converter currently uses flour, sugar, butter, oil, and milk as reference densities. We will expand to dozens of common pantry items so that grams⇆cups⇆ml are more precise.",
            },
          },
          {
            "@type": "Question",
            name: "Do you support both US and metric units?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. All converters show US customary and metric units side by side: for example cups, tablespoons, teaspoons as well as milliliters and grams.",
            },
          },
          {
            "@type": "Question",
            name: "Are conversions rounded for display or stored at full precision?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Calculations keep full precision internally but display is rounded to a sensible number of decimals so the results are easier to read and print.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use these converters on a mobile phone or tablet?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. The page is mobile-friendly and works on any modern browser.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide formula references for engineering or science use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Each calculator is based on published NIST or ISO conversion constants. A future update will display formula cards below each tool for academic citation.",
            },
          },
          {
            "@type": "Question",
            name: "What about currency exchange rates?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The currency converter will pull live mid-market rates from a free API (hourly refresh). Historical rates and crypto pairs are on the roadmap.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a way to print or export the conversion tables?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can print the current page using your browser’s print dialog. We’re adding a ‘Download Table as PDF’ button to popular converters soon.",
            },
          },
          {
            "@type": "Question",
            name: "Are the tools free forever?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. All core converters on I Love Unit Converters will remain free for personal and educational use.",
            },
          },
        ],
      },
    ],
  };

  const featured = [
    ["#length", "Length & Distance", "Meters ⇆ Feet ⇆ Inches ⇆ Yards"],
    ["#weight", "Weight & Mass", "Kilograms ⇆ Pounds ⇆ Ounces ⇆ Stone"],
    ["#temperature", "Temperature", "Celsius ⇆ Fahrenheit ⇆ Kelvin"],
    ["#cooking", "Cooking Measurements", "Cups ⇆ Grams ⇆ Milliliters"],
    ["#volume", "Volume", "Liters ⇆ Gallons ⇆ Quarts ⇆ Pints ⇆ Cups"],
    ["#area", "Area", "Square Feet ⇆ Square Meters ⇆ Acres ⇆ Hectares"],
    ["#speed", "Speed", "MPH ⇆ KPH ⇆ Knots ⇆ Mach"],
    ["#time", "Time", "Hours ⇆ Minutes ⇆ Seconds ⇆ Days ⇆ Weeks"],
    ["#pressure", "Pressure", "PSI ⇆ Bar ⇆ kPa"],
    ["#energy", "Energy", "Joules ⇆ Calories ⇆ Kilocalories"],
    ["#power", "Power", "Watts ⇆ Horsepower"],
  ];

  return (
    <main className="bg-sky-50/10 text-sky-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========== HERO =========== */}
      <section className="flex w-full text-center justify-center items-center pt-6 pb-8">
        <div className="space-y-5">
          <h1 className="text-4xl font-extrabold tracking-tight">
            All-in-One Free Online Unit Converters
          </h1>
          <p className="text-lg text-sky-800">
            Convert length, weight, temperature, cooking, volume, area, speed,
            time, pressure, energy, power, and currency instantly on one page -
            no pop-ups or redirects.
          </p>
        </div>
      </section>

      {/* =========== FEATURED GRID =========== */}
      <section id="featured" className="mx-auto max-w-7xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-sky-900">
          Featured Tools (Quick Access menu)
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {featured.map(([id, title, desc]) => (
            <a
              key={id}
              href={id as string}
              className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <h3 className="text-base font-semibold text-sky-900">{title}</h3>
              <p className="mt-2 text-sm text-sky-800">{desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* =========== CONVERTER SECTIONS =========== */}
      <div className="mx-auto max-w-7xl px-4 space-y-16">
        <Section
          id="length"
          title="Length & Distance Converter (Meters to Feet and Inches)"
        >
          <LengthConv />
        </Section>
        <Section
          id="weight"
          title="Weight & Mass Converter (Kilograms to Pounds and Ounces)"
        >
          <WeightConv />
        </Section>
        <Section
          id="temperature"
          title="Temperature Converter (Celsius to Fahrenheit and Kelvin)"
        >
          <TempConv />
        </Section>
        <Section
          id="cooking"
          title="Cooking Measurement Converter (Cups to Grams and Milliliters)"
        >
          <CookingConv />
        </Section>
        <Section
          id="volume"
          title="Volume Converter (Liters to Gallons and Quarts)"
        >
          <VolumeConv />
        </Section>
        <Section
          id="area"
          title="Area Converter (Square Meters to Square Feet and Acres)"
        >
          <AreaConv />
        </Section>
        <Section id="speed" title="Speed Converter (MPH to KPH and Knots)">
          <SpeedConv />
        </Section>
        <Section
          id="time"
          title="Time Converter (Minutes to Hours and Seconds)"
        >
          <TimeConv />
        </Section>
        <Section id="pressure" title="Pressure Converter (Psi to Bar and kPa)">
          <PressureConv />
        </Section>
        <Section
          id="energy"
          title="Energy Converter (Joules to Calories and Kilocalories)"
        >
          <EnergyConv />
        </Section>
        <Section
          id="power"
          title="Power Converter (Watts to Horsepower and Kilowatts)"
        >
          <PowerConv />
        </Section>
      </div>

      <ExternalToolCards />

      {/* ===========================  
     SEO-Rich Content Section  
=========================== */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-sm space-y-5">
          <h2 className="text-2xl font-bold text-sky-900">
            Free All-in-One Unit Converters - Fast, Accurate & Mobile-Friendly
          </h2>
          <p className="text-sky-800 leading-relaxed">
            <strong>iLoveUnitConverters</strong> was built for students, home
            cooks, DIY hobbyists, engineers, travelers, and anyone who needs
            reliable conversions without pop-ups or paywalls. Every calculator
            on this page is instant, ad-light, and designed for quick answers.
            Whether you are scaling a recipe from <em>cups to grams</em>,
            converting <em>meters to feet</em>
            for a woodworking project, switching <em>°C to °F</em> for science
            class, or checking <em>PSI to bar</em> on a bike pump, you can do it
            all here on one clean page.
          </p>

          <p className="text-sky-800 leading-relaxed">
            Our tools use official <strong>SI conversion factors</strong> from
            NIST / ISO standards to guarantee accuracy. Calculations run
            instantly in your browser, so there’s no waiting for a server
            round-trip. We round to two decimals by default for readability, yet
            keep full precision under the hood for engineering work. All layouts
            are
            <strong> mobile-friendly</strong> and tested on phones, tablets,
            laptops, and printers.
          </p>

          <p className="text-sky-800 leading-relaxed">
            Each converter supports the most common daily units:
          </p>

          <ul className="grid gap-2 list-disc list-inside text-sky-900 sm:grid-cols-2">
            <li>
              Length & Distance: meters ⇆ feet ⇆ inches ⇆ yards ⇆ centimeters
            </li>
            <li>Weight & Mass: kilograms ⇆ pounds ⇆ ounces ⇆ stone ⇆ grams</li>
            <li>Temperature: Celsius ⇆ Fahrenheit ⇆ Kelvin</li>
            <li>Cooking & Baking: cups ⇆ grams ⇆ milliliters ⇆ tbsp ⇆ tsp</li>
            <li>Volume: liters ⇆ gallons ⇆ quarts ⇆ pints ⇆ cups ⇆ ml</li>
            <li>Area: square feet ⇆ square meters ⇆ acres ⇆ hectares</li>
            <li>Speed: mph ⇆ kph ⇆ knots ⇆ mach</li>
            <li>Time: hours ⇆ minutes ⇆ seconds ⇆ days ⇆ weeks</li>
            <li>Pressure: psi ⇆ bar ⇆ kPa</li>
            <li>Energy: joules ⇆ calories ⇆ kilocalories ⇆ BTU</li>
            <li>Power: watts ⇆ kilowatts ⇆ horsepower</li>
            <li>Currency: USD ⇆ EUR ⇆ GBP ⇆ JPY (live rates coming soon)</li>
          </ul>

          <p className="text-sky-800 leading-relaxed">
            The goal is to save you clicks: instead of hunting across ten
            different calculators, you can bookmark this single page. It’s ideal
            for classroom use, science experiments, baking conversions,
            construction projects, travel prep, fitness tracking, and quick
            homework checks.
          </p>

          <p className="text-sky-800 leading-relaxed">
            Future updates will include ingredient-specific cooking densities,
            historical currency charts, mixed-unit input (like
            <em> 5 ft 7 in</em>), offline-ready progressive-web-app mode, and
            printable conversion tables.
          </p>
        </div>
      </section>

      {/* ==========================================
     EXPANDED SEO-RICH CONTENT SECTION
========================================== */}
      <section id="details" className="mx-auto max-w-7xl px-4 py-12">
        <div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-sm space-y-6">
          <h2 className="text-3xl font-extrabold text-sky-900">
            Free, Accurate, All-in-One Unit Converters
          </h2>

          <p className="text-sky-800 leading-relaxed">
            <strong>I Love Unit Converters</strong> is built to remove the
            hassle of hopping across multiple sites. On this single page you can
            <strong> convert any common unit</strong> you need: from
            <em> meters to feet</em> and <em>kilograms to pounds</em> to
            <em>cups to grams</em> for baking recipes, or <em>mph to kph</em>{" "}
            for road trips abroad. Every calculator loads instantly, requires no
            sign-up, and is designed for <strong>fast mobile use</strong>.
          </p>

          <p className="text-sky-800 leading-relaxed">
            Our formulas follow{" "}
            <strong>SI-approved and NIST-referenced constants</strong>, ensuring
            scientific-grade accuracy. Calculations run directly in your
            browser-no delays, no hidden requests. All results show smart
            rounding for easy reading while preserving full precision under the
            hood for engineers and students who need exact figures.
          </p>

          {/* ------------------ FEATURE GRID ------------------ */}
          <h3 className="text-xl font-bold text-sky-900">
            Everything You Need in One Page:
          </h3>
          <ul className="grid gap-2 list-disc list-inside text-sky-900 sm:grid-cols-2 lg:grid-cols-3">
            <li>Length & Distance: meters ⇆ feet ⇆ inches ⇆ yards ⇆ cm ⇆ mm</li>
            <li>
              Weight & Mass: kilograms ⇆ pounds ⇆ ounces ⇆ stone ⇆ grams ⇆ mg
            </li>
            <li>Temperature: Celsius ⇆ Fahrenheit ⇆ Kelvin ⇆ Rankine</li>
            <li>
              Cooking & Baking: cups ⇆ grams ⇆ milliliters ⇆ tbsp ⇆ tsp ⇆ ounces
            </li>
            <li>
              Volume: liters ⇆ gallons ⇆ quarts ⇆ pints ⇆ cups ⇆ fl oz ⇆ ml
            </li>
            <li>
              Area: square feet ⇆ square meters ⇆ acres ⇆ hectares ⇆ sq in ⇆ sq
              yd
            </li>
            <li>Speed: mph ⇆ kph ⇆ knots ⇆ m/s ⇆ Mach</li>
            <li>Time: hours ⇆ minutes ⇆ seconds ⇆ days ⇆ weeks ⇆ months</li>
            <li>Pressure: psi ⇆ bar ⇆ kPa ⇆ atm ⇆ mmHg</li>
            <li>Energy: joules ⇆ calories ⇆ kilocalories ⇆ BTU ⇆ kWh</li>
            <li>Power: watts ⇆ kilowatts ⇆ horsepower ⇆ BTU/h</li>
            <li>Currency: USD ⇆ EUR ⇆ GBP ⇆ JPY ⇆ CAD ⇆ AUD ⇆ INR ⇆ more</li>
          </ul>

          {/* ------------------ USE CASES ------------------ */}
          <h3 className="text-xl font-bold text-sky-900 mt-6">
            Popular Use-Cases
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-sky-200 bg-sky-50/40 p-4 shadow-sm">
              <h4 className="font-semibold text-sky-900">Baking & Cooking</h4>
              <p className="text-sm text-sky-800">
                Quickly scale recipes by converting <em>cups to grams</em>,
                <em>ml to tablespoons</em>, or{" "}
                <em>oven temperatures between °C and °F</em>. Great for
                international cookbooks and food bloggers.
              </p>
            </article>

            <article className="rounded-xl border border-sky-200 bg-sky-50/40 p-4 shadow-sm">
              <h4 className="font-semibold text-sky-900">
                DIY, Woodworking & Home Projects
              </h4>
              <p className="text-sm text-sky-800">
                Convert <em>meters to feet & inches</em> for lumber lengths,
                <em>square feet to square meters</em> for flooring, and{" "}
                <em>psi to bar</em> for tool calibration-all in one place.
              </p>
            </article>

            <article className="rounded-xl border border-sky-200 bg-sky-50/40 p-4 shadow-sm">
              <h4 className="font-semibold text-sky-900">
                Travel & Vehicle Checks
              </h4>
              <p className="text-sm text-sky-800">
                Compare <em>mph vs kph</em> speed limits, convert{" "}
                <em>fuel volume</em>,<em>tire pressure (psi ⇆ bar)</em>, and
                plan distances abroad without confusion.
              </p>
            </article>

            <article className="rounded-xl border border-sky-200 bg-sky-50/40 p-4 shadow-sm">
              <h4 className="font-semibold text-sky-900">
                Students & Classrooms
              </h4>
              <p className="text-sm text-sky-800">
                Get instant answers for physics, chemistry, and math homework-
                convert <em>joules to calories</em>, <em>watt to horsepower</em>
                , or <em>meters/second to mph</em> with no ads or pop-ups.
              </p>
            </article>

            <article className="rounded-xl border border-sky-200 bg-sky-50/40 p-4 shadow-sm">
              <h4 className="font-semibold text-sky-900">Fitness & Health</h4>
              <p className="text-sm text-sky-800">
                Track progress by converting <em>pounds to kilograms</em>,
                <em>kilometers to miles</em>, or{" "}
                <em>calories burned to kilojoules</em>. Perfect for gym logs and
                sports training.
              </p>
            </article>

            <article className="rounded-xl border border-sky-200 bg-sky-50/40 p-4 shadow-sm">
              <h4 className="font-semibold text-sky-900">
                Science & Engineering
              </h4>
              <p className="text-sm text-sky-800">
                Accurate conversions for <em>pressure (atm ⇆ kPa ⇆ mmHg)</em>,
                <em>energy (BTU ⇆ kWh)</em>, and{" "}
                <em>power (watts ⇆ horsepower)</em>
                using SI-aligned constants for lab-grade precision.
              </p>
            </article>
          </div>

          {/* ------------------ BENEFITS ------------------ */}
          <h3 className="text-xl font-bold text-sky-900 mt-6">
            Why Choose I Love Unit Converters
          </h3>
          <ul className="list-disc list-inside text-sky-900 space-y-2">
            <li>
              <strong>All-in-one:</strong> no need for 10 different converter
              apps.
            </li>
            <li>
              <strong>Fast & lightweight:</strong> calculations run in your
              browser, near-instant results.
            </li>
            <li>
              <strong>Accurate & reliable:</strong> based on NIST / ISO official
              constants.
            </li>
            <li>
              <strong>Mobile-friendly:</strong> responsive design works on
              phones, tablets, and desktops.
            </li>
            <li>
              <strong>Ink-friendly print option:</strong> export tables or print
              pages easily.
            </li>
            <li>
              <strong>Free forever:</strong> no paywalls for core converters.
            </li>
            <li>
              <strong>Upcoming features:</strong> live currency,
              ingredient-specific cooking densities, offline PWA mode.
            </li>
          </ul>

          <p className="text-sky-800 leading-relaxed">
            Bookmark this page and save time on every project, trip, or study
            session. Our mission is to make{" "}
            <strong>unit conversion quick, accurate, and stress-free</strong>
            for everyone worldwide.
          </p>
        </div>
      </section>

      {/* =========== FAQ =========== */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-sky-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 divide-y divide-sky-200 rounded-2xl border border-sky-200 bg-white shadow-sm">
          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-sky-900">
              How accurate are these converters?
            </summary>
            <div className="px-5 pb-4 text-sky-800">
              All calculators use standard SI conversion factors such as
              1&nbsp;m = 3.28084&nbsp;ft and 1&nbsp;kg = 2.20462&nbsp;lb.
              Rounding is to two decimals by default for readability.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-sky-900">
              Can I convert fractional measurements like
              5&nbsp;ft&nbsp;7&nbsp;in or ¾&nbsp;cup?
            </summary>
            <div className="px-5 pb-4 text-sky-800">
              Yes. You can enter decimals (for example 5.58&nbsp;ft or
              0.75&nbsp;cup) and the tool converts them instantly. Future
              updates will include a mixed-unit input box.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-sky-900">
              Which cooking ingredients are supported?
            </summary>
            <div className="px-5 pb-4 text-sky-800">
              The cooking converter currently uses flour, sugar, butter, oil,
              and milk as reference densities. We will expand to dozens of
              common pantry items so that grams⇆cups⇆ml are more precise.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-sky-900">
              Do you support both US and metric units?
            </summary>
            <div className="px-5 pb-4 text-sky-800">
              Yes. All converters show US customary and metric units side by
              side: for example cups / tablespoons / teaspoons as well as
              milliliters and grams.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-sky-900">
              Are conversions rounded for display or stored at full precision?
            </summary>
            <div className="px-5 pb-4 text-sky-800">
              Calculations keep full precision internally but display is rounded
              to a sensible number of decimals so the results are easier to read
              and print.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-sky-900">
              Can I use these converters on a mobile phone or tablet?
            </summary>
            <div className="px-5 pb-4 text-sky-800">
              Absolutely. The page is mobile-friendly and works on any modern
              browser.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-sky-900">
              Do you provide formula references for engineering or science use?
            </summary>
            <div className="px-5 pb-4 text-sky-800">
              Each calculator is based on published NIST or ISO conversion
              constants. A future update will display formula cards below each
              tool for academic citation.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-sky-900">
              What about currency exchange rates?
            </summary>
            <div className="px-5 pb-4 text-sky-800">
              The currency converter will pull live mid-market rates from a free
              API (hourly refresh). Historical rates and crypto pairs are on the
              roadmap.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-sky-900">
              Is there a way to print or export the conversion tables?
            </summary>
            <div className="px-5 pb-4 text-sky-800">
              You can print the current page using your browser’s print dialog.
              We’re adding a “Download Table as PDF” button to popular
              converters soon.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-sky-900">
              Are the tools free forever?
            </summary>
            <div className="px-5 pb-4 text-sky-800">
              Yes. All core converters on I Love Unit Converters will remain
              free for personal and educational use.
            </div>
          </details>
        </div>
      </section>

      {/* =========== FOOTER =========== */}
      <footer className="border-t border-sky-200 bg-sky-100/60">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-sky-800">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} I Love Unit Converters</div>
            <div className="text-sky-700">
              Free online converters for length, weight, temperature, cooking,
              volume, area, speed, time, pressure, energy, and power
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- Helper Section Wrapper ---------- */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16">
      <h2 className="text-2xl font-bold text-sky-900">{title}</h2>
      {children}
    </section>
  );
}
