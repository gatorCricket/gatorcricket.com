import Image from "next/image";

// Hardcoded links
const CAPTAIN_FORM = "https://forms.gle/NPerg4KQtXWJvavR9";
const PLAYER_FORM  = "https://forms.gle/YVBeEqkZUUUrfGUN7";
// Leave empty to keep Donate as “Coming Soon”
const GOFUNDME_URL = "";

export default function HomePage() {
  return (
    <section className="min-h-[100svh]">
      <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-10 md:grid-cols-2">
        {/* LEFT: Clear hierarchy + sensible order */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white/90 ring-1 ring-white/25">
            🏆 National Collegiate Champions · 2025
          </div>

          {/* Title */}
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Gator Cricket Club presents{" "}
            <span className="text-uf-orange">Gator Cricket Cup 2025</span>
          </h1>

          {/* Event details */}
          <p className="mt-3 text-lg font-semibold text-white/90">
            🎉 Tape Ball Fundraiser • September 12–14 • Gainesville, FL
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {/* Captain: solid button */}
            <a
              href={CAPTAIN_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 font-semibold text-white transition hover:border-uf-orange hover:bg-uf-orange"
            >
              Register as Captain
            </a>

            {/* Player: outline button */}
            <a
              href={PLAYER_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 font-semibold text-white transition hover:border-uf-orange hover:bg-uf-orange"
            >
              Register as Player
            </a>

            {/* Donate */}
            {GOFUNDME_URL ? (
              <a
                href={GOFUNDME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-uf-orange px-6 py-3 font-semibold text-white transition hover:brightness-110"
              >
                Donate (GoFundMe)
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-white/25 px-6 py-3 font-semibold text-white/80 ring-1 ring-white/30"
                title="Coming Soon"
              >
                Donate (Coming Soon)
              </span>
            )}
          </div>

          {/* Supporting line AFTER CTAs */}
          <p className="mt-6 text-base text-white/80">
            Proudly representing the University of Florida and the Gainesville cricket community.
            Building the next generation of cricket at UF.
          </p>
        </div>

        {/* RIGHT: One image, no crop */}
        <div className="flex w-full justify-center">
          <Image
            src="/images/image.png"
            alt="Gator Cricket Team"
            width={720}
            height={540}
            className="h-auto w-full max-w-[720px] rounded-2xl border border-white/20 bg-white/5 shadow-xl ring-1 ring-black/10"
            priority
          />
        </div>
      </div>

      {/* Thin UF orange underline */}
      <div className="h-1 w-full bg-uf-orange" />
    </section>
  );
}
