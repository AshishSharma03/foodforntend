import React, { useState } from 'react';
import { Box, Container, Grid, Stack, Typography, Button, Card, CardContent, CardMedia, IconButton } from '@mui/material';

const cardData = [
    {
        id:1,
        title :"Grilled  Tomatoes at Home",
        desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
        id:2,
        title :"Snacks for Travel",
        desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
        id:3,
        title :"Post-workout Recipes",
        desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
        id:4,
        title :"How To Grill Corn",
        desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
        id:5,
        title :"Crunchwrap Supreme",
        desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
        id:6,
        title :"Broccoli Cheese Soup",
        desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    }
]
function ArticalSection() {
  const cardsPerPage = 3; // Number of cards to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Filter the card data for the current page
  const currentCards = cardData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Container>
        <Stack gap={{ md: '70px', sm: '23px', xs: '23px' }}>
          <Typography
            color="primary"
            sx={{
              fontSize: { md: '56px', sm: '28px', xs: '28px' },
              textAlign: { md: 'left', sm: 'center', xs: 'center' },
              fontWeight: '600',
              lineHeight: '42px',
              letterSpacing: '2.24px',
              fontFamily: 'Source Sans Pro',
            }}
          >
            Latest Articles
          </Typography>

          <Grid container spacing={6}>
            {currentCards.map((a) => {
              return (
                <Grid item md={4} key={a.id}>
                  <Card
                    sx={{
                      padding: '10px',
                      margin: { xs: '0px 40px', sm: '0px 40px', md: '0px' },
                      boxShadow: 'none',
                      border: { md: '1px solid #93A2D361', sm: '1px solid #373737', xs: '1px solid #373737' },
                      borderRadius: '20px',
                    }}
                  >
                    <CardContent>
                      <CardMedia component={'img'} src={`./Assets/CardImage/image${a.id}.png`} />
                    </CardContent>
                    <CardContent>
                      <Stack gap={'14px'}>
                        <Typography
                          color="primary"
                          sx={{
                            textAlign: { md: 'left', sm: 'center', xs: 'center' },
                            fontSize: '21px',
                            fontWeight: '700',
                            fontFamily: 'Poppins',
                            lineHeight: '27px',
                          }}
                        >
                          {a.title}
                        </Typography>
                        <Typography
                          color="smalltext"
                          sx={{
                            textAlign: { md: 'left', sm: 'center', xs: 'center' },
                            fontSize: '15px',
                            fontWeight: '400',
                            lineHeight: '27px',
                          }}
                        >
                          {a.desc}
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardContent sx={{ display: 'flex', justifyContent: { md: 'left', sm: 'center', xs: 'center' } }}>
                      <Button
                        sx={{
                          zIndex: 1,
                          textTransform: 'capitalize',
                          padding: '10px 26px',
                          borderRadius: '30px',
                          border: '2px solid #424961',
                          color: '#424961',
                          fontFamily: 'Open Sans',
                          fontWeight: '700',
                          fontSize: { md: '', sm: '11px', xs: '11px' },
                        }}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
            <button
              style={{ border: '2px solid gray', borderRadius: '5px', padding: '5px 10px', fontSize: '20px' }}
              onClick={handlePreviousPage}
            >
              {'<'}
            </button>
            <Typography sx={{ color: '#424961' }}>
              {currentPage}/{totalPages}
            </Typography>
            <button
              style={{ border: '2px solid gray', borderRadius: '5px', padding: '5px 10px', fontSize: '20px' }}
              onClick={handleNextPage}
            >
              {'>'}
            </button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default ArticalSection;
