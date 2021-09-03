import _, { map, groupBy } from "underscore";
import Md from "./md";

function Jobs({ jobs }) {
  const jobsByLocation = groupBy(jobs, (job) => job.location.name);

  return (
    <>
      {map(jobsByLocation, (jobss, location) => {
        return (
          <div className="container">
            <h2 className="pt-8 pb-2">{location}</h2>
            {jobss.map((item) => {
              return (
                <details
                  key={item.id}
                  className="border-t border-l border-r last:border-b border-gray-200 cursor-pointer"
                >
                  <summary className="p-4 text-2xl font-semibold leading-loose text-primary-dark">
                    {item.position}
                  </summary>
                  <Md
                    className="px-4 md:px-10 py-4"
                    content={item.description}
                  />
                </details>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default Jobs;
