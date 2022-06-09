import { useAppSelector } from '../../hooks/hooks';
import s from './Screen.module.scss';

const Screen: React.FC = () => {
  const displayedNumber = useAppSelector(
    (state) => state.keyboard.displayedNumber
  );

  return (
    <div className={s.screen}>
      <p>{displayedNumber}</p>
    </div>
  );
};

export default Screen;
