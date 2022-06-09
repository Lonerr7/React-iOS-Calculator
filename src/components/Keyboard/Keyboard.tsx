import s from './Keyboard.module.scss';
import Button from '../Button/Button';

type KeyboardProps = {
  bottomKeysElems: JSX.Element[];
  bottomLastKeysElems: JSX.Element[];
  topKeysElems: JSX.Element[];
};

const Keyboard: React.FC<KeyboardProps> = ({
  bottomKeysElems,
  bottomLastKeysElems,
  topKeysElems,
}) => {
  return (
    <div className={s.keyboard}>
      <div className={s.keyboard__box}>
        <div className={s.keyboard__top}>
          {/* <Button title="AC" />
          <Button title="±" />
          <Button title="%" /> */}
          {topKeysElems}
        </div>
        <div className={s.keyboard__bottom}>
          {bottomKeysElems}
          {bottomLastKeysElems}
        </div>
      </div>
      <div className={s.keyboard__right}>
        <Button title="÷" />
        <Button title="x" />
        <Button title="-" />
        <Button title="+" />
        <Button title="=" />
      </div>
    </div>
  );
};

export default Keyboard;
