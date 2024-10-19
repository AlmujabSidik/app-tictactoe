import { Button } from "./ui/button";

const ButtonGame = ({ children, handleClick }) => {
  return (
    <Button onClick={handleClick} size="sm">
      {children}
    </Button>
  );
};

export default ButtonGame;
