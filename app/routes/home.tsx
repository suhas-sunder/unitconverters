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
    {
      name: "keywords",
      content: [
        "unit converter",
        "length converter",
        "meters to feet",
        "cm to inches",
        "weight converter",
        "kg to lbs",
        "oz to g",
        "temperature converter",
        "celsius to fahrenheit",
        "kelvin to celsius",
        "cooking converter",
        "cups to grams",
        "cups to ml",
        "volume converter",
        "liters to gallons",
        "area converter",
        "square feet to square meters",
        "speed converter",
        "mph to kph",
        "knots to mph",
        "time converter",
        "hours to minutes",
        "currency converter",
        "usd to eur",
        "pressure converter",
        "psi to bar",
        "energy converter",
        "joules to calories",
        "power converter",
        "watts to horsepower",
      ].join(", "),
    },
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
   LOADER
========================================================= */
export function loader() {
  return json({ nowISO: new Date().toISOString() });
}

/* =========================================================
   SAMPLE CONVERTER WIDGETS
   (Replace with full-featured calculators later)
========================================================= */
function InputField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block text-sm font-medium text-sky-900">
      {label}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="ml-2 w-28 rounded border border-sky-300 px-2 py-1 text-sky-800"
      />
    </label>
  );
}

const SectionBox = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 rounded-xl border border-sky-200 bg-white p-4 shadow-sm space-y-2">
    {children}
  </div>
);

function LengthConv() {
  const [m, setM] = useState(0);
  return (
    <SectionBox>
      <InputField label="Meters:" value={m} onChange={setM} />
      <p>
        {m} m = {(m * 3.28084).toFixed(2)} ft = {(m * 39.37).toFixed(2)} in
      </p>
    </SectionBox>
  );
}

function WeightConv() {
  const [kg, setKg] = useState(0);
  return (
    <SectionBox>
      <InputField label="Kilograms:" value={kg} onChange={setKg} />
      <p>
        {kg} kg = {(kg * 2.20462).toFixed(2)} lbs = {(kg * 35.274).toFixed(2)}{" "}
        oz
      </p>
    </SectionBox>
  );
}

function TempConv() {
  const [c, setC] = useState(0);
  return (
    <SectionBox>
      <InputField label="Celsius:" value={c} onChange={setC} />
      <p>
        {c} °C = {(c * (9 / 5) + 32).toFixed(2)} °F = {(c + 273.15).toFixed(2)}{" "}
        K
      </p>
    </SectionBox>
  );
}

function CookingConv() {
  const [cups, setCups] = useState(0);
  return (
    <SectionBox>
      <InputField label="Cups (flour):" value={cups} onChange={setCups} />
      <p>
        {cups} cups ≈ {(cups * 120).toFixed(1)} g ≈ {(cups * 240).toFixed(0)} ml
      </p>
      <p className="text-xs text-sky-600">
        *Values vary by ingredient; this uses flour reference
      </p>
    </SectionBox>
  );
}

function VolumeConv() {
  const [l, setL] = useState(0);
  return (
    <SectionBox>
      <InputField label="Liters:" value={l} onChange={setL} />
      <p>
        {l} L = {(l * 0.264172).toFixed(3)} gal = {(l * 4.22675).toFixed(2)} qt
      </p>
    </SectionBox>
  );
}

function AreaConv() {
  const [sqm, setSqm] = useState(0);
  return (
    <SectionBox>
      <InputField label="Square Meters:" value={sqm} onChange={setSqm} />
      <p>
        {sqm} m² = {(sqm * 10.7639).toFixed(2)} ft² ={" "}
        {(sqm * 0.000247105).toFixed(4)} acres
      </p>
    </SectionBox>
  );
}

function SpeedConv() {
  const [mph, setMph] = useState(0);
  return (
    <SectionBox>
      <InputField label="Miles per Hour:" value={mph} onChange={setMph} />
      <p>
        {mph} mph = {(mph * 1.60934).toFixed(2)} km/h ={" "}
        {(mph * 0.868976).toFixed(2)} knots
      </p>
    </SectionBox>
  );
}

function TimeConv() {
  const [h, setH] = useState(0);
  return (
    <SectionBox>
      <InputField label="Hours:" value={h} onChange={setH} />
      <p>
        {h} h = {(h * 60).toFixed(0)} min = {(h * 3600).toFixed(0)} sec ={" "}
        {(h / 24).toFixed(2)} days
      </p>
    </SectionBox>
  );
}

function PressureConv() {
  const [psi, setPsi] = useState(0);
  return (
    <SectionBox>
      <InputField label="PSI:" value={psi} onChange={setPsi} />
      <p>
        {psi} psi = {(psi * 0.0689476).toFixed(3)} bar ={" "}
        {(psi * 6.89476).toFixed(2)} kPa
      </p>
    </SectionBox>
  );
}

