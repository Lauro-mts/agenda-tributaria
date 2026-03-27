interface FieldGroupProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  error?: boolean
  errorMessage?: string
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void
}

export function FieldGroup({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error = false,
  errorMessage = 'Campo obrigatório',
  onInput,
}: FieldGroupProps) {
  return (
    <div className={`field-group ${error ? 'has-error' : ''}`} id={`field-${id}`}>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`field-input ${error ? 'error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onInput={onInput}
        autoComplete="off"
      />
      <span className="field-error-msg">{errorMessage}</span>
    </div>
  )
}
