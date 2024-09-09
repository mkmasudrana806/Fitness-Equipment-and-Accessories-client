import { Avatar, Divider, Empty, List } from "antd";

const data = [
  {
    title: "User 1",
  },
  {
    title: "User 2",
  },
  {
    title: "User 3",
  },
  {
    title: "User 4",
  },
];

const ProductFAQ = () => {
  return (
    <div>
      <p>Gets some commons answer about this product people search for it</p>
      <Divider />
      {/* when no reviews, show empty message  */}
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      {/* show reviews when it has  */}
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste inventore vel dolore nesciunt eius maiores!"
              children="children"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProductFAQ;
