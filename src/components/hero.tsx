import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="h-1 w-full bg-uf-orange" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-uf-blue md:text-5xl">
            🏆 Gator Cricket — National Collegiate Champions
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Proudly representing the University of Florida and the Gainesville cricket community.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-200 md:h-56">
            <Image src="/images/team.jpg" alt="Gator Cricket Team" fill className="object-cover" priority />
          </div>
          <div className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-200 md:h-56">
            <Image src="/images/trophy.jpg" alt="National Champions Trophy" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
