declare module "react-ios-switch" {
  export default class Switch extends React.Component<
    IOSSwitchProps,
    IOSSwitchState
  > {
    checked: boolean;
    className: string;
    disabled: boolean;
    handleColor: string;
    name: string;
    offColor: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onColor: string;
    pendingOffColor: string;
    pendingOnColor: string;
    readOnly: boolean;
    style: React.CSSProperties;
  }
}
