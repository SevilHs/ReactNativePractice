type RootStackParamList = {
  SearchScreen: undefined;
  DetailsScreen: {id: string};
};

type restaurant = {
  price: string;
  name: string;
  image_url: string;
  rating: number;
  review_count: number;
  is_closed: boolean;
  phone: string;
  location: {
    city: string;
    address1: string;
  };
  id: string;
};
