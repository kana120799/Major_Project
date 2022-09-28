import { Grid, styled } from "@mui/material";

const ImageURL = [
  "https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg",
  "https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50",
];

const Wrapper = styled(Grid)`
  display: flex;
  margin-top: 0.625rem;
  justify-content: space-between;
`;

const Image = styled("img")(({ theme }) => ({
  display: "flex",
  marginTop: "0.3125rem",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: "7.5rem",
  },
}));

const MidImage = () => {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Wrapper container>
        {ImageURL.map((image, ind) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={ind}>
            <img src={image} style={{ width: "100%" }} alt="MidSection" />
          </Grid>
        ))}
      </Wrapper>
      <Image src={url} />
    </>
  );
};

export default MidImage;
