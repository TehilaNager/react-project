import { useFormik } from "formik";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import PageHeader from "../components/common/pageHeader";
import { useAuth } from "../context/authContext";
import Input from "../components/common/input";
import FormButtons from "../components/common/FormButtons";
import initialValuesSignup from "../helpers/initialValuesSignup";
import validateSignup from "../helpers/validateSignup";
import normalValuesUser from "../helpers/normalValuesUser";

function SignUp() {
  const [serverError, setServerError] = useState("");
  const { user, createUser } = useAuth();
  const navigate = useNavigate();

  const { getFieldProps, handleSubmit, touched, errors, isValid, resetForm } =
    useFormik({
      validateOnMount: true,
      initialValues: initialValuesSignup(),
      validate: (values) => {
        const schema = validateSignup();

        const { error } = schema.validate(values, { abortEarly: false });

        if (!error) {
          return null;
        }

        const errors = {};
        for (const detail of error.details) {
          errors[detail.path[0]] = detail.message;
        }

        return errors;
      },
      onSubmit: async (values) => {
        try {
          const user = normalValuesUser(values);
          await createUser(user);
          navigate("/");
        } catch (err) {
          if (err.status === 400) {
            let message = err.response.data;
            message = message.replace("Joi Error: user ", "");
            message = message.replace(
              '"mail" mast be a valid mail',
              '"email" mast be a valid email'
            );
            setServerError(message);
          }
        }
      },
    });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container col-11 col-md-7">
      <PageHeader title="Register" classNameTitle="my-4 text-center" />

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div
          style={{ gridTemplateColumns: "1fr 1fr" }}
          className="d-grid gap-3"
        >
          <Input
            {...getFieldProps("first")}
            error={touched.first && errors.first}
            label="First name"
            type="text"
            placeholder="El"
            required
          />

          <Input
            {...getFieldProps("middle")}
            error={touched.middle && errors.middle}
            label="Middle name"
            type="text"
            placeholder="Moshe"
          />

          <Input
            {...getFieldProps("last")}
            error={touched.last && errors.last}
            label="Last name"
            type="text"
            placeholder="Cohen"
            required
          />

          <Input
            {...getFieldProps("phone")}
            error={touched.phone && errors.phone}
            label="Phone"
            type="text"
            placeholder="0585549635"
            required
          />

          <Input
            {...getFieldProps("email")}
            error={touched.email && errors.email}
            label="Email"
            type="email"
            placeholder="Dani@Cohen.com"
            required
          />

          <Input
            {...getFieldProps("password")}
            error={touched.password && errors.password}
            label="Password"
            type="password"
            placeholder="123456789"
            required
          />

          <Input
            {...getFieldProps("url")}
            error={touched.url && errors.url}
            label="Image url"
            type="url"
            placeholder=""
          />

          <Input
            {...getFieldProps("alt")}
            error={touched.alt && errors.alt}
            label="Image alt"
            type="text"
            placeholder=""
          />

          <Input
            {...getFieldProps("state")}
            error={touched.state && errors.state}
            label="State"
            type="text"
            placeholder="Rotshild"
          />

          <Input
            {...getFieldProps("country")}
            error={touched.country && errors.country}
            label="Country"
            type="text"
            placeholder="country"
            required
          />

          <Input
            {...getFieldProps("city")}
            error={touched.city && errors.city}
            label="City"
            type="text"
            placeholder="Jerusalem"
            required
          />

          <Input
            {...getFieldProps("street")}
            error={touched.street && errors.street}
            label="Street"
            type="text"
            placeholder="street"
            required
          />

          <Input
            {...getFieldProps("houseNumber")}
            error={touched.houseNumber && errors.houseNumber}
            label="House number"
            type="text"
            placeholder="122"
            required
          />
          <Input
            {...getFieldProps("zip")}
            error={touched.zip && errors.zip}
            label="Zip"
            type="text"
            placeholder="8920435"
            required
          />

          <Input
            {...getFieldProps("isBusiness")}
            type="checkbox"
            label=" Signup as business"
            required
          />
        </div>

        {serverError && (
          <div className="alert alert-danger" role="alert">
            {serverError}
          </div>
        )}

        <FormButtons disabled={!isValid} onReset={resetForm} />
      </form>
    </div>
  );
}

export default SignUp;
