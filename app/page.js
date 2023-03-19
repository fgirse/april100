import { Footer, InfoBar ,MenuBar, Team } from '../components';
import { About, Philosophy, Wohin, Event, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <MenuBar className="mt-8" />
    <InfoBar/>
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Philosophy />
    </div>
    <div className="relative">
      <Event />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-03 z-0" />
      <Team />
      <Wohin />
    </div>
    <Footer />
  </div>
);

export default Page;
