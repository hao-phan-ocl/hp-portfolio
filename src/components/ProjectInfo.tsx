import { Link, Stack, Typography } from '@mui/material'

type ProjectProps = {
  projectDetail: {
    title: string
    demo: string
    github: string
    desc: string[]
    stacks: string[]
  }
}

export default function ProjectInfo({ projectDetail }: ProjectProps) {
  return (
    <Stack width="50%" textAlign="justify">
      <Typography>{projectDetail.title}</Typography>
      <Stack direction="row" gap="20px">
        <Link href={projectDetail.demo} target="_blank" rel="noreferrer" aria-label="Github">
          Live Demo
        </Link>
        <Link href={projectDetail.github} target="_blank" rel="noreferrer" aria-label="Github">
          View Code
        </Link>
      </Stack>
      {projectDetail.desc.map((elem, i) => (
        <Typography key={i}>{elem}</Typography>
      ))}
      <Typography paragraph={true}>
        {'Tech stacks: '}
        {projectDetail.stacks.map((stack, i, arr) =>
          i !== arr.length - 1 ? (
            <Typography
              key={stack}
              component="span"
              color="rgb(187, 43, 92)"
            >{`${stack}, `}</Typography>
          ) : (
            <Typography
              key={stack}
              component="span"
              color="rgb(187, 43, 92)"
            >{`${stack}.`}</Typography>
          )
        )}
      </Typography>
    </Stack>
  )
}
