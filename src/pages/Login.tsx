import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import verifyToken from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PhInput from "../components/form/PhInput";

// default values
const defaultValues = {
  email: "masud@gmail.com",
  password: "masud",
};
const Login = () => {
  // redux

  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  // react
  const navigate = useNavigate();

  // login user
  const handleLogin = async (data: FieldValues) => {
    const toastLoginId = toast.message("logging in...");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("logged in successfully", {
        id: toastLoginId,
        duration: 2000,
      });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Error while logging..." + error, { id: toastLoginId });
    }
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <PHForm onSubmit={handleLogin} defaultValues={defaultValues}>
        <PhInput label="Email: " name="email" type="email" />
        <PhInput label="Password: " name="password" type="password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
