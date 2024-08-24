const ApiBase = async (setOpenSB, token, body, reCaptchaToken, route, method) => {
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
    let resStatus = "";
    await fetch(BASE_URL + route, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        token: token,
        recaptcha : reCaptchaToken
      },
      body: JSON.stringify({
        ...body
      }),
    })
      .then((res) => {
        resStatus = res.status;
        return res.json();
      })
      .then((data) => {
        // console.log(data);
  
        setOpenSB({
          open: true,
          message: data.message,
          severity: resStatus === 200 ? "info" : "error",
          loading: true,
        });
      })
      .catch((err) => {
        // console.log(String(err))
        setOpenSB({
          open: true,
          message: "error",
          severity: "error",
          loading: true,
        });
      });
  };

  const AddMatchAPI =  (setOpenSB, token, body, reCaptchaToken) => {
     ApiBase(setOpenSB, token, body, reCaptchaToken, "api/eventCoord/add-match", "POST" )
  }

  const DeleteMatchAPI =   (setOpenSB, token, reCaptchaToken, eventID) => {
    ApiBase(setOpenSB, token, {}, reCaptchaToken, "api/eventCoord/match/"+eventID, "DELETE" )
  }

  const UpdateMatchAPI =   (setOpenSB, token, body, reCaptchaToken, eventID) => {
    ApiBase(setOpenSB, token, body, reCaptchaToken, "api/eventCoord/update-match/"+eventID, "PUT" )
  }

  const UpdateStatusAPI =  (setOpenSB, token, body, reCaptchaToken, eventID) => {
    ApiBase(setOpenSB, token, body, reCaptchaToken, "api/eventCoord/update-status/"+eventID, "PUT" )
  }

  const WinnerAPI =  (setOpenSB, token, body, reCaptchaToken) => {
    ApiBase(setOpenSB, token, body, reCaptchaToken, "api/eventCoord/winner", "POST" )
  }



  const CreateNotificationApi =  (setOpenSB, token, body, reCaptchaToken) => {
    ApiBase(setOpenSB, token, body, reCaptchaToken, "api/eventCoord/add-notification", "POST" )
  }

  const UpdateNotificationApi =  (setOpenSB, token, body, reCaptchaToken,notificationID) => {
    ApiBase(setOpenSB, token, body, reCaptchaToken, "api/eventCoord/update-notification/"+notificationID, "PUT" )
  }

  const DeleteNotificationApi =  (setOpenSB, token, reCaptchaToken,notificationID) => {
    ApiBase(setOpenSB, token, {}, reCaptchaToken, "api/eventCoord/notification/"+notificationID, "DELETE" )
  }



  const GetMatchAPI = async (setOpenSB, token, setMatches) => {
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
    //let resStatus = "";
    await fetch(BASE_URL + "api/eventCoord/matches", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      }
    })
      .then((res) => {
        //resStatus = res.status;
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if(data && data.matches){
            setMatches( data.matches)
        }
      })
      .catch((err) => {
        // console.log(String(err))
        setOpenSB({
          open: true,
          message: "error",
          severity: "error",
          loading: true,
        });
      });
  };

  const GetNotificationApi = async (setOpenSB, token, setNotifications) => {
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
    await fetch(BASE_URL + "api/eventCoord/notifications", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if(data && data.notifications){
          setNotifications( data.notifications)
        }
      })
      .catch((err) => {
        // console.log(String(err))
        setOpenSB({
          open: true,
          message: "error",
          severity: "error",
          loading: true,
        });
      });
  };
  
  export {AddMatchAPI, DeleteMatchAPI, UpdateMatchAPI, UpdateStatusAPI, WinnerAPI, GetNotificationApi, CreateNotificationApi, UpdateNotificationApi, DeleteNotificationApi}

  export default GetMatchAPI;
  