const handleOtp = async (rollNo, otp, reCaptchaToken) => {
  //console.log("recaptcha in call", reCaptchaToken);
  try {
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
    const response = await fetch(BASE_URL + "lauth/verifyOtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rollNo: rollNo,
        otp: otp,
        recaptcha: reCaptchaToken,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: data.message,
        name: data.name,
        department: data.department,
        rollNo: data.rollNo,
        isProfileConfimed: data.isProfileConfimed,
        isMarathonRegistered: data.isMarathonRegistered,
        token: data.token,
      };
    } else {
      // console.log(data);
      return {
        success: false,
        message: data.message,
      };
    }
  } catch (error) {
    console.error(error);
    if (error.status === 500 || error.status === 404) {
      return {
        success: false,
        message: "Server Error!, please try again later.",
      };
    } else if (error.status === 402) {
      return {
        success: false,
        message: "Failed captcha Verification.",
      };
    }
    return {
      success: false,
      message: "Something went wrong, please try again later.",
    };
  }
};

export default handleOtp;
