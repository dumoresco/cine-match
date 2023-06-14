import { useState } from "react";
import { useEnterteinmentListProps } from "../interfaces";

export const useEnterteinmentList = ({
  url,
  setData,
}: useEnterteinmentListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const onScrollEndDrag = async () => {
    setLoading(true);

    try {
      const newUrl = url.replace(/page=\d+/, `page=${currentPage + 1}`);
      const response = await fetch(newUrl);
      const data = await response.json();
      setData((oldData: any) => [...oldData, ...data.results]);
      setCurrentPage((oldPage) => oldPage + 1);
      console.log("[DATA]", data);
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  return { onScrollEndDrag, loading };
};
