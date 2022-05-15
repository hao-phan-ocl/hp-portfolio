import { Stack } from '@mui/material'

import Carousel from '../Carousel/Carousel'
import ProjectInfo from '../ProjectInfo'
import Img1 from '../../media/Countries/country.png'
import Img2 from '../../media/Countries/home.png'
import Img3 from '../../media/Countries/favorite.png'

export default function Countries() {
  const project = {
    title: 'Countries Data',
    demo: 'https://haophan-countries-data.netlify.app/',
    github: 'https://github.com/nguyenhaophan/countries-data',
    desc: [
      'A front-end project that displays a list of countries from an API and enables users to search and query for detailed information of each country.',
      'Users are also able to add favorites, sort by different options, and switch theme color.',
    ],
    stacks: [
      'React.js',
      'Typescript',
      'Redux',
      'Redux-thunk',
      'Material-UI',
      'SCSS',
      'Docker',
      'Github Actions',
    ],
  }

  const images = [Img1, Img2, Img3]

  return (
    <Stack gap="3rem" direction={{ md: 'row', xs: 'column' }}>
      <ProjectInfo projectInfo={project} />
      <Carousel images={images} />
    </Stack>
  )
}
