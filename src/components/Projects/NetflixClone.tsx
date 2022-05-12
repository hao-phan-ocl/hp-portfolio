import { Stack } from '@mui/material'

import Carousel from '../Carousel/Carousel'
import ProjectInfo from '../ProjectInfo'
import Image1 from '../../media/NetflixClone/homepage.png'
import Image2 from '../../media/NetflixClone/login.png'
import Image3 from '../../media/NetflixClone/modal.png'
import Image4 from '../../media/NetflixClone/search.png'
import Image5 from '../../media/NetflixClone/video.png'

export default function NetflixClone() {
  const project = {
    title: 'Netflix Clone',
    demo: 'https://react-movies-app-867b0.web.app/',
    github: 'https://github.com/nguyenhaophan/netflix-react-app',
    desc: [
      'A Netflix Clone that is a fully responsive and enables users to create accounts, search movies, watch trailers, and add entities to their watchlists.',
      'This is my first react app where I learned about reusable components, sending api request, and Context API as state controller.',
    ],
    stacks: ['Axios', 'Firebase', 'Javascript', 'Material-UI', 'React.js', 'SCSS'],
  }

  const images = [Image1, Image2, Image3, Image4, Image5]

  return (
    <Stack direction="row" gap="3rem">
      <ProjectInfo projectDetail={project} />
      <Carousel images={images} />
    </Stack>
  )
}
