import { useEffect, useState } from "react";
import { getGroups } from "../services/groupService";

const useGroups = () => {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getGroups()
          .then(data => setGroups(data))
          .catch(err => setError(err))
          .finally(() => setLoading(false));
      }, []);

    return { groups, loading, error };
};

export default useGroups;