import React from "react";

import formatDate from "../../utils/dateFormat";

import "./MatchItem.css";

const MatchItem = ({ match }) => {
  return (
    <div className="match-item">
      <div className="match-item__title">{match.competition.name}</div>
      <div className="teams">
        <div className="teams__name">
          <div className="team team--home">{match.homeTeam.name}</div>
          <div className="team team--away">{match.awayTeam.name}</div>
        </div>
        <div className="teams__date">{formatDate(match.utcDate)}</div>
      </div>
    </div>
  );
};

export default MatchItem;
