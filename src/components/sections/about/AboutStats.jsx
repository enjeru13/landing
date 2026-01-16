import { ABOUT_CONTENT } from "../../../data/about-content";

const AboutStats = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-surface-dark py-16 transition-colors duration-300 border-y border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10">
          {ABOUT_CONTENT.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4"
            >
              <span className="text-5xl font-black text-accent mb-2">
                {stat.value}
              </span>
              <span className="text-text-main dark:text-white font-bold text-lg">
                {stat.label}
              </span>
              <span className="text-text-muted dark:text-gray-400 text-sm mt-1">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
