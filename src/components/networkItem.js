import MyImage from "./image";
import Md from "./md";

function NetworkItem({ media, content }) {
  return (
    <div
      className={`flex flex-col px-10 lg:px-14 py-14 shadow-lg sm:hover:shadow-2xl z-10 transition-shadow duration-300 bg-white`}
    >
      <div className="h-40 overflow-hidden content-center items-center mx-10 relative">
        <MyImage image={media} layout="fill" objectFit="contain" />
      </div>
      <Md className="flex-grow pt-6" content={content}></Md>
    </div>
  );
}

export default NetworkItem;
