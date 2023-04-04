import ListGroup from "./components/ListGroup";
import Card from "./components/Card";
import "./App.css";
import BreadCrumbs from "./components/BreadCrumb";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <h1>Video Games</h1>
      <div className="card-container">
        <Card
          title="Valorant"
          img="https://tinyurl.com/mrxe8xzv"
          description="Valorant is a free-to-play first-person tactical hero shooter
      developed and published by Riot Games"
        />

        <Card
          title="CSGO"
          img="https://tinyurl.com/2p9h6mnj"
          description="Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment."
        />

        <Card
          title="Apex Legends"
          img="https://tinyurl.com/2p9456mj"
          description="Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters with distinctive abilities, called Legends"
        />
      </div>
    </>
  );
}

export default App;
