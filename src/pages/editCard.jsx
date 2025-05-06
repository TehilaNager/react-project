import { useFormik } from "formik";
import PageHeader from "../components/common/pageHeader";
import Input from "../components/common/input";
import FormButtons from "../components/common/FormButtons";
import validateCreateCard from "../helpers/validateCreateCard";
import initialValuesEditCard from "../helpers/initialValuesEditCard";
import { useCards } from "../context/cardsContext";
import { useLocation } from "react-router";

function EditCard() {
  const { updateCardById } = useCards();

  const location = useLocation();
  const card = location.state;

  const { getFieldProps, handleSubmit, touched, errors, isValid, resetForm } =
    useFormik({
      initialValues: initialValuesEditCard(),
      validate(values) {
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
        await updateCardById(card._id);
        console.log(values);
      },
    });

  return (
    <div className="container col-11 col-md-7">
      <PageHeader title="Edit Card" classNameTitle="my-4 text-center" />

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

        {/* {serverError && (
          <div className="alert alert-danger" role="alert">
            {serverError}
          </div>
        )} */}

        <FormButtons
          // disabled={!isValid}
          onReset={() =>
            resetForm({
              values: {
                title: "",
                subtitle: "",
                description: "",
                phone: "",
                email: "",
                web: "",
                url: "",
                alt: "",
                state: "",
                country: "",
                city: "",
                street: "",
                houseNumber: "",
                zip: "",
              },
            })
          }
        />
      </form>
    </div>
  );
}

export default EditCard;
