type FieldProps = {
    formFieldId: string
    fieldName: string
    fieldText: string
    initialValueScore: string | number | undefined
    disabled: boolean
  }
  
export const Field = ({
    formFieldId,
    fieldName,
    fieldText,
    initialValueScore,
    disabled,
  }: FieldProps) => {
    return (
      <div style={{ paddingTop: '20px' }}>
        <label
          htmlFor={formFieldId}
          className="block text-xs text-gray-600 uppercase"
        >
          {`${fieldName}: ${fieldText}`}
        </label>
        <input
          type="range"
          id={formFieldId}
          name={formFieldId}
          min={0}
          max={3}
          defaultValue={initialValueScore || 0}
          required
          disabled={disabled}
          list="values"
          style={{ width: '300px' }}
        />
        <datalist
          id="values"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '300px'
          }}
        >
        <option value="0" label="0"></option>
        <option value="1" label="1"></option>
        <option value="2" label="2"></option>
        <option value="3" label="3"></option>
        </datalist>
      </div>
    );
  }