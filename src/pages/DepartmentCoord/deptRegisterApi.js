const DeptCoordRegisterApi = async (
  setOpenSB,
  token,
  formData,
  reCaptchaToken,
  setInvalidRolls
) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  // console.log(BASE_URL);
  // console.log()
  let resStatus = "";
  await fetch(BASE_URL + "api/depCoord/eventReg", {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      token: token,
      recaptcha: reCaptchaToken,
    },
    body: formData,
  })
    .then((res) => {
      resStatus = res.status;
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      if (resStatus === 406) {
        setOpenSB({
          open: true,
          message: data.message,
          status: resStatus,
          severity: "error",
          loading: true,
        });
        return;
      }
      if (data && data.invalidRollNos.length > 0) {
        setInvalidRolls(data.invalidRollNos);
      }
      setOpenSB({
        open: true,
        message: data.message,
        status: resStatus,
        severity: resStatus === 200 ? "success" : "error",
        loading: true,
      });
    })
    .catch((err) => {
      setOpenSB({
        open: true,
        message: "error",
        severity: "error",
        loading: true,
      });
    });
};

export default DeptCoordRegisterApi;
