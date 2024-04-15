import Base from "./Home/Base";
import Feats from "./Home/Feats";
import Desc from "./Home/Desc";
import FAQ from "./Home/FAQ";
import Social from "./Home/Social";
const home = () => {
  return (
    <div id="home">
      <Base />
      <Desc />
      <Feats />
      <FAQ />
      <Social />
    </div>
  );
};

export default home;
