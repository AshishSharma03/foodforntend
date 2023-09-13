import React from "react";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

const contactData = [
  {
    title: "Contact Us",
    address: "Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434",
    email: "example2020@gmail.com",
    phone: "(904)443-0343",
  },
];

const moreData = [
  {
    title: "More",
    links: [
      { label: "About us", href: "/" },
      { label: "Product", href: "/" },
      { label: "Career", href: "/" },
      { label: "Contact Us", href: "/" },
    ],
  },
];

function FooterSection() {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        background: "#F8F8F8",
        marginTop: { md: "65px", sm: "57px", xs: "57px" },
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={3}>
          <Box
            sx={{
              minHeight: { md: "50vh", sm: "30vh", xs: "30vh" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component={"img"} src="./Assets/Logo.png" />
          </Box>
        </Grid>
        {contactData.map((contact, index) => (
          <Grid item xs={12} sm={12} md={3} key={index}>
            <Box
              sx={{
                minHeight: { md: "50vh", sm: "30vh", xs: "30vh" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack gap={"14px"}>
                <Typography
                  color="primary"
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Source Sans Pro",
                    fontWeight: "600",
                  }}
                >
                  {contact.title}
                </Typography>
                <Typography
                  color="#646874"
                  sx={{
                    width: "217px",
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Source Sans Pro",
                    lineHeight: "23.03px",
                  }}
                >
                  {contact.address}
                </Typography>
                <Typography
                  color="#646874"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Source Sans Pro",
                    lineHeight: "23.03px",
                  }}
                >
                  {contact.email}
                </Typography>
                <Typography
                  color="#646874"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Source Sans Pro",
                    lineHeight: "23.03px",
                  }}
                >
                  {contact.phone}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
        {moreData.map((more, index) => (
          <Grid item xs={12} sm={12} md={3} key={index}>
            <Box
              sx={{
                minHeight: { md: "50vh", sm: "30vh", xs: "30vh" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack gap={"14px"}>
                <Typography
                  color="primary"
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Source Sans Pro",
                    fontWeight: "600",
                  }}
                >
                  {more.title}
                </Typography>
                {more.links.map((link, idx) => (
                  <Typography
                    component={"a"}
                    href={link.href}
                    color={"#646874"}
                    sx={{
                      fontStyle: "normal",
                      textDecoration: "none",
                      width: "217px",
                      fontSize: "14px",
                      fontWeight: "400",
                      fontFamily: "Source Sans Pro",
                      lineHeight: "23.03px",
                    }}
                    key={idx}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12} sm={12} md={3}>
          <Box
            sx={{
              minHeight: { md: "50vh", sm: "30vh", xs: "30vh" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Source Sans Pro",
                fontSize: "19px",
                fontWeight: "600",
                letterSpacing: "3%",
              }}
            >
              Social Links
            </Typography>
            <Stack direction={"row"} gap="10px">
              <IconButton sx={{ color: "#0E2368" }}>
                <BsInstagram />
              </IconButton>
              <IconButton sx={{ color: "#0E2368" }}>
                <AiOutlineTwitter />
              </IconButton>
              <IconButton sx={{ color: "#0E2368" }}>
                <BiLogoFacebook />
              </IconButton>
            </Stack>
            <Typography sx={{ paddingTop: "50px", color: "#828B9C" }}>
              © 2022 Food Truck Example
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterSection;
