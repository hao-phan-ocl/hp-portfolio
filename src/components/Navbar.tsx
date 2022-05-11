import { Container, Divider, Stack, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Nav() {
  return (
    <Container maxWidth="md">
      <Stack direction="row" justifyContent="space-between" alignItems="center" p="30px 0">
        <Stack alignItems="center">
          <Typography variant="h3">Hao Phan</Typography>
          <Divider sx={{ width: '100%' }} />
          <Typography>Full Stack Developer</Typography>
        </Stack>
        <Stack direction="row" gap="20px">
          <Typography>PROJECTS</Typography>
          <GitHubIcon />
          <LinkedInIcon />
        </Stack>
      </Stack>
    </Container>
  )
}
