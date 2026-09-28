import { useQuery } from "@tanstack/react-query";
import { getProviders } from "../services/profileApi";

export function useProviders() {
  return useQuery({
    queryKey: ["providers"],
    queryFn: getProviders,
  });
}