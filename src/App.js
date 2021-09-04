import "./App.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

var signinSchema = Yup.object({
  basic: Yup.object({
    firstName: Yup.string().required("Full Name is required"),
    lastName: Yup.string().required("Last Name is required"),
  }),
  contact: Yup.object({
    mobile: Yup.string().required("Mobile is Required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Please Enter a Valid Email"),
  }),
});

function App() {
  return (
    <div className="App">
      <div className="form">
        <h4>Sign In</h4>
        <Formik
          initialValues={{
            basic: {
              firstName: "",
              lastName: "",
            },
            contact: {
              mobile: "",
              email: "",
            },
            interest: [],
          }}
          onSubmit={(data) => {
            console.log(data);
          }}
          validationSchema={signinSchema}
        >
          {({ errors, touched }) => {
            console.log("errors", errors);
            console.log("touched", touched);
            return (
              <Form>
                <div className="form-field m-4">
                  <div>
                    <h4 className="pt-2">Basic Info</h4>
                    <Field
                      className="form-control m-2"
                      type="text"
                      placeholder="First Name"
                      name="basic.firstName"
                    />
                    {touched?.basic?.firstName && errors?.basic?.firstName}
                    <Field
                      className="form-control m-2"
                      type="text"
                      placeholder="Last Name"
                      name="basic.lastName"
                    />
                  </div>
                  <div>
                    <h4 className="pt-2">Contact</h4>
                    <Field
                      className="form-control m-2"
                      type="text"
                      placeholder="Mobile"
                      name="contact.mobile"
                    />
                    <Field
                      className="form-control m-2"
                      type="text"
                      placeholder="Email"
                      name="contact.email"
                    />
                  </div>
                  <div>
                    <h4 className="pt-2">Interest</h4>
                    <Field
                      className="form-control m-2"
                      type="text"
                      placeholder="Interest 1"
                      name="interest[0]"
                    />
                    <Field
                      className="form-control m-2"
                      type="text"
                      placeholder="Interest 2"
                      name="interest[1]"
                    />
                    <Field
                      className="form-control m-2"
                      type="text"
                      placeholder="Interest 3"
                      name="interest[2]"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary m-4">
                    SignIn
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default App;
