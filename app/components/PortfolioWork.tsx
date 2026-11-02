// Assets
import { portfolioWork } from "../data/work";
import WorkCard from "./WorkCard";

const PortfolioWork = () => {
  return (
    <section id="portfolio" className="w-full px-6">
      <h2 className="mb-12 text-center text-3xl">Portfolio</h2>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        {portfolioWork.map((work) => (
          <WorkCard key={work.name} {...work} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioWork;
