import Image from "next/image";
import { Button } from "./ui/Button.tsx";
import { Trophy } from "lucide-react";

export function HeroSection() {
  return (
    <section className="container grid lg:grid-cols-2 gap-8 py-12 md:py-20">
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-navy-900">
          Hy! I Am
          <br />
          Tejas Saste
        </h1>
        <p className="text-gray-600 md:text-lg max-w-[600px]">
          Product Engineer and Product Manager working in development and design
          field for 3.5 years so far,specialize user interface design.
        </p>
        <div className="flex gap-4 pt-4">
          <Button className="bg-red-500 hover:bg-red-600">Hire Me</Button>
          <Button variant="outline">Know More</Button>
        </div>
        <div className="flex items-center gap-2 pt-8">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
            <div className="w-6 h-6 text-red-500">⚛️</div>
          </div>
          <p className="text-sm text-gray-600">
            Product Designer and Developer
            <br />
            specialized in UI/UX.
          </p>
        </div>
        <div className="flex gap-8 pt-8">
          <Image
            src="/schwinn.svg"
            alt="Schwinn"
            width={100}
            height={30}
            className="opacity-50"
          />
          <Image
            src="/behance.svg"
            alt="Behance"
            width={100}
            height={30}
            className="opacity-50"
          />
          <Image
            src="/werum.svg"
            alt="Werum"
            width={100}
            height={30}
            className="opacity-50"
          />
          <Image
            src="/upwork.svg"
            alt="Upwork"
            width={100}
            height={30}
            className="opacity-50"
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute right-0 top-0 w-4/5 h-full bg-gradient-to-br from-purple-600 to-red-500 rounded-3xl" />
        <Image
          src="/placeholder.svg"
          alt="Tejas Saste"
          width={500}
          height={600}
          className="relative z-10"
          priority
        />
        <div className="absolute top-1/4 left-0 bg-white p-4 rounded-lg shadow-lg">
          <div className="text-4xl font-bold">10+</div>
          <div className="text-sm text-gray-600">
            Completed
            <br />
            projects
          </div>
        </div>
        <div className="absolute top-8 right-8 bg-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <div className="text-sm font-medium">
              Best Design
              <br />
              Awards
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
