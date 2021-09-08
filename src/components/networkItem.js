import MyImage from "./image";
import MyLink from "./link";
import Md from "./md";

function NetworkItem({ item, showMedia }) {
  return (
    <div
      className={`flex flex-col px-10 lg:px-14 py-14 hover:z-20 z-10 transition-shadow duration-300 ${
        showMedia ? "bg-white shadow-lg sm:hover:shadow-2xl" : "bg-transparent"
      }`}
    >
      {showMedia ? (
        <div className="h-40 overflow-hidden content-center items-center mx-10 relative">
          <MyImage image={item.media} layout="fill" objectFit="contain" />
        </div>
      ) : (
        ""
      )}
      <Md className="flex-grow pt-6" content={item.content}></Md>
      {item.redirectValue && (
        <MyLink
          label={item.redirectTitle}
          destination={item.redirectValue}
          className={
            showMedia
              ? "text-primary uppercase"
              : "uppercase border border-white mx-auto px-4 rounded hover:bg-primary-dark"
          }
        />
      )}
    </div>
  );
}

export default NetworkItem;
