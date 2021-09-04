import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";

var signinSchema = Yup.object({
  username: Yup.string().required("Username is Required"),
  password: Yup.string().required("Password is Required"),
});

function App() {
  return (
    <div className="App">
      <div className="form">
        <h4>Sign In</h4>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(data) => {
            console.log(data);
          }}
          validationSchema={signinSchema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            handleBlur,
            touched,
          }) => {
            console.log("errors", errors);
            console.log("touched", touched);
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="username"></label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Enter Username"
                    onChange={handleChange}
                    value={values.username}
                    onBlur={handleBlur}
                  />
                  <p>{touched.username && errors.username}</p>
                </div>
                <div className="form-field">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password}
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Sign In
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default App;
