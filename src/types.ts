export interface Word {
  id: number;
  word: string;
  meaning: string;
  phonetic: string;
  audioUS: string;
  audioUK: string;
}

export interface DictationState {
  input: string;
  showMeaning: boolean;
  showWord: boolean;
  correctLetters: boolean[];
}