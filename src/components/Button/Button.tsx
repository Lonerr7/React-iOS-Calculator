import s from './Button.module.scss';

type ButtonProps = {
  title: number | string;
  classProp?: string;
};

const Button: React.FC<ButtonProps> = ({ title, classProp }) => {
  return (
    <button className={`${s.button} ${classProp}`}>
      <p>{title}</p>
    </button>
  );
};

export default Button;
