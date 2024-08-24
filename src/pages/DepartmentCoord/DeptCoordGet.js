const eventDeptCoord = async (
  setEventsData,
  token,
  setSnackbarMessage,
  setSnackbarOpen
) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  if (!token) {
    //console.log("token is null");
    return {
      success: false,
      message: "Something went wrong with token, please try again later",
    };
  }
  try {
    const response = await fetch(BASE_URL + "api/depCoord/deptReg", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    });

    const data = await response.json();
    const entries = Object.entries(data);
    // console.log(entries);
    // console.log(data);
    setEventsData(entries);
  } catch (error) {
    let errorMessage = "An error occurred";
    if (error.message === "PROFILE_NOT_FOUND") {
      errorMessage = "User profile not found";
    } else if (error.message === "ACCESS_DENIED") {
      errorMessage = "Access denied";
    } else if (error.message === "SERVER_ERROR") {
      errorMessage = "Server error";
    }
    console.error(error);
    setSnackbarMessage(errorMessage);
    setSnackbarOpen(false);
  }
};

export default eventDeptCoord;
