import { Code2, Palette, PenTool } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="container py-20">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="bg-purple-600 text-white p-8 rounded-3xl">
          <div className="text-5xl font-bold">3+</div>
          <div className="mt-2">
            Years
            <br />
            Working
            <br />
            Experience
          </div>
        </div>
        <div className="p-8 border rounded-3xl">
          <Code2 className="w-8 h-8 text-teal-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Front End Developer</h3>
          <p className="text-gray-600">
            We provide with a structured course that will teach you..
          </p>
        </div>
        <div className="p-8 border rounded-3xl">
          <PenTool className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
          <p className="text-gray-600">
            The user interface is the graphical layout..
          </p>
        </div>
        <div className="p-8 border rounded-3xl">
          <Palette className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Branding Designer</h3>
          <p className="text-gray-600">
            A Brand Designer is someone who has a genuine..
          </p>
        </div>
      </div>
    </section>
  );
}
