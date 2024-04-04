import './Button.scss';

interface IButton {
  onclick?: () => void;
  children: string;
}

const Button = ({onclick, children}: IButton) => {
  return (
      <button className="button" onClick={onclick}>{children}</button>
  );
};

export default Button;
