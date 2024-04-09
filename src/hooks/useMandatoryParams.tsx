import { useParams } from "react-router-dom";

// return the route params with the specif type
// bc the return type of useParams might be undefined
export function useMandatoryParams<T extends Record<string, any>>() {
  const params = useParams<T>();
  return params as T;
}
