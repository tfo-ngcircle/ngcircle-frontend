/* eslint-disable react/display-name */
import ReactMarkdown from "react-markdown";

function Md({ className, content }) {
  return (
    <div>
      <ReactMarkdown
        className={className}
        components={{
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside" {...props} />
          ),
          li: ({ node, ...props }) => <li className="pl-4" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default Md;
