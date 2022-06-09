import s from './Keyboard.module.scss';
import Button from '../Button/Button';
import { useAppSelector } from '../../hooks/hooks';

const Keyboard: React.FC = () => {
  const { topKeys, bottomKeys, rightKeys, lastRowKeys } = useAppSelector(
    (state) => state.keyboard
  );

  const topKeysElems = topKeys.map((key) => <Button title={key} key={key} />);
  const bottomKeysElems = bottomKeys.map((key) => (
    <Button title={key} key={key} />
  ));
  const bottomLastKeysElems = lastRowKeys.map((key) => (
    <Button title={key.title} classProp={key.classNameProp} key={key.title} />
  ));
  const rightKeysElems = rightKeys.map((key) => (
    <Button title={key} key={key} />
  ));

  return (
    <div className={s.keyboard}>
      <div className={s.keyboard__box}>
        <div className={s.keyboard__top}>{topKeysElems}</div>
        <div className={s.keyboard__bottom}>
          {bottomKeysElems}
          {bottomLastKeysElems}
        </div>
      </div>
      <div className={s.keyboard__right}>{rightKeysElems}</div>
    </div>
  );
};

export default Keyboard;
