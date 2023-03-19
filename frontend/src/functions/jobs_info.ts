import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function useJobs(id: string) {
  const { data, error, isLoading } = useSWR(`/api/jobs/${id}`, fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
