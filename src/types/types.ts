export type ScreenState = {
  displayedNumber: string;
};

type LastRowKey = {
  title: string;
  classNameProp?: string;
};

export type KeyboardState = {
  topKeys: string[];
  rightKeys: string[];
  bottomKeys: string[];
  lastRowKeys: LastRowKey[];
  displayedNumber: string;
  prevNumber: number;
  mathOperation: string;
  prevMathOperation: string;
  result: number;
};

export enum TopKeysOperations {
  AC = 'AC',
  PlusMinus = '±',
  Percentage = '%',
}

export enum BottomLastKeys {
  Zero = '0',
  Comma = ',',
}
