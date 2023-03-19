import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function useUsers(id: string) {
  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher);
  return {
    user: data,
    isLoading,
    isError: error,
  };
}
