const fetchPointsData = async (setPointsSplit, setIsLoading, dept) => {
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
    setIsLoading(true);
    await fetch(BASE_URL + "api/leaderboard/dept/"+dept, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
        //   console.log(data.eventScores);
          const entries = Object.entries(data.eventScores);
        //   console.log(entries);
          setPointsSplit(entries);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  export default fetchPointsData;
  