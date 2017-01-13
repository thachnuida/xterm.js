/**
 * @license MIT
 */

export interface IBrowser {
  isNode: boolean;
  userAgent: string;
  platform: string;
  isFirefox: boolean;
  isMSIE: boolean;
  isMac: boolean;
  isIpad: boolean;
  isIphone: boolean;
  isMSWindows: boolean;
}

export interface ITerminal {
  element: HTMLElement;
  rowContainer: HTMLElement;
  textarea: HTMLTextAreaElement;
  ydisp: number;
  lines: string[];
  rows: number;
  browser: IBrowser;

  /**
   * Emit the 'data' event and populate the given data.
   * @param data The data to populate in the event.
   */
  handler(data: string);
  on(event: string, callback: () => void);
  scrollDisp(disp: number, suppressScrollEvent: boolean);
  cancel(ev: Event, force?: boolean);
}

/**
 * Handles actions generated by the parser.
 */
export interface IInputHandler {
  /** C0 BEL */ bell(): void;
  /** C0 LF */ lineFeed(): void;
  /** C0 CR */ carriageReturn(): void;
  /** C0 BS */ backspace(): void;
  /** C0 HT */ tab(): void;
  /** C0 SO */ shiftOut(): void;
  /** C0 SI */ shiftIn(): void;
  /** CSI @ */ insertChars(params);
  /** CSI A */ cursorUp(params: number[]): void;
  /** CSI B */ cursorDown(params: number[]): void;
  /** CSI C */ cursorForward(params: number[]): void;
  /** CSI D */ cursorBackward(params: number[]): void;
  /** CSI E */ cursorNextLine(params: number[]): void;
  /** CSI F */ cursorPrecedingLine(params: number[]): void;
  /** CSI G */ cursorCharAbsolute(params: number[]): void;
  /** CSI H */ cursorPosition(params: number[]): void;
  /** CSI J */ eraseInDisplay(params: number[]): void;
  /** CSI K */ eraseInLine(params: number[]): void;
  /** CSI L */ insertLines(params: number[]): void;
  /** CSI M */ deleteLines(params: number[]): void;
  /** CSI P */ deleteChars(params: number[]): void;
  /** CSI X */ eraseChars(params: number[]): void;
  /** CSI ` */ charPosAbsolute(params: number[]): void;
  /** CSI a */ HPositionRelative(params: number[]): void;
  /** CSI c */ sendDeviceAttributes(params: number[]): void;
  /** CSI m */ charAttributes(params: number[]): void;
  /** CSI n */ deviceStatus(params: number[]): void;
}
