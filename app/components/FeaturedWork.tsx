// Assets
import { featuredWork } from "../data/work";
import WorkCard from "./WorkCard";

const FeaturedWork = () => {
  return (
    <section id="featured-work" className="w-full px-6">
      <h2 className="mb-12 text-center text-3xl">Featured Work</h2>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        {featuredWork.map((work) => (
          <WorkCard key={work.name} {...work} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
