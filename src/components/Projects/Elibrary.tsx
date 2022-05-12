import { Stack } from '@mui/material'

import Carousel from '../Carousel/Carousel'
import ProjectInfo from '../ProjectInfo'
import Img1 from '../../media/E-library/login.png'
import Img2 from '../../media/E-library/home.png'
import Img3 from '../../media/E-library/detail.png'
import Img4 from '../../media/E-library/bookEdit.png'
import Img5 from '../../media/E-library/bookEdit2.png'
import Img6 from '../../media/E-library/admin.png'

export default function Elibrary() {
  const project = {
    title: 'E-library',
    demo: 'https://hp-elibrary.netlify.app/',
    github: 'https://github.com/nguyenhaophan/e-library',
    desc: [
      'A Full Stack application built from scratch and individually. The application serves as a book library with CRUD functionalities and user authorization with Google.',
      'Additionally, Docker and Github Actions were utilized for optimization purposes.',
    ],
    stacks: [
      'MERN Stack',
      'Typescript',
      'Redux',
      'Redux-thunk',
      'Passport.js',
      'Axios',
      'Material-UI',
      'Docker',
      'Github Actions',
    ],
  }

  const images = [Img1, Img2, Img3, Img4, Img5, Img6]

  return (
    <Stack direction="row" gap="3rem">
      <ProjectInfo projectDetail={project} />
      <Carousel images={images} />
    </Stack>
  )
}
