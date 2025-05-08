import { useEffect } from "react";
import { useCards } from "../src/context/cardsContext";

function useResetSearchOnMount() {
    const { resetSearch } = useCards();

    useEffect(() => {
        resetSearch();
    }, []);
}

export default useResetSearchOnMount;