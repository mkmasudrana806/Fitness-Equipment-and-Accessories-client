import { Card, Col, Row, Avatar, Typography } from "antd";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import styled from "styled-components";

const { Title, Paragraph } = Typography;

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

const TeamIntroduction = () => {
  return (
    <TeamIdentity>
      <h1
        style={{
          textAlign: "center",
          margin: "64px 0px 32px 0px",
          fontSize: "2rem",
        }}
      >
        Our Teams
      </h1>

      <Swiper
        spaceBetween={16}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          // when window width is >= 480px
          670: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          // when window width is >= 992px
          892: {
            slidesPerView: 3,
          },
          // when window width is >= 1170px
          1170: {
            slidesPerView: 4,
          },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide style={{ padding: "16px" }} key={index}>
            <TeamCart>
              <Avatar size={80} src={member.avatarUrl} />
              <Title level={3} style={{ marginTop: "10px" }}>
                {member.name}
              </Title>
              <Paragraph>{member.role}</Paragraph>
              <Paragraph style={{ fontSize: "1rem" }}>{member.bio}</Paragraph>
            </TeamCart>
          </SwiperSlide>
        ))}
      </Swiper>
    </TeamIdentity>
  );
};

export default TeamIntroduction;

// team cart
const TeamCart = styled.div`
  text-align: "center";
  border: 1px solid rgba(3, 3, 3, 0.122);
`;

// team identification
const TeamIdentity = styled.div`
  padding: 0px 4px;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