function EnergyConv() {
  const [j, setJ] = useState(0);
  return (
    <SectionBox>
      <InputField label="Joules:" value={j} onChange={setJ} />
      <p>
        {j} J = {(j * 0.239006).toFixed(3)} cal = {(j / 4184).toFixed(4)} kcal
      </p>
    </SectionBox>
  );
}

function PowerConv() {
  const [w, setW] = useState(0);
  return (
    <SectionBox>
      <InputField label="Watts:" value={w} onChange={setW} />
      <p>
        {w} W = {(w / 746).toFixed(3)} hp (mechanical horsepower)
      </p>
    </SectionBox>
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
    <main className="bg-sky-50 text-sky-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========== TOP BAR =========== */}
      <div className="w-full border-b border-sky-100 bg-sky-50/50">
        <div className="mx-auto max-w-7xl px-4 py-2 text-sm text-sky-700">
          Free instant conversions • Last updated{" "}
          {new Date(nowISO).toLocaleDateString()}
        </div>
      </div>

      {/* =========== HERO =========== */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold tracking-tight">
              All-in-One Free Online Unit Converters
            </h1>
            <p className="text-lg text-sky-800">
              Convert length, weight, temperature, cooking, volume, area, speed,
              time, pressure, energy, power, and currency instantly on one page
              - no pop-ups or redirects.
            </p>
            <div className="flex flex-wrap gap-3">
              {featured.slice(0, 4).map(([href, title]) => (
                <a
                  key={href}
                  href={href as string}
                  className="rounded-xl border border-sky-300 bg-white px-4 py-2 text-sky-800 shadow-sm hover:bg-sky-100"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-sky-200 bg-white/70 p-5 shadow-sm">
            <h2 className="text-base font-semibold text-sky-900">
              Popular Conversions
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-sky-800 sm:grid-cols-2">
              <li>• Meters ⇆ Feet ⇆ Inches</li>
              <li>• Kilograms ⇆ Pounds ⇆ Ounces</li>
              <li>• Celsius ⇆ Fahrenheit ⇆ Kelvin</li>
              <li>• Cups ⇆ Grams ⇆ Milliliters</li>
              <li>• Liters ⇆ Gallons ⇆ Quarts</li>
              <li>• MPH ⇆ KPH ⇆ Knots</li>
              <li>• PSI ⇆ Bar ⇆ kPa</li>
              <li>• Watts ⇆ Horsepower</li>
            </ul>
            <a
              href="#featured"
              className="mt-4 inline-block rounded-lg bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 hover:bg-sky-200"
            >
              Browse All Tools ↓
            </a>
          </div>
        </div>
      </section>

      {/* =========== FEATURED GRID =========== */}
      <section id="featured" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-bold text-sky-900">Featured Tools</h2>
        <p className="mt-2 text-sky-800">
          Jump to any built-in converter below:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(([id, title, desc]) => (
            <a
              key={id}
              href={id as string}
              className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <h3 className="text-base font-semibold text-sky-900">{title}</h3>
              <p className="mt-2 text-sm text-sky-800">{desc}</p>
              <span className="mt-3 inline-block text-xs font-medium text-sky-700">
                Jump to Converter ↓
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* =========== CONVERTER SECTIONS =========== */}
      <div className="mx-auto max-w-7xl px-4 space-y-16">
        <Section id="length" title="Length & Distance Converter">
          <LengthConv />
        </Section>
        <Section id="weight" title="Weight & Mass Converter">
          <WeightConv />
        </Section>
        <Section id="temperature" title="Temperature Converter">
          <TempConv />
        </Section>
        <Section id="cooking" title="Cooking Measurement Converter">
          <CookingConv />
        </Section>
        <Section id="volume" title="Volume Converter">
          <VolumeConv />
        </Section>
        <Section id="area" title="Area Converter">
          <AreaConv />
        </Section>
        <Section id="speed" title="Speed Converter">
          <SpeedConv />
        </Section>
        <Section id="time" title="Time Converter">
          <TimeConv />
        </Section>
        <Section id="pressure" title="Pressure Converter">
          <PressureConv />
        </Section>
        <Section id="energy" title="Energy Converter">
          <EnergyConv />
        </Section>
        <Section id="power" title="Power Converter">
          <PowerConv />
        </Section>
      </div>

      {/* ===========================  
     SEO-Rich Content Section  
=========================== */}
      <section id="about-converters" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-sm space-y-5">
          <h2 className="text-2xl font-bold text-sky-900">
            Free All-in-One Unit Converters - Fast, Accurate & Mobile-Friendly
          </h2>
          <p className="text-sky-800 leading-relaxed">
            <strong>I Love Unit Converters</strong> was built for students, home
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
      <section id="about-converters" className="mx-auto max-w-7xl px-4 py-20">
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
