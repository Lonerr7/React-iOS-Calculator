import Keyboard from '../Keyboard/Keyboard';
import Screen from '../Screen/Screen';
import s from './Caluclator.module.scss';

const Caluclator: React.FC = () => {
  return (
    <div className={s.calculator}>
      <Screen />
      <Keyboard />
    </div>
  );
};

export default Caluclator;
