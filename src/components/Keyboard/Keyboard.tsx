import s from './Keyboard.module.scss';
import Button from '../Button/Button';

type KeyboardProps = {
  bottomKeysElems: JSX.Element[];
  bottomLastKeysElems: JSX.Element[];
  topKeysElems: JSX.Element[];
  rightKeysElems: JSX.Element[];
  plusClickHandler: (operation: string) => void;
  minusClickHandler: (operation: string) => void;
  equalClickHandler: () => void;
};

const Keyboard: React.FC<KeyboardProps> = ({
  bottomKeysElems,
  bottomLastKeysElems,
  topKeysElems,
  rightKeysElems,
  plusClickHandler,
  equalClickHandler,
  minusClickHandler,
}) => {
  return (
    <div className={s.keyboard}>
      <div className={s.keyboard__box}>
        <div className={s.keyboard__top}>{topKeysElems}</div>
        <div className={s.keyboard__bottom}>
          {bottomKeysElems}
          {bottomLastKeysElems}
        </div>
      </div>
      <div className={s.keyboard__right}>
        <Button title="÷" />
        <Button title="x" />
        <Button title="-" onClick={minusClickHandler} />
        <Button title="+" onClick={plusClickHandler} />
        <Button title="=" onClick={equalClickHandler} />
      </div>
    </div>
  );
};

export default Keyboard;
