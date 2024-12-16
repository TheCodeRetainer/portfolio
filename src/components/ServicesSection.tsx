import { Code2, Palette, PenTool } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="container py-20">
      <div className="grid gap-8 md:grid-cols-4">
        <div className="p-8 text-white bg-purple-600 rounded-3xl">
          <div className="text-5xl font-bold">3+</div>
          <div className="mt-2"></div>
        </div>
        <div className="p-8 rounded-3xl border">
          <Code2 className="mb-4 w-8 h-8 text-teal-500" />
          <h3 className="mb-2 text-xl font-semibold">Front End Developer</h3>
          <p className="text-gray-600">
            We provide with a structured course that will teach you..
          </p>
        </div>
        <div className="p-8 rounded-3xl border">
          <PenTool className="mb-4 w-8 h-8 text-orange-500" />
          <h3 className="mb-2 text-xl font-semibold">UI/UX Designer</h3>
          <p className="text-gray-600"></p>
        </div>
        <div className="p-8 rounded-3xl border">
          <Palette className="mb-4 w-8 h-8 text-blue-500" />
          <h3 className="mb-2 text-xl font-semibold">Branding Designer</h3>
          <p className="text-gray-600">
            A Brand Designer is someone who has a genuine..
          </p>
        </div>
      </div>
    </section>
  );
}
