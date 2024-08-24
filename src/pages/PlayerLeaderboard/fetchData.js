const fetchLeaderboardData = async (currentPage, setLeaderBoardData, setIsLoading, setCurrentPage, setopenToast) => {
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
    if(currentPage<=0){
        return;
    }
    setIsLoading(true);
    await fetch(BASE_URL + `api/sft/leaderboard/${currentPage}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
        //   console.log(data);
          const entries = Object.entries(data);
        //   console.log(entries);
        if(entries.length === 0){
            setCurrentPage(currentPage-1);
            setopenToast(true)
        }
        else{
            setCurrentPage(currentPage);
        }
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