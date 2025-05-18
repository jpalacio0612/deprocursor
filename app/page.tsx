import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center  min-h-[calc(100vh-172px)] sm:min-h-[calc(100vh-116px)] p-24 bg-[#F8FAFC] bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
      <section className="max-w-5xl flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-left text-white">
          Estrategias que transforman
        </h1>
        <p className="text-xl text-white/80">
          Este programa utiliza la actividad física como medio terapéutico en
          los grupos Generosidad y Libertad del bloque Alcaldía, promoviendo el
          bienestar y la reintegración social de adolescentes.
        </p>
        <div>
          <p className="text-xl text-white/80 font-bold">
            Maria Del Mar Rengifo
          </p>
          <p className="text-md text-white/80">Terapia Ocupacional</p>
        </div>
        <div className="flex gap-4 w-full">
          <Link href="/estrategias" className="flex-1/2">
            <Button className="bg-emerald-700 text-xl h-12 w-full">
              Estrategias
            </Button>
          </Link>
          <Link href="/estrategias" className="flex-1/2">
            <Button className="bg-emerald-700 text-xl h-12 w-full">
              Galeria
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
