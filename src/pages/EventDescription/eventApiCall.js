export const eventAPiCall = async (name, setObj, setUpcomingMatches) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  if (name) {
    await fetch(BASE_URL + `api/events/matches/${name}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const upcomingMatches = [];

        data[0].matches.forEach((match) => {
          const dateTime = new Date(match.time).toLocaleString();
          const matchObj = {
            team1: { name: match.dept_1_name, score:match.dept_1_score },
            team2: { name: match.dept_2_name, score:match.dept_2_score },
            dateTime: dateTime,
            desc: match.venue,
            id: match._id,
            status: match.status,
          };

          if (match.status === "UPCOMMING") {
            upcomingMatches.push(matchObj);
          } else if (match.status === "LIVE") {
            setObj(matchObj);
          }
        });
        setUpcomingMatches(upcomingMatches);
        return data;
      })
      .catch((error) => console.error(error));
  }
};

const notificationsApiCall = async(name, setNotifications) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  if (name) {
    await fetch(BASE_URL + `api/events/notifications/${name}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if(data && data.notifications)
          setNotifications(data.notifications);
      })
      .catch((error) => console.error(error));
  }
};

export {notificationsApiCall};
export default eventAPiCall;
