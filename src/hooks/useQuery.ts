import { useLocation } from "react-router-dom";

export function useQuery(str: string): string {
  const result = new URLSearchParams(useLocation().search).get(str);
  return result?.length ? result : "";
}
