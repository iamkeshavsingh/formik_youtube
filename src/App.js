import "./App.css";
import { Formik } from "formik";

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
        >
          {({ values, handleChange, handleSubmit }) => (
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
                />
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
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Sign In
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
