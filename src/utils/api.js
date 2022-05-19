import axios from "axios";

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const params = `?client=${id}?client_secret=${sec}`;

const getProfile = (username) => {
  return axios
    .get(`https://api.github.com/users/${username}${params}`)
    .then((user) => user.data)
    .catch(handleError);
};

const getRepos = (username) => {
  return axios.get(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  );
};

const getStarCount = (repos) => {
  return repos.data.reduce((count, repo) => count + repo.stargazers_count, 0);
};

const calculateScore = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);
  return followers * 3 + totalStars;
};

const handleError = (error) => {
  console.warn(error);
  return null;
};

const sortPlayers = (players) => {
  return players.sort((a, b) => b.score - a.score);
};

const getUserData = (player) => {
  return axios
    .all([getProfile(player), getRepos(player)])
    .then(([profile, repos]) => ({
      profile,
      score: calculateScore(profile, repos),
    }))
    .catch(handleError);
};

export const battle = (players) => {
  return axios
    .all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
};

export const fetchPopularRepos = (language) => {
  const encodeURI = window.encodeURI(
    "https://api.github.com/search/repositories?q=stars:>1+language:" +
      language +
      "&sort=stars&order=desc&type=Repositories"
  );
  return axios
    .get(encodeURI)
    .then((response) => response.data.items)
    .catch((error) => console.error(error));
};
