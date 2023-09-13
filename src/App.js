import React from 'react'
import HeroSection from './Components/Sections/HeroSection'
import { Box, Container, Grid, Stack, Typography ,Button} from '@mui/material'
import AboutUs from './Components/Sections/AboutUs'
import ArticalSection from './Components/Sections/ArticalSection'
import FooterSection from './Components/Sections/FooterSection'

function App() {
  return (
    <main>
      <Stack gap={{md:"185px",sx:"20px",xs:"20px"}}>
      <HeroSection />
      <AboutUs/>
      <ArticalSection/>
      </Stack>
      <FooterSection/>
    </main>
  )
}

export default App