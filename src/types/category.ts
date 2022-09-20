export interface Author {
  profilePic: string;
  name: string;
}

export interface Ingredient {
  id: number;
  icon: string;
  description: string;
  quantity: string;
}

export interface Viewer {
  id: number;
  profilePic: string;
  name: string;
}

export interface CategoryObject {
  id: number;
  name: string;
  image?: HTMLImageElement;
  duration: string;
  serving: number;
}

export interface Category {
  containerStyle: object;
  categoryItem: CategoryObject;
  onPress: Function;
}

export interface TrendingRecipeObject {
  name: string;
  duration: string;
  serving: number;
  isBookmark: boolean;
  
}
