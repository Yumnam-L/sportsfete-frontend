/* eslint-disable no-throw-literal */

const Marathonregister = async (reCaptchaToken, token) => {
  try {
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

    //console.log(BASE_URL);

    const response = await fetch(BASE_URL + "api/marathonRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({
        recaptcha: reCaptchaToken,
      }),
    });

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

export default Marathonregister;
