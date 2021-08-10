import Footer from "./footer";
import Header from "./header";

const Container = ({ header, footer, children }) => {
  return (
    <>
      <Header logo={header.logo} items={header.items} />
      {children}
      <Footer
        logo={footer.logo}
        links={footer.links}
        locations={footer.locations}
      />
    </>
  );
};

export default Container;
