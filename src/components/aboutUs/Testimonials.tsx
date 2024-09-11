// export default Testimonials;
import { Card, Avatar, Typography, Rate } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
const { Title, Paragraph } = Typography;
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testimonials = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      bio: "John has over 20 years of experience in the industry and is passionate about innovation and leadership.",
      avatarUrl: "https://example.com/john-avatar.jpg",
    },
    {
      name: "Jane Smith",
      role: "Chief Technology Officer",
      bio: "Jane leads our tech team with her expertise in software development and cutting-edge technology solutions.",
      avatarUrl: "https://example.com/jane-avatar.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Marketing",
      bio: "Sarah is responsible for all marketing strategies, bringing creativity and insights to the team.",
      avatarUrl: "https://example.com/sarah-avatar.jpg",
    },
  ];
  return (
    <CustomersFeedback>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
        Our Valuable Customers Feedback
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              {/* Avatar with Instagram-like gradient border */}
              <Avatar
                size={70}
                src="https://randomuser.me/api/portraits/men/75.jpg"
                style={{
                  position: "absolute",
                  top: "0px", // This moves half of the avatar above the card
                  border: "4px solid transparent",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(white, white), radial-gradient(circle at 30% 107%, #fddd97, #f1e20b, #fd5949, #d6249f, #285AEB)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  zIndex: 2,
                }}
              />

              {/* Card body */}
              <Card
                style={{
                  width: 300,
                  marginTop: "32px",
                  paddingTop: "16px", // To accommodate the avatar above the card
                  textAlign: "center",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Title level={4} style={{ marginTop: "10px" }}>
                  John Doe
                </Title>
                <Paragraph style={{ fontSize: "1rem" }}>
                  "This product completely c way I work. I'm extremely satisfied
                  with the service and quality!"
                </Paragraph>
                <Rate disabled defaultValue={2} />
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </CustomersFeedback>
  );
};

export default Testimonials;

// customer feedback
const CustomersFeedback = styled.div`
  margin-top: 64px;
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;
