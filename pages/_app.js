import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const allLights = [
  { name: "Living Room", isOn: false, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: false, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: false, id: 6 },
  { name: "Garden", isOn: false, id: 7 },
  { name: "Office", isOn: false, id: 8 },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(allLights);

  function handleToggle(lightId) {
    setLights(
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  const lightsTurnedOnArray = lights.filter((light) => light.isOn === true);

  const allLightsOff = lights.every((light) =>
    light.isOn === false ? true : false
  );

  const allLightsOn = lights.every((light) =>
    light.isOn === true ? true : false
  );

  return (
    <Layout isDimmed={allLightsOff}>
      <GlobalStyle />
      <Component
        lights={lights}
        {...pageProps}
        handleToggle={handleToggle}
        handleAllLightsOn={handleAllLightsOn}
        handleAllLightsOff={handleAllLightsOff}
        allLightsOff={allLightsOff}
        allLightsOn={allLightsOn}
        numberOfTurnedOnLights={lightsTurnedOnArray.length}
      />
    </Layout>
  );
}
