import { Rocket } from "lucide-react";

const HeroIllustration = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-4/3 flex items-center justify-center perspective-1000">
      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50"></div>
      <div className="relative w-full max-w-lg bg-background-dark border border-gray-700 rounded-xl shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700 bg-surface-dark">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 px-3 py-1 bg-black/30 rounded-full text-[10px] text-gray-400 font-mono">
            app.tsx
          </div>
        </div>

        <div className="p-6 font-mono text-sm space-y-3 leading-relaxed">
          <div className="flex gap-2">
            <span className="text-gray-600 select-none">1</span>
            <div>
              <span className="text-purple-400">import</span>{" "}
              <span className="text-white">React</span>{" "}
              <span className="text-purple-400">from</span>{" "}
              <span className="text-green-400">'react'</span>;
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-600 select-none">2</span>
            <div>
              <span className="text-purple-400">export const</span>{" "}
              <span className="text-yellow-400">Future</span> = (){" "}
              <span className="text-purple-400">=&gt;</span> {"{"}
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-600 select-none">3</span>
            <div className="pl-4">
              <span className="text-blue-400">const</span>{" "}
              <span className="text-white">growth</span> ={" "}
              <span className="text-orange-400">"Exponential"</span>;
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-600 select-none">4</span>
            <div className="pl-4">
              <span className="text-purple-400">return</span> (
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-600 select-none">5</span>
            <div className="pl-8">
              <span className="text-gray-300">
                &lt;DigitalSuccess data={"{growth}"} /&gt;
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-600 select-none">6</span>
            <div className="pl-4">)</div>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-600 select-none">7</span>
            <div>{"}"}</div>
          </div>
          <div className="w-2 h-5 bg-primary animate-pulse mt-2 ml-4"></div>
        </div>
      </div>

      <div
        className="absolute -bottom-6 -left-4 md:-left-10 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 dark:border-gray-600 flex items-center gap-4 animate-bounce"
        style={{ animationDuration: "4s" }}
      >
        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-green-600 dark:text-green-400">
          <Rocket className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs text-text-muted dark:text-gray-400 font-bold uppercase">
            Rendimiento
          </p>
          <p className="font-display font-bold text-xl text-text-main dark:text-white">
            +240%
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroIllustration;
