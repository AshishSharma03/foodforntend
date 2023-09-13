import React from "react";
import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
function AboutUs() {
  return (
    <Box
      sx={{
        minHeight: "46vh",
        background:
          " linear-gradient(90deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
      }}
    >
      <Container>
        <Grid container>
          <Grid item md={6} sm={0} xs={0}>
            <Box
              sx={{
                minHeight: "46vh",
                display: { md: "flex", sm: "none", xs: "none" },
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <Box
                component={"img"}
                src="./Assets/pharmasict-serving-customer-drug-store 1.png"
                sx={{
                  width: "384px",
                  height: "468px",
                }}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <Box
              sx={{
                height: { md: "100%", xs: "80vh" },
                display: "flex",
                alignItems: "center",
                justifyContent: { md: "left", sm: "center", xs: "center" },
              }}
            >
              <Stack alignItems={{ xs: "center", sm: "center", md: "start" }}>
                <Stack
                  gap={"27px"}
                  sx={{
                    textAlign: { xs: "center", sm: "center", md: "left" },
                    width: { xs: "275px", sm: "275px", md: "fit-content" },
                  }}
                >
                  <Typography
                    color="primary"
                    sx={{
                      fontSize: { md: "45px", sm: "26px", xs: "26px" },
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      lineHeight: "27px",
                    }}
                  >
                    About Us
                  </Typography>
                  <Typography
                    color="smalltext"
                    sx={{
                      fontSize: { md: "15px", sm: "11px", xs: "11px" },
                      lineHeight: "27px",
                      fontWeight: "400",
                      fontFamily: "Open Sans",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. t has survived not only five centuries.
                  </Typography>
                </Stack>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    marginTop: { md: "24px", sm: "21px", xs: "21px" },
                    padding: "3px 26px",
                    borderRadius: "30px",
                    background: "#E23744",
                    color: "#fff",
                    fontFamily: "Source Sans Pro",
                    fontSize: { md: "16px", sm: "11px", xs: "11px" },
                    fontWeight: { md: "700", sm: "600", xs: "600" },
                    width: "fit-content",
                  }}
                >
                  Read More
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;
