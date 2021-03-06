import {
  ListContainer,
  ListIconContainer,
  ListIcon,
  ListIconText,
} from "./SkillsStyles";
import { icons } from "../../constants/constants";

function SkillIcon({ icon: Icon }) {
  return (
    <ListIcon>
      <Icon />
    </ListIcon>
  );
}

const SkillsIcons = () => {
  return (
    <>
      <ListContainer>
        {icons.map((item, idx) => (
          <ListIconContainer key={idx}>
            <SkillIcon icon={item.icon} color={item.color} />
            <ListIconText>{item.name} </ListIconText>
          </ListIconContainer>
        ))}
      </ListContainer>
    </>
  );
};

export default SkillsIcons;
