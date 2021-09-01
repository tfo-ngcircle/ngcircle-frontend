/* eslint-disable react/display-name */
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import _, { map, groupBy } from "underscore";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

function Jobs({ jobs }) {
  const jobsByLocation = groupBy(jobs, (job) => job.location.name);

  return (
    <>
      {map(jobsByLocation, (jobss, location) => {
        return (
          <div className="container">
            <h2>{location}</h2>
            {jobss.map((item) => {
              return (
                <details
                  key={item.id}
                  className="border-t border-l border-r border-gray-200"
                >
                  <summary className="p-4 text-2xl font-semibold leading-loose border-b border-gray-200">
                    {item.position}
                  </summary>
                  <ReactMarkdown
                    className="px-10 py-4"
                    components={{
                      ul: ({ node, ...props }) => (
                        <ul className="list-disc list-inside" {...props} />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="pl-4" {...props} />
                      ),
                    }}
                  >
                    {item.description}
                  </ReactMarkdown>
                </details>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

const ListItem = styled.li`
&::before {
  content: "\2022";
  color: red;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
`;

export default Jobs;
