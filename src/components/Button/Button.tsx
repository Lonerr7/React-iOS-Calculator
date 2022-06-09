import s from './Button.module.scss';

type ButtonProps = {
  title: number | string;
  classProp?: string;
  onClick?: any
};

const Button: React.FC<ButtonProps> = ({ title, classProp, onClick }) => {
  return (
    <button onClick={() => onClick(title)} className={`${s.button} ${classProp}`}>
      <p>{title}</p>
    </button>
  );
};

export default Button;
