import * as React from "react";
import { getNames } from "firestore";
import { compareDate, Random } from "utils";

type SelectList = {
  id: number;
  name: string;
  category: string;
  expire: number;
};

const chooseNames = (allNames: SelectList[]): SelectList[] => {
  let names = [];
  const now = new Date().getTime();
  while (names.length < 3) {
    const random = Random(allNames.length);
    const name = allNames[random];
    compareDate(name.expire, now) && names.push(name);
  }
  return names;
};

export function useNames(gender: string) {
  const [data, setData] = React.useState<SelectList[] | null>(null);
  const [error, setError] = React.useState<unknown | null>(null);

  const execute = React.useCallback(async () => {
    try {
      const responce = await getNames();
      const names = chooseNames(responce.get(gender));
      setData(names);
    } catch (error: unknown) {
      setError(error);
    }
  }, [gender]);

  React.useEffect(() => {
    if (data === null) {
      execute();
    }
  }, [execute, data]);

  const reset = () => setData(null);

  return { data, error, reset };
}
