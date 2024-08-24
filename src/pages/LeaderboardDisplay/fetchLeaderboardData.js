const fetchLeaderboardData = async (setLeaderBoardData, setIsLoading) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  setIsLoading(true);
  await fetch(BASE_URL + "api/leaderboard", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        // console.log(data);
        const entries = Object.entries(data);
        // console.log(entries);
        setLeaderBoardData(entries);
      }
    })
    .catch((err) => {
      // console.log(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export default fetchLeaderboardData;
