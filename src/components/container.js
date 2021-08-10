import Navigation from "./header";

const Container = ({ header, children }) => {
  return (
    <>
      <Navigation logo={header.logo} items={header.items} />
      {children}
    </>
  );
};

export default Container;
