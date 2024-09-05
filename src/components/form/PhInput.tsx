import { Input } from "antd";
import { Controller } from "react-hook-form";

const PhInput = ({
  label,
  type,
  name,
}: {
  label?: string;
  type: string;
  name: string;
}) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PhInput;
