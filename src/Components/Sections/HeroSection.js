import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import React from "react";

function HeroSection() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        component={"img"}
        src="./Assets/Logo.png"
        sx={{ position: "absolute", top: "33px", left: "100px" }}
      />
      <Button
        sx={{
          position: "absolute",
          right: { md: "41px", sm: "18px", xs: "18px" },
          top: { md: "32px", sm: "18px", xs: "18px" },
          zIndex: 1,
          textTransform: "capitalize",
          padding: { md: "12px 30px", sm: "4px 10px", xs: "4px 10px" },
          borderRadius: "30px",
          border: "2px solid #fff",
          color: "#fff",
          fontFamily: "Open Sans",
          fontWeight: "700",
          fontSize: { md: "", sm: "11px", xs: "11px" },
        }}
      >
        Get in touch
      </Button>

      <Grid container>
        <Grid item md={0} sm={12} xs={12}>
          <Box
            sx={{
              minHeight: { md: "100vh", xs: "50vh" },
              display: { md: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component={"img"}
              src={"./Assets/LandingImage.png"}
              sx={{ height: "50vh", width: "100%", position: "absolute" }}
            />
            <Box
              component={"img"}
              src={"./Assets/redLayerImg.png"}
              sx={{
                width: "100vw",
                height: "53vh",
                top: 0,
                right: 0,
                position: "absolute",
                zindex: 9,
              }}
            />
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Box
            sx={{
              minHeight: { md: "100vh", xs: "50vh" },
              flexDirection: "column",
              display: "flex",
              alignItems: { md: "start", sm: "center", xs: "center" },
              justifyContent: "center",
              paddingLeft: { md: "100px", sm: "0px", xs: "0px" },
            }}
          >
            <Stack
              sx={{
                width: { md: "345px", sm: "240px", xs: "240px" },
                marginTop: { md: "100px", sm: "0px", xs: "0px " },
              }}
              gap={"21px"}
            >
              <Typography
                color="primary"
                sx={{
                  fontSize: { md: "62px", sm: "38px", xs: "38px" },
                  fontWeight: "700",
                  fontFamily: "Source Sans Pro",
                  lineHeight: { md: "69px", sm: "46px", xs: "46px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Discover the <span style={{ color: "#E23744" }}>Best</span> Food
                and Drinks
              </Typography>
              <Typography
                color={"smalltext"}
                sx={{
                  fontSize: "16.44px",
                  lineHeight: "27.41px",
                  fontWeight: "400",
                  fontFamily: "Open Sans",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                }}
              >
                Naturally made Healthcare Products for the better care & support
                of your body.
              </Typography>
            </Stack>
            <Button
              sx={{
                textTransform: "capitalize",
                marginTop: { md: "41px", sm: "21px", xs: "21px" },
                padding: "12px 30px",
                borderRadius: "30px",
                background: "#E23744",
                color: "#fff",
                fontFamily: "Open Sans",
                fontWeight: "700",
              }}
            >
              Explore Now!
            </Button>
          </Box>
        </Grid>
        <Grid item md={6} sm={0} xs={0}>
          <Box
            sx={{
              minHeight: "100vh",
              position: "relative",
              display: { xs: "none", sm: "none", md: "block  " },
            }}
          >
            <Box
              component={"img"}
              src={"./Assets/LandingImage.png"}
              sx={{
                height: "100%",
                width: "100%",
                top: 0,
                right: 0,
                position: "absolute",
              }}
            />
            <Box
              component={"img"}
              src={"./Assets/redLayerImg.png"}
              sx={{
                width: "52vw",
                height: "105vh",
                top: 0,
                right: 0,
                position: "absolute",
                zindex: 9,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
