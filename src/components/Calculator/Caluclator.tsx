import KeyboardContainer from '../Keyboard/KeyboardContainer';
import Screen from '../Screen/Screen';
import s from './Caluclator.module.scss';

const Caluclator: React.FC = () => {
  return (
    <div className={s.calculator}>
      <Screen />
      <KeyboardContainer />
    </div>
  );
};

export default Caluclator;
