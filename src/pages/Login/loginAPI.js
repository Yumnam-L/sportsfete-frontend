export const LynxLoginAPICall = async (rollNo, reCaptchaToken) => {
  try {
    const url = process.env.REACT_APP_BACKEND_BASE_URL;
    const response = await fetch(url + "lauth/generateOtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recaptcha: reCaptchaToken,
        rollNo: rollNo,
      }),
    });

    //console.log(reCaptchaToken);

    const data = await response.json();

    if (!response.ok) {
      throw {
        statusCode: response.status,
        message: data.message,
      };
    }

    return {
      message: data.message,
      statusCode: response.status,
    };
  } catch (error) {
    throw {
      statusCode: error.statusCode || 500,
      message: error.message || "An unknown error occurred.",
    };
  }
};

// export const LynxLoginAPICall = async (
//   rollNo,
//   reCaptchaToken,
//   setMessage,
//   setStatusCode
// ) => {
//   console.log(reCaptchaToken);
//   var url = "https://api.dev.sportsfete.org";
//   await fetch(url + "/lauth/generateOtp", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       recaptcha: reCaptchaToken,
//       rollNo: rollNo,
//     }),
//   })
//     .then((res) => {
//       console.log(res);
//       setStatusCode(res.status);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       setMessage(data);
//     });
// };
