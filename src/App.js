import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <div className="container">
      <div className="brand-box">
        <h1>Magic Form</h1>
        <p>Build forms in React without the tears.</p>
      </div>
      <div className="magic-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            agree: false,
            favoriteColor: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("İsim boş bırakılamaz!"),
            email: Yup.string().email().required("Email boş bırakılamaz"),
            agree: Yup.boolean().required("Koşulları kabul etmelisin"),
            favoriteColor: Yup.string()
              .required("Hadi ama herkesin sevdiği bir renk vardır!")
              .oneOf(["red", "blue", "green"]),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              resetForm();
              setSubmitting(false);
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleReset,
            handleChange,
            dirty,
            isSubmitting,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <h3>Kaydol</h3>
              <label htmlFor="name">İsim</label>
              <input
                id="name"
                type="text"
                placeholder="Mithat..."
                className="input"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}
              <label htmlFor="email" className="topMargin">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="mithatkara93@gmail.com"
                className="input"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <label htmlFor="favoriteColor" className="topMargin">
                Favori Renk
              </label>

              <select
                id="favoriteColor"
                value={values.favoriteColor}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: "150px",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Renk Seç"></option>
                <option value="red" label="Kırmızı"></option>
                <option value="blue" label="Mavi"></option>
                <option value="green" label="Yeşil"></option>
              </select>

              {errors.favoriteColor && touched.favoriteColor && (
                <div className="input-feedback">{errors.favoriteColor}</div>
              )}
              <div className="checkbox topMargin">
                <input
                  id="agree"
                  type="checkbox"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree" className="checkbox-label">
                  Sözleşmeyi okudum kabul ediyorum...
                </label>
              </div>
              <button type="submit" disabled={!dirty || isSubmitting}>
                Kaydol
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
