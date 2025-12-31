import inputStyles from "../scss/input.module.scss"

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  onShowPassword?: () => void;
  error: string | null;
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = ({
  placeholder,
  type,
  name,
  error,
  handleValue,
  value,
  onShowPassword,
}: InputProps) => {
  return (
    <div className={inputStyles.login__form_input}>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={handleValue}
        autoComplete="off"
        
      />
      {name === "password" && (
        <p
          className={inputStyles.login__toggle_visibility}
          onClick={onShowPassword}
        >
          {type === "password" ? "Show" : "Hide"}
        </p>
      )}
      {error && <p className={inputStyles.login__error_message}>{error}</p>}
    </div>
  );
};

export default Input;