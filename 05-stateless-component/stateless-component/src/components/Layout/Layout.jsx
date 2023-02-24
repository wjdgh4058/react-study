import { Footer } from "./Footer";
import { Header } from "./Header";

export function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

/* export function OnlyHeaderLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export function WithSidebarLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Sidebar />
      <Footer />
    </>
  );
} */
