import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsAction } from "../store/itemsSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsAction.addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div>
        Fetch Done: {fetchStatus.fetchDone}
        Currently Fetching: {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};

export default FetchItems;
