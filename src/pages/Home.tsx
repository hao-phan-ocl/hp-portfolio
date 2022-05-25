import { Stack } from '@mui/material'
import { useRef } from 'react'
import Footer from '../components/Footer'

import Nav from '../components/Nav'
import Intro from '../components/Intro'
import Projects from '../components/Projects/Projects'

export default function Home() {
  const projectRef = useRef(null)

  return (
    <Stack alignItems="center">
      <Nav projectRef={projectRef} />
      <Intro />
      <Projects projectRef={projectRef} />
      <Footer />
    </Stack>
  )
}
