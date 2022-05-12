import { Avatar, Box, Container, Stack, Typography } from '@mui/material'

import Pic from '../media/profile.jpg'

export default function Intro() {
  return (
    <>
      <Stack
        width="100%"
        pt="8rem"
        pb="2rem"
        gap="2rem"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Typography mt="3rem" variant="h2">
          HAO PHAN
        </Typography>
        <Typography>FULL-STACK WEB DEVELOPER</Typography>
        <Box
          sx={{
            display: 'block',
            backgroundColor: '#2E3445',
            position: 'absolute',
            bottom: '0',
            zIndex: '-1',
            height: '350vw',
            width: '350vw',
            borderRadius: '50%',
          }}
        />
      </Stack>
      <Stack mt="3rem" alignItems="center">
        <Avatar src={Pic} sx={{ width: 150, height: 150 }} />
        <Container maxWidth="sm" sx={{ marginTop: '3rem ' }}>
          <Typography paragraph={true} sx={{ textAlign: 'justify' }}>
            {'Hi! I am a full stack web developer proficient in '}
            <Typography component="span" color="secondary">
              {'MERNstack '}
            </Typography>
            <Typography component="span">{'with '}</Typography>
            <Typography component="span" color="secondary">
              {'Typescript '}
            </Typography>
            <Typography component="span">
              {'in addition to knowledge in DevOps practices such as '}
            </Typography>
            <Typography component="span" color="secondary">
              {'Bash'}
            </Typography>
            <Typography component="span">{', '}</Typography>
            <Typography component="span" color="secondary">
              {'Docker '}
            </Typography>
            <Typography component="span">{'and '}</Typography>
            <Typography component="span" color="secondary">
              {'CI/CD'}
            </Typography>
            <Typography component="span">{'. '}</Typography>
          </Typography>
          <Typography>
            My coding style is keeping things simple and well functional. I also like collaborating
            with team of supportive people who are dedicated to achieve common goals.
          </Typography>
        </Container>
      </Stack>
    </>
  )
}
