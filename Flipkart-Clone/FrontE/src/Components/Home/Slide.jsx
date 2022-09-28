import { Button, Divider, Box, Typography, styled } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 0.3125rem;
  background: #ffffff;
`;

const Deal = styled(Box)`
  display: flex;
  padding: 0.9375rem 1.25rem;
`;

const DealHeading = styled(Typography)`
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 2rem;
  margin-right: 1.5625rem;
`;

const Timer = styled(Box)`
  color: #7f7f7f;
  margin-left: 0.625rem;
  display: flex;
  align-items: center;
`;

const ViewButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 0.8125rem;
`;

const Image = styled("img")({
  width: "auto",
  height: "9.375rem",
});

const Text = styled(Typography)`
  font-size: 0.875rem;
  margin-top: 0.3125rem;
`;

const RenderTimer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MultiSlide = ({ data, timer, title }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <RenderTimer variant="span">
        {hours} : {minutes} : {seconds} Left
      </RenderTimer>
    );
  };

  return (
    <Component>
      <Deal>
        <DealHeading>{title}</DealHeading>
        {timer && (
          <Timer>
            <img src={timerURL} style={{ width: 24 }} alt="time clock" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}
        <ViewButton variant="contained" color="primary">
          View All
        </ViewButton>
      </Deal>
      <Divider />
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((temp, ind) => (
          <Link
            to={`product/${temp.id}`}
            style={{ textDecoration: "none" }}
            key={ind}
          >
            <Box textAlign="center" style={{ padding: "1.5625rem 0.9375rem" }}>
              <Image src={temp.url} />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {temp.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{temp.discount}</Text>
              <Text style={{ color: "#212121", opacity: "0.6" }}>
                {temp.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

const Slide = (props) => {
  return <>{props.multi === true && <MultiSlide {...props} />}</>;
};

export default Slide;
