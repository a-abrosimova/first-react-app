import React, { useEffect, useState } from "react";
import { getMatches } from "../../utils/api";
import MatchItem from "../matchItem/MatchItem";

import "./MatchesList.css";

const MatchesList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches.then((result) => {
      setMatches(result.data.matches);
    });
  }, []);

  return matches.length ? (
    <div className="list-container">
      {matches.map((item) => (
        <MatchItem key={item.id} match={item} />
      ))}
    </div>
  ) : (
    <div className="loader">Идёт загрузка...</div>
  );
};

export default MatchesList;
