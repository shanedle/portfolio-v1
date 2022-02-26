import { ListIconContainer, ListIcon, ListIconText } from "./SkillsStyles";
import { icons } from "../../constants/constants";

function SkillIcon({ icon: Icon }) {
  return (
    <ListIcon>
      <Icon size={20} />
    </ListIcon>
  );
}

const SkillsIcons = () => {
  return (
    <>
      {icons.map((item, idx) => (
        <ListIconContainer key={idx}>
          <SkillIcon icon={item.icon} color={item.color} />
          <ListIconText>{item.name} </ListIconText>
        </ListIconContainer>
      ))}
    </>
  );
};

export default SkillsIcons;
