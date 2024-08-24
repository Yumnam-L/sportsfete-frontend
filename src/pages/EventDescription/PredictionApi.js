export const PredictionApi = async (name, token, setOpenArr) => {
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
         
  
          const openMatches = [];
  
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
              dateTime : dateTime,
              venue : match.venue,
            };
            
            if (match.status === "BETTING") {
              openMatches.push(matchObj);
            }
          });
  
          setOpenArr(openMatches);
  
          return data;
        })
        .catch((error) => console.error(error));
    }
  };
  
  export default PredictionApi;