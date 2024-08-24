
const GetLimits = async (setLimits, setOpenSB,token ) => {
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
    let resStatus = "";
    await fetch(BASE_URL + "api/depCoord/eventsLimit", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token : token
      },
    })
      .then((res) => {
        resStatus = res.status;
        return res.json();
      })
      .then((data) => {
          
          setLimits(data);

          setOpenSB({
            open: resStatus !== 200,
            message: data.message,
            status: resStatus,
            severity: resStatus === 200 ? "info" : "error",
            loading: true,
          });
        
      })
      .catch((err) => {
        setOpenSB({
          open: true,
          message: err,
          severity: "error",
          loading: true,
        });
      });
  };
  
export default GetLimits;
  