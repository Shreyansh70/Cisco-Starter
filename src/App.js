import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import GetIp from "./components/GetIp";
import Latency from "./components/Latency";
function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />

      <Exhibit name="Ipv4 Address : ">
        <GetIp isipv4={true} />
      </Exhibit>

      <Exhibit name="Ipv6 Address : ">
        <GetIp isipv4={false} />
      </Exhibit>

      <Exhibit name="Latency : ">
        <Latency />
      </Exhibit>
      
    </div>
  );
}

export default App;
