export interface ToggleSwitchProps {
  switchType: "mode" | "temp";
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
  checked?: boolean;
}
