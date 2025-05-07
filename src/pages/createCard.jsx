import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { useState } from "react";
import Input from "../components/common/input";
import PageHeader from "../components/common/pageHeader";
import FormButtons from "../components/common/FormButtons";
import initialValuesCreateCard from "../helpers/initialValuesCreateCard";
import validateCreateCard from "../helpers/validateCreateCard";
import normalValuesCard from "../helpers/normalValuesCard";
import cardsService from "../services/cardsService";

function CreateCard() {
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const { getFieldProps, handleSubmit, touched, errors, isValid, resetForm } =
    useFormik({
      validateOnMount: true,
      initialValues: initialValuesCreateCard(),
      validate: (values) => {
        const schema = validateCreateCard();

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
          const card = normalValuesCard(values);
          await cardsService.createCard(card);
          navigate("/my-cards");
        } catch (err) {
          if (err.status === 400) {
            let message = err.response.data;
            message = message.replace("Joi Error: card ", "");
            message = message.replace(
              '"mail" mast be a valid mail',
              '"email" mast be a valid email'
            );
            if (message.indexOf("Mongoose Error: E11000") === 0) {
              message = "Email already exists.";
            }
            setServerError(message);
          }
        }
      },
    });

  return (
    <div className="container col-11 col-md-7">
      <PageHeader title="Create Card" classNameTitle="my-4 text-center" />

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div
          style={{ gridTemplateColumns: "1fr 1fr" }}
          className="d-grid gap-3 mb-4"
        >
          <Input
            {...getFieldProps("title")}
            error={touched.title && errors.title}
            label="Title"
            type="text"
            placeholder="Graphic Designer"
            required
          />
          <Input
            {...getFieldProps("subtitle")}
            error={touched.subtitle && errors.subtitle}
            label="Subtitle"
            type="text"
            placeholder="Helping Brands Look Their Best"
            required
          />

          <Input
            {...getFieldProps("description")}
            error={touched.description && errors.description}
            label="Description"
            type="text"
            placeholder="Designs that speak your brand’s language"
            required
          />

          <Input
            {...getFieldProps("phone")}
            error={touched.phone && errors.phone}
            label="Phone"
            type="tel"
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
            {...getFieldProps("web")}
            error={touched.web && errors.web}
            label="Web"
            type="url"
            placeholder="www.noalevi.design"
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
            placeholder="Image alt"
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
            placeholder=""
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

export default CreateCard;
