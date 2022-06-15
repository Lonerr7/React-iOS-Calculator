import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  changeDisplayedNumber,
  operateTopRowButtons,
  setEqualOperation,
  setPlusOperation,
  setMinusOperation
} from '../../redux/keyboardSlice';
import Button from '../Button/Button';
import Keyboard from './Keyboard';

const KeyboardContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bottomKeys, lastRowKeys, topKeys, rightKeys } = useAppSelector(
    (state) => state.keyboard
  );

  const numberClickHandler = (number: string) => {
    dispatch(changeDisplayedNumber(number));
  };

  const topRowButtonClickHandler = (operation: string) => {
    dispatch(operateTopRowButtons(operation));
  };

  const bottomRowButtonClickHandler = (elem: string) => {
    dispatch(changeDisplayedNumber(elem));
  };

  const plusClickHandler = (operation: string) => {
    dispatch(setPlusOperation(operation));
  };

  const minusClickHandler = (operation: string) => {
    dispatch(setMinusOperation(operation))
  }

  const equalClickHandler = () => {
    dispatch(setEqualOperation());
  };

  const topKeysElems = topKeys.map((key) => (
    <Button title={key} key={key} onClick={topRowButtonClickHandler} />
  ));
  const bottomKeysElems = bottomKeys.map((key) => (
    <Button title={key} key={key} onClick={numberClickHandler} />
  ));
  const bottomLastKeysElems = lastRowKeys.map((key) => (
    <Button
      title={key.title}
      classProp={key.classNameProp}
      key={key.title}
      onClick={bottomRowButtonClickHandler}
    />
  ));
  const rightKeysElems = rightKeys.map((key) => (
    <Button title={key} key={key} />
  ));

  return (
    <Keyboard
      bottomKeysElems={bottomKeysElems}
      bottomLastKeysElems={bottomLastKeysElems}
      topKeysElems={topKeysElems}
      rightKeysElems={rightKeysElems}
      plusClickHandler={plusClickHandler}
      equalClickHandler={equalClickHandler}
      minusClickHandler={minusClickHandler}
    />
  );
};

export default KeyboardContainer;
