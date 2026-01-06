import {
  Header,
  Home,
  About,
  SkillsInfo,
  Services,
  Portfolio,
  GetInTouch,
  Clients,
  Contact,
  Footer,
  ScrollTop,
  ThemeToggle,
} from "@/components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <SkillsInfo />
        <Services />
        <Portfolio />
        <GetInTouch />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <ThemeToggle />
    </>
  );
}

export default App;
