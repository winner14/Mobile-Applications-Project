import { userData } from "./Data";

export function getUserData(Id) {
  Id = 1;
  let name;
  userData.map((data) => {
    if (data.Id === Id) {
      name = data.name;
    }
  });
  return name;
}
