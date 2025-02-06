export interface ICardProps {
    id: number,
    name: string,
    summaryText: string,
    genres?: (string)[] | null;
    imageUrl: string,
    score: number
}