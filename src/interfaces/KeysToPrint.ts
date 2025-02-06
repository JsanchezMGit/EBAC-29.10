export interface IKeysToPrint {
    type: string;
    language: string;
    genres: string;
    status: string;
    premiered: string;
    ended: KeysToPrintDefault;
    runtime: KeysToPrintDefault;
    rating: KeysToPrintFrom;
  }
  export interface KeysToPrintDefault {
    label: string;
    defaultValue: string;
  }
  export interface KeysToPrintFrom {
    label: string;
    valueFrom: string;
  }
  