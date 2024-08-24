export const PastFixtures = async (
  name,
  token,

  setPast
) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  if (name) {
    await fetch(BASE_URL + `api/events/matches/${name}`, {
      method: "GET",
      headers: {
        token: `${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const matches = data.matches;
// console.log(data);

        const pastMatches = [];

        matches.forEach((match) => {
          const dateTime = new Date(match.time).toLocaleString();
          const matchObj = {
            team1: { name: match.dept_1_name, score: match.dept_1_score },
            team2: { name: match.dept_2_name, score: match.dept_2_score },
            didWin: match.didWin,
            betDone: match.betDone,
            id: match._id,
            status: match.status,
            winner: match.winner,
            dateTime : dateTime,
            venue:match.venue
          };
          if (match.status === "PAST") {
            pastMatches.push(matchObj);
          }
        });
        
        setPast(pastMatches);
        return data;
      })
      .catch((error) => console.error(error));
  }
};

export default PastFixtures;
