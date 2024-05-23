import { formPageOneInputs } from "../_form-inputs/form-inputs"
import { Field } from "./form-field";


export function FormPageOne({
    disabled,
    initialValues
  }: {
    disabled: boolean,
    initialValues: {
      [key: string]: string
    } | undefined
  }
  ) {
    const { title, subtitle, fields } = formPageOneInputs;
    return (
        <>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          {fields.map(({ formFieldId, fieldName, fieldText }) => (
            <Field
              key={formFieldId}
              formFieldId={formFieldId}
              fieldName={fieldName}
              fieldText={fieldText}
              initialValueScore={initialValues?.[formFieldId]}
              disabled={disabled}
            />
          ))}
       </>
      )
}