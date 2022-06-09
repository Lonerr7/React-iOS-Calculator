import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  changeDisplayedNumber,
  operateTopRowButtons,
} from '../../redux/keyboardSlice';
import Button from '../Button/Button';
import Keyboard from './Keyboard';

const KeyboardContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bottomKeys, lastRowKeys, topKeys } = useAppSelector(
    (state) => state.keyboard
  );

  const numberClickHandler = (number: string) => {
    dispatch(changeDisplayedNumber(number));
  };

  const topRowButtonClickHandler = (operation: string) => {
    dispatch(operateTopRowButtons(operation));
  };

  const topKeysElems = topKeys.map((key) => <Button title={key} key={key} onClick={topRowButtonClickHandler} />);
  const bottomKeysElems = bottomKeys.map((key) => (
    <Button title={key} key={key} onClick={numberClickHandler} />
  ));
  const bottomLastKeysElems = lastRowKeys.map((key) => (
    <Button title={key.title} classProp={key.classNameProp} key={key.title} />
  ));

  return (
    <Keyboard
      bottomKeysElems={bottomKeysElems}
      bottomLastKeysElems={bottomLastKeysElems}
      topKeysElems={topKeysElems}
    />
  );
};

export default KeyboardContainer;
