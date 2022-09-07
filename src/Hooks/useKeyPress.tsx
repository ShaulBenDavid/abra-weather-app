import { useEffect, useState } from "react";

// Types
type KeyProps = {
    key: string;
}
// Hook for handle key press
const useKeyPress = function (targetKey: string): boolean {
    const [keyPressed, setKeyPressed] = useState<boolean>(false);
  
    function downHandler({ key }: KeyProps): void {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
  
    const upHandler = ({ key }: KeyProps): void => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
  
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    });
  
    return keyPressed;
};
  
export default useKeyPress;