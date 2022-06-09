export type ScreenState = {
  displayedNumber: number;
};

type LastRowKey = {
  title: string | number;
  classNameProp?: string;
};

export type KeyboardState = {
  topKeys: string[];
  rightKeys: string[];
  bottomKeys: number[];
  lastRowKeys: LastRowKey[];
};
