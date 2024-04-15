import Video1 from "../../Assets/Clips/Feat1.mp4";
import Video2 from "../../Assets/Clips/Feat2.mp4";
const Feats = () => {
  return (
    <div id="FeatR">
      <div id="top">
        <div id="SHeading" className="">
          <h1>Rilli</h1>
          <h1>Features</h1>
        </div>
      </div>
      <div className="liner">
        <div className="columner left">
          <div className="one ">
            <div className="placeH"></div>
            <h5>Interactive UI</h5>
          </div>

          <div className="one ">
            <div className="placeH"></div>
            <h5>Add/Delete slots</h5>
          </div>
          <div className="one ">
            <div className="placeH"></div>
            <h5>.htm to Rilli</h5>
          </div>
        </div>
        <div className="columner right">
          <div className="feat ">
            <video autoPlay muted loop className="placeH">
              <source src={Video2} type="video/mp4" className="" />
            </video>
            <h5>Interactive UI</h5>
          </div>
          <div className="feat">
            <video autoPlay muted loop className="placeH">
              <source src={Video1} type="video/mp4" className="" />
            </video>

            <h5>Todo List</h5>
          </div>
          <div className="feat ">
            <div className="placeH"></div>
            <h5>Slot finder</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feats;
