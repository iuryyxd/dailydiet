export interface DataFormHookType {
  name: string;
  description: string | undefined;
  date: string;
  time: string;
  isOnDiet: NonNullable<boolean | undefined>;
}

export interface MealType extends DataFormHookType {
  id: string;
}

export interface mealsType {
  date: Date | string;
  items: {
    name: string;
    description: string | undefined;
    date: string;
    time: string;
    isOnDiet: NonNullable<boolean | undefined>;
    id: string;
  }[];
}

export interface ParamsType {
  name: string;
  description: string | undefined;
  date: string;
  time: string;
  isOnDiet: NonNullable<boolean | undefined>;
  id: string;
}
