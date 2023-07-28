export interface mealsType {
  date: string;
  items: {
    title: string;
    description: string;
    date: Date;
    isOnDiet: boolean;
    id: number;
  }[];
}
