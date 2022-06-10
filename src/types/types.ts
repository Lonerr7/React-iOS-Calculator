export type ScreenState = {
  displayedNumber: string;
};

type LastRowKey = {
  title: string;
  classNameProp?: string;
};

export type KeyboardState = {
  topKeys: string[];
  displayedNumber: string;
  rightKeys: string[];
  bottomKeys: string[];
  lastRowKeys: LastRowKey[];
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
