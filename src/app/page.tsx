import Image from "next/image";

const captainForm = process.env.NEXT_PUBLIC_FORM_CAPTAIN || "";
const playerForm  = process.env.NEXT_PUBLIC_FORM_PLAYER  || "";

export default function HomePage() {
  return (
    <section className="min-h-[100svh]">
      <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-8 md:grid-cols-2">
        {/* Left: Headline & text */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            🏆 Gator Cricket —<br /> National Collegiate Champions
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Proudly representing the University of Florida and the Gainesville cricket community.
          </p>
          <p className="mt-2 text-base text-white/80">
            Building the next generation of cricket at UF.
          </p>

          {/* CTA (inside hero so we don’t add extra height) */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={captainForm || undefined}
              target={captainForm ? "_blank" : undefined}
              rel={captainForm ? "noopener noreferrer" : undefined}
              aria-disabled={!captainForm}
              className={[
                "rounded-md px-6 py-3 font-semibold transition",
                captainForm
                  ? "bg-white text-uf-blue hover:bg-uf-orange hover:text-white"
                  : "cursor-not-allowed bg-white/30 text-white/60"
              ].join(" ")}
            >
              {captainForm ? "Register as Captain" : "Captain Form Coming Soon"}
            </a>

            <a
              href={playerForm || undefined}
              target={playerForm ? "_blank" : undefined}
              rel={playerForm ? "noopener noreferrer" : undefined}
              aria-disabled={!playerForm}
              className={[
                "rounded-md px-6 py-3 font-semibold transition",
                playerForm
                  ? "border border-white text-white hover:border-uf-orange hover:bg-uf-orange"
                  : "cursor-not-allowed border border-white/40 text-white/60"
              ].join(" ")}
            >
              {playerForm ? "Register as Player" : "Player Form Coming Soon"}
            </a>
          </div>
        </div>

        {/* Right: ONE image, keeps aspect (no crop) */}
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

      {/* thin UF orange line at the bottom for flair */}
      <div className="h-1 w-full bg-uf-orange" />
    </section>
  );
}
