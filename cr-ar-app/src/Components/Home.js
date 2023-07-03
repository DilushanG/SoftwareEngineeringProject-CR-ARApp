import "../Styles/HomeStyles.css";
import "../Images/arrow.png";

function Home() {
    return (<>
    <div className="home">
        <div className="front">
        <div className="box">
          <div className="h-wrapper">
            <div className="h">
              <div className="overlap-group">
                <h1 className="the-expert-in">
                  <span className="text-wrapper">The Expert, </span>
                  <span className="span">in Anything</span>
                </h1>
                <div className="was-once-a-beginner">
                  <span className="span">was once</span>
                  <span className="text-wrapper-2">&nbsp;</span>
                  <span className="text-wrapper">A Beginner.</span>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      <div className="box">
      <div className="button-wrapper">
        <div className="button">
          <a className="text-wrapper-3" href="/#">Lets Go</a>
          <img className="arrow" alt="arrow" src="../Images/arrow.png"/>
        </div>
      </div>
    </div>
        <div className="topBox">
            Welcome GowsiKan
        </div>
    </div>
    </>);
}

export default Home;