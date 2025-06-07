import { Mark } from '../interfaces/Accounts';

export const markParser = (mark: string): Mark[] => {
  const delimiter = ';';

  return mark
    .split(delimiter)
    .map(item => ({ text: item }))
    .filter(item => item);
};
