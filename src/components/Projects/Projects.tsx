import { Container, Divider, Stack, Typography } from '@mui/material'

import Countries from './Countries'
import Elibrary from './Elibrary'
import NetflixClone from './NetflixClone'

type RefProps = {
  projectRef: any
}

export default function Projects({ projectRef }: RefProps) {
  return (
    <Container ref={projectRef} maxWidth="lg" sx={{ marginTop: '5rem', paddingTop: '10rem' }}>
      <Typography variant="h4" align="center" color="primary">
        PROJECTS
      </Typography>
      <Divider orientation="horizontal" flexItem />

      <Stack mt="5rem" gap="100px">
        <Elibrary />
        <Countries />
        <NetflixClone />
      </Stack>
    </Container>
  )
}
