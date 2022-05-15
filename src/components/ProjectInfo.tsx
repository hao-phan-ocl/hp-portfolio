import { Link, Stack, Typography } from '@mui/material'

type ProjectProps = {
  projectInfo: {
    title: string
    demo: string
    github: string
    desc: string[]
    stacks: string[]
  }
}

export default function ProjectInfo({ projectInfo }: ProjectProps) {
  const { title, demo, github, desc, stacks } = projectInfo

  return (
    <Stack width={{ md: '50%', xs: '100%' }} textAlign="justify" gap="10px">
      <Typography color="primary" variant="h5">
        {title}
      </Typography>
      <Stack direction="row" gap="20px" mb="10px">
        <Link
          underline="hover"
          color="secondary"
          href={demo}
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          Live Demo
        </Link>
        <Link
          underline="hover"
          color="secondary"
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          View Code
        </Link>
      </Stack>
      {desc.map((elem, i) => (
        <Typography key={i}>{elem}</Typography>
      ))}
      <Typography paragraph={true}>
        {'Tech stacks: '}
        {stacks.map((stack, i, arr) =>
          i !== arr.length - 1 ? (
            <Typography key={stack} component="span" color="secondary">{`${stack}, `}</Typography>
          ) : (
            <Typography key={stack} component="span" color="secondary">{`${stack}.`}</Typography>
          )
        )}
      </Typography>
    </Stack>
  )
}
