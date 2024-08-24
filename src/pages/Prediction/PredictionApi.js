export const PredictionApi = async (
  name,
  token,
  setLost,
  setOpenArr,
  setWon,
  setPredicted,
  setBetDoneMap
) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  if (name) {
    await fetch(BASE_URL + `api/events/bettingMatches/${name}`, {
      method: "GET",
      headers: {
        token: `${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const matches = data.matches;

        const wonMatches = [];
        const lostMatches = [];
        const openMatches = [];
        const predictedMatches = [];

        matches.forEach((match) => {
          const dateTime = new Date(match.time).toLocaleString();
          const matchObj = {
            team1: { name: match.dept_1_name },
            team2: { name: match.dept_2_name },
            didWin: match.didWin,
            betDone: match.betDone,
            id: match._id,
            status: match.status,
            winner: match.winner,
            minBet: match.minBet,
            maxBet: match.maxBet,
            dateTime: dateTime,
            venue: match.venue,
          };
          // console.log(matchObj);
          if (match.didWin && match.betDone) {
            wonMatches.push(matchObj);
            wonMatches.sort();
          } else if (
            (match.status === "LIVE" || match.status === "PAST") &&
            !match.didWin &&
            match.betDone
          ) {
            lostMatches.push(matchObj);
            lostMatches.sort();
          } else if (match.status === "BETTING" && match.betDone) {
            predictedMatches.push(matchObj);
            predictedMatches.sort();
          } else if (match.status === "BETTING") {
            openMatches.push(matchObj);
            const betDoneObj = openMatches.reduce((acc, item) => {
              acc[item.id] = item.betDone;
              return acc;
            }, {});
            setBetDoneMap(betDoneObj);
          }
        });
        setWon(wonMatches);
        setLost(lostMatches);
        setOpenArr(openMatches);
        setPredicted(predictedMatches);
        return data;
      })
      .catch((error) => console.error(error));
  }
};

export default PredictionApi;
