import { formPageOneInputs } from "../_form-inputs/form-inputs"
import { Field } from "./form-field";


export function FormPage({
    disabled,
    initialValues,
    isCurrentPage,
    formPageProps,
  }: {
    disabled: boolean,
    initialValues: {
      [key: string]: string
    } | undefined
    isCurrentPage: boolean
    formPageProps: {
      title: string;
      subtitle: string;
      fields: {
          formFieldId: string;
          fieldName: string;
          fieldText: string;
      }[];
  }
  }
  ) {
    const { title, subtitle, fields } = formPageProps;
    return (
        <div className={isCurrentPage ? '' : 'hidden'}>
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
       </div>
      )
}