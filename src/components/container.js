import Header from "./header";

const Container = ({ header, children }) => {
  return (
    <>
      <Header logo={header.logo} items={header.items} />
      {children}
    </>
  );
};

export default Container;
