export const getName = ({
  name,
  firstName,
}: {
  firstName: string;
  lastName?: string | null;
  name?: string | null;
}) => {
  if (name && name.length > 0) {
    return name;
  }
  return firstName;
};
