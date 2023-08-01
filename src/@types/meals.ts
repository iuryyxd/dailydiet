export interface DataFormHookType {
  name: string;
  description: string | undefined;
  date: Date;
  time: Date;
  isOnDiet: NonNullable<boolean | undefined>;
}

export interface MealType extends DataFormHookType {
  id: string;
}

export interface mealsType {
  date: Date;
  items: {
    name: string;
    description: string | undefined;
    date: Date;
    time: Date;
    isOnDiet: NonNullable<boolean | undefined>;
    id: string;
  }[];
}
