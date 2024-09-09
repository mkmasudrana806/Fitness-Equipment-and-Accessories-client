import { Avatar, Button, Divider, Empty, List } from "antd";
import ReviewForm from "./ReviewForm";
import { useState } from "react";

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

const Reviews = () => {
  const [isReview, setIsReview] = useState(false);

  return (
    <div>
      <p>Get specific details about this products from customers who own it</p>
      <Divider />
      {/* review form  */}
      {isReview && <ReviewForm />}

      {/* when no reviews, show empty message  */}
      {!isReview && (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{ height: 60 }}
          description={
            <p>
              This product has no reviews yet. Be the first one to write a
              review
            </p>
          }
        >
          <Button onClick={() => setIsReview(true)} ghost type="primary">
            Write a review
          </Button>
        </Empty>
      )}
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
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod corrupti ipsam voluptatem accusantium at ipsa alias"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Reviews;
