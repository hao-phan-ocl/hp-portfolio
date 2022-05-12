import { Container, Stack, Typography } from '@mui/material'

import Countries from './Countries'
import Elibrary from './Elibrary'
import NetflixClone from './NetflixClone'

export default function Projects() {
  return (
    <Container maxWidth="lg">
      <Typography>PROJECTS</Typography>
      <Stack gap="100px">
        <Elibrary />
        <Countries />
        <NetflixClone />
      </Stack>
    </Container>
  )
}
