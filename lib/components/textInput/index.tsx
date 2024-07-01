import Text from "../text";

const Input = ({
  error,
  label,
  type = "text",
  name,
  className,
  ...rest
}: {
  error?: string[];
  label: string;
  type?: string;
  name: string;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div>
      <label className="text-h6 font-bold" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={`Ingresa tu ${label}`}
        type={type}
        className="border border-lightText rounded-lg w-full h-50px p-4 mt-1"
        {...rest}
      />
      {error?.length && (
        <Text type="p" className="mt-1 text-start text-red-400">
          {error[0]}
        </Text>
      )}
    </div>
  );
};

export default Input;
