import Footer from "./footer";
import Header from "./header";
import Language from "./language";

function Container({ header, footer, children }) {
  return (
    <>
      <Language className="fixed mx-6 my-10 right-0 bottom-0 md:top-0 md:bottom-auto xl:bottom-0 xl:top-auto z-50" />
      <Header logo={header.logo} items={header.items} pages={header.pages} />
      {children}
      <Footer
        logo={footer.logo}
        links={footer.links}
        locations={footer.locations}
      />
    </>
  );
}

export default Container;
