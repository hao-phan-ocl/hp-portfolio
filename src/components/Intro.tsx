import { Avatar, Container, Stack, Typography } from '@mui/material'
import Pic from '../media/profile.jpg'

export default function Intro() {
  return (
    <Stack marginTop="5rem" alignItems="center">
      <Typography variant="h1">HAO PHAN</Typography>
      <Typography>FULL-STACK WEB DEVELOPER</Typography>
      <Avatar src={Pic} sx={{ width: 150, height: 150 }} />
      <Container maxWidth="sm">
        <Typography paragraph={true} sx={{ textAlign: 'justify' }}>
          {'Hi! I am a full stack web developer proficient in '}
          <Typography component="span" color="rgb(187 43 92)">
            {'MERNstack '}
          </Typography>
          <Typography component="span">{', '}</Typography>
          <Typography component="span" color="rgb(187, 43, 92)">
            {'Typescript '}
          </Typography>
          <Typography component="span">
            {'with additional knowledge in DevOps practices such as '}
          </Typography>
          <Typography component="span" color="rgb(187, 43, 92)">
            {'Bash'}
          </Typography>
          <Typography component="span">{', '}</Typography>
          <Typography component="span" color="rgb(187, 43, 92)">
            {'Docker '}
          </Typography>
          <Typography component="span">{'and '}</Typography>
          <Typography component="span" color="rgb(187, 43, 92)">
            {'CI/CD'}
          </Typography>
          <Typography component="span">{'. '}</Typography>
        </Typography>
        <Typography>
          My coding style is keeping things simple and well functional. I like collaborating with
          team of supportive people who are dedicated to achieve common goals.
        </Typography>
      </Container>
    </Stack>
  )
}
