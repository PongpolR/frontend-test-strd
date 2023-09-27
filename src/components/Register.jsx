import "../styles/Register.css";
import { Formik } from "formik";
import * as yup from "yup";
import "yup-phone";
import { useAlert } from "react-alert";

export default function Register() {
  const url = window.location.href;
  let splitUrl = url;
  splitUrl = url.split("?");
  let params = new URLSearchParams("");

  if (splitUrl.length == 2) {
    // console.log(splitUrl[1].toString());
    params = new URLSearchParams(splitUrl[1].toString());
  }

  const initialDataForm = {
    firstname: params.get("firstname") == null ? "" : params.get("firstname"),
    lastname: params.get("lastname") == null ? "" : params.get("lastname"),
    telephone: params.get("tel") == null ? "" : params.get("tel"),
    email: params.get("email") == null ? "" : params.get("email"),
    ref: params.get("ref") == null ? "" : params.get("ref"),
  };

  const validationSchema = yup.object().shape({
    firstname: yup
      .string()
      .max(50, "We need less than 50 character.")
      .required("Please fill firstname in blank input."),
    lastname: yup
      .string()
      .max(50, "We need less than 50 character.")
      .required("Please fill lastname in blank input."),
    telephone: yup
      .string()
      .matches(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        "Please enter valid phone number. (ex. 0985569390)"
      )
      .required("Please fill telephone in blank input."),
    email: yup
      .string()
      .email("Invalid format email (ex. tata@gmail.com)")
      .max(50, "We need less than 50 character.")
      .required("Please fill email in blank input."),
    ref: yup
      .string()
      .max(50, "We need less than 50 character.")
      .required("Please fill Reference in blank input."),
  });

  const alert = useAlert();

  function onsubmitRegister(values) {
    let firstname = values.firstname;
    alert.success(`Register Complete!!`);
    setTimeout(function () {
      alert.info(`Welcome ${firstname}`);
    }, 3500);
    setTimeout(function () {
      // window.location.reload();
      window.location.replace("/register");
    }, 6500);
  }

  return (
    <div className="container">
      <div className="regis-box">
        <div className="sub-regis-title">StockRadars</div>
        <div className="regis-title">Register your account</div>

        <Formik
          initialValues={initialDataForm}
          validationSchema={validationSchema}
          onSubmit={(values) => onsubmitRegister(values)}
        >
          {(formDatas) => (
            <form onSubmit={formDatas.handleSubmit}>
              <label className="label">First name</label>
              <input
                id="regis-input"
                type="text"
                name="firstname"
                value={formDatas.values.firstname}
                onChange={formDatas.handleChange}
                className={
                  formDatas.touched.firstname &&
                  Boolean(formDatas.errors.firstname)
                    ? "input-error"
                    : ""
                }
              />

              {Boolean(formDatas.errors.firstname) && (
                <p className="errors">{formDatas.errors.firstname}</p>
              )}

              <label className="label">Last name</label>
              <input
                id="regis-input"
                type="text"
                name="lastname"
                value={formDatas.values.lastname}
                onChange={formDatas.handleChange}
                className={
                  formDatas.touched.lastname &&
                  Boolean(formDatas.errors.lastname)
                    ? "input-error"
                    : ""
                }
              />

              {Boolean(formDatas.errors.lastname) && (
                <p className="errors">{formDatas.errors.lastname}</p>
              )}

              <label className="label">Telephone</label>
              <input
                id="regis-input"
                type="text"
                name="telephone"
                value={formDatas.values.telephone}
                onChange={formDatas.handleChange}
                className={
                  formDatas.touched.telephone &&
                  Boolean(formDatas.errors.telephone)
                    ? "input-error"
                    : ""
                }
              />

              {Boolean(formDatas.errors.telephone) && (
                <p className="errors">{formDatas.errors.telephone}</p>
              )}

              <label className="label">Email</label>
              <input
                id="regis-input"
                type="email"
                name="email"
                value={formDatas.values.email}
                onChange={formDatas.handleChange}
                className={
                  formDatas.touched.email && Boolean(formDatas.errors.email)
                    ? "input-error"
                    : ""
                }
              />

              {Boolean(formDatas.errors.email) && (
                <p className="errors">{formDatas.errors.email}</p>
              )}

              <label className="label">Reference</label>
              <input
                id="regis-input"
                type="text"
                name="ref"
                value={formDatas.values.ref}
                onChange={formDatas.handleChange}
                className={
                  formDatas.touched.ref && Boolean(formDatas.errors.ref)
                    ? "input-error"
                    : ""
                }
              />

              {Boolean(formDatas.errors.ref) && (
                <p className="errors">{formDatas.errors.ref}</p>
              )}

              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
