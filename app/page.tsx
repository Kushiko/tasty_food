import { Collection } from "@/shared/components/shared/Collection";
import { Menu } from "@/shared/components/shared/Menu";
import { Perks } from "@/shared/components/shared/Perks";
import { About } from "@/shared/components/shared/About";
import Review from "@/shared/components/shared/Review";
import Footer from "@/shared/components/shared/Footer";
const Main: React.FC = () => {
  return (
    <>
      <Collection />
      <Perks />
      <Menu />
      <About />
      <Review />
      <Footer />
    </>
  );
};
export default Main;
