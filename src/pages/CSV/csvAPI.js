export const CSVAPICall = async (code, reCaptchaToken) => {
  try {
    const url = process.env.REACT_APP_BACKEND_BASE_URL;;

    const response = await fetch(url + "api/registrationResult", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recaptcha: reCaptchaToken,
        code: code,
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
      message: data,
      statusCode: response.status,
    };
  } catch (error) {
    throw {
      statusCode: error.statusCode || 500,
      message: error.message || "An unknown error occurred.",
    };
  }
};
