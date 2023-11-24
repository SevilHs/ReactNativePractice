type RootStackParamList = {
  Home: undefined;
  Courses: undefined;
  Counter: undefined;
  Boxes: undefined;
  ChangeColor: undefined;
  PasswordCompliance: undefined;
};

type CourseItem = {
  courseName: string;
  courseDescription: string;
  id: string;
};

type ColorState = {
  red: number;
  green: number;
  blue: number;
};

type ColorAction = {
  type: 'INCREMENT' | 'DECREMENT';
  color: 'red' | 'green' | 'blue';
};
