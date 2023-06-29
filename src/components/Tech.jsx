import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* We are using technologies.map to output different technologies I know */}
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          tech
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
