import { Avatar, Button, Divider, Empty, List } from "antd";
import { useState } from "react";
import CommentForm from "./CommentForm";
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

const Comments = () => {
  const [isComment, setIsComment] = useState(false);

  return (
    <div>
      <p>
        Comment your question or know something from others comments about this
        product
      </p>
      <Divider />
      {/* review form  */}
      {isComment && <CommentForm />}

      {/* when no comments, show empty message  */}
      {!isComment && (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{ height: 60 }}
          description={
            <p>
              This product has no comments yet. Be the first one to write a
              comment
            </p>
          }
        >
          <Button onClick={() => setIsComment(true)} ghost type="primary">
            Write a comment
          </Button>
        </Empty>
      )}
      {/* show comments when it has  */}
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
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sequi quaerat reiciendis totam. Excepturi?"
              children="children"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Comments;
