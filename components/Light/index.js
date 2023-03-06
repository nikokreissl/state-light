import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, isOn, handleToggle, id }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(id);
      }}
      isOn={isOn}
    >
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
