export interface ILiveCoinWatchData {
  code: string;
  rate: number;
  volume: number;
  cap?: number;
  delta?: {
    hour: number;
    day: number;
    week: number;
    month: number;
    quarter: number;
    year: number;
  };
}

export interface ILiveCoinWatchState {
  liveCoinWatchData: ILiveCoinWatchData[] | [];
}
