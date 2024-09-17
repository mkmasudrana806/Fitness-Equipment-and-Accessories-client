import { Form, Input } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useGetUserProfileQuery } from "../../redux/features/users/userApi";
import { useEffect } from "react";
import { loadUserProfile } from "../../redux/features/users/userSlice";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const BillingAddress = () => {
  // redux
  const { data: userProfile } = useGetUserProfileQuery(undefined);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.profile);

  // react
  const [form] = Form.useForm();
  // load user profile to store
  useEffect(() => {
    if (userProfile) {
      dispatch(loadUserProfile(userProfile.data));
      if (user) {
        form.setFieldsValue({
          name: `${user?.name?.firstName} ${user?.name?.middleName} ${user?.name?.lastName}`,
          email: user?.email,
          contact: user?.contact,
          address: user?.address,
        });
      }
    }
  }, [userProfile, form, user, dispatch]);

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      style={{ maxWidth: 600 }}
    >
      {/* name field */}
      <Form.Item name="name" label="Name">
        <Input readOnly />
      </Form.Item>
      {/* email field */}
      <Form.Item name="email" label="Email">
        <Input readOnly />
      </Form.Item>
      {/* contact no field */}
      <Form.Item name="contact" label="Contact No">
        <Input readOnly />
      </Form.Item>
      {/* delivery address field */}
      <Form.Item name="address" label="Billing address">
        <Input readOnly />
      </Form.Item>
    </Form>
  );
};

export default BillingAddress;
