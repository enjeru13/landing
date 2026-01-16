import { ABOUT_CONTENT } from "../../../data/about-content";

const AboutTeam = () => {
  const { title, subtitle, members } = ABOUT_CONTENT.team;

  return (
    <section className="w-full bg-background-light dark:bg-background-dark py-20 md:py-28 overflow-hidden transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <div key={idx} className="group flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-xl aspect-3/4 bg-gray-200 dark:bg-surface-dark">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    {member.socials.map((Icon, i) => (
                      <button
                        key={i}
                        className="text-white hover:text-accent transition-colors"
                      >
                        <Icon size={20} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text-main dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
