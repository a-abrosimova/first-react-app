import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.football-data.org/v2/",
  headers: { "X-Auth-Token": process.env.REACT_APP_API_KEY },
});

const getMatches = instance.get("matches");

export { getMatches };
