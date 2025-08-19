"use client";

export default function FundraiserCTA() {
  const captainForm = "https://forms.gle/NPerg4KQtXWJvavR9";
  const playerForm  = "https://forms.gle/YVBeEqkZUUUrfGUN7";

  return (
    <section className="relative z-10 bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold text-uf-blue md:text-4xl">
          🎉 Tape Ball Fundraiser Tournament
        </h2>
        <p className="mt-2 text-lg text-gray-700">September 12–14, Gainesville, FL</p>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={captainForm}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-uf-blue px-6 py-3 font-semibold text-white transition hover:bg-uf-orange"
          >
            Register as Captain
          </a>
          <a
            href={playerForm}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-uf-blue px-6 py-3 font-semibold text-uf-blue transition hover:border-uf-orange hover:text-uf-orange"
          >
            Register as Player
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          All proceeds support the Gator Cricket Club at the University of Florida.
        </p>
      </div>
    </section>
  );
}
