import { Stack } from '@mui/material'

import Intro from './Intro'
import Nav from './Nav'
import Projects from './Projects/Projects'

export default function Home() {
  return (
    <Stack alignItems="center">
      <Nav />
      <Intro />
      <Projects />
    </Stack>
  )
}
