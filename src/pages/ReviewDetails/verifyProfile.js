const verifyProfile = async (bodyProps, reCaptchaToken, token, setOpenSB, setIsLoading) => {
  let resStatus = "";
  //console.log(bodyProps)
  //console.log(reCaptchaToken);
  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  // console.log(BASE_URL);
  setIsLoading(true);
  await fetch(BASE_URL + "api/verifyProfile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({
      recaptcha: reCaptchaToken,
      ...bodyProps,
    }),
  })
    .then((res) => {
      resStatus = res.status;
      return res.json();
    })
    .then((data) => {
      //console.log(data);
      if (resStatus === 200) {
        setOpenSB({
          open: true,
          message: data.message,
          status: resStatus,
          severity: "success",
          loading: true,
        });
      } else if (resStatus === 401) {
        setOpenSB({
          open: true,
          message: data.message,
          status: resStatus,
          severity: "error",
          loading: true,
        });
      } else if (resStatus === 404) {
        setOpenSB({
          open: true,
          message: data.message || "Not Found, Try Again!",
          status: resStatus,
          severity: "error",
          loading: true,
        });
      } else if (resStatus === 500) {
        setOpenSB({
          open: true,
          message: data.message || "Server Error! Please Try Again",
          status: resStatus,
          severity: "error",
          loading: true,
        });
      } else if (resStatus === 402) {
        setOpenSB({
          open: true,
          message: "Failed captcha Verification",
          status: resStatus,
          severity: "error",
          loading: true,
        });
      } else if (resStatus === 400) {
        setOpenSB({
          open: false,
          message: data.message,
          status: resStatus,
          severity: "error",
          loading: true,
        });
      }
    })
    .catch((err) => {
      setOpenSB({
        open: true,
        message: err,
        severity: "error",
        loading: true,
      });
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export default verifyProfile;

const mtechBranches = async (setBranches, setOpenSB, setIsLoading) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  //console.log(BASE_URL);
  let resStatus = "";
  setIsLoading(true);
  await fetch(BASE_URL + "api/getMastersDept", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      resStatus = res.status;
      return res.json();
    })
    .then((data) => {
      //console.log(data);
      if (resStatus === 200) {
        setBranches(data.departments);
        setOpenSB({
          open: false,
          message: data.message,
          status: resStatus,
          severity: "info",
          loading: true,
        });
      } else {
        setOpenSB({
          open: true,
          message: data.message,
          status: resStatus,
          severity: "error",
          loading: true,
        });
      }
    })
    .catch((err) => {
      setOpenSB({
        open: true,
        message: err,
        severity: "error",
        loading: true,
      });
    });
    setIsLoading(false);
};

export { mtechBranches };
