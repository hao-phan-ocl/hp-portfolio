import { Stack } from '@mui/material'

import Intro from './Intro'
import Nav from './Nav'

export default function Home() {
  return (
    <Stack alignItems="center">
      <Nav />
      <Intro />
    </Stack>
  )
}
