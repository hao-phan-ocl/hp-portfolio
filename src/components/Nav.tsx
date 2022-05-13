import { AppBar, Stack } from '@mui/material'
import Link from '@mui/material/Link'

type RefProps = {
  projectRef: any
}

export default function Nav({ projectRef }: RefProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#233554',
        boxShadow: '0 7px 20px 0 rgb(0 0 0 / 20%), 0 4px 10px 0 rgb(0 0 0 / 20%)',
        padding: '15px 0',
      }}
    >
      <Stack direction="row" justifyContent="center" gap="30px">
        <Link
          variant="h6"
          color="primary"
          underline="none"
          sx={{ ':hover': { color: '#64ffda' } }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Home
        </Link>
        <Link
          variant="h6"
          color="primary"
          underline="none"
          sx={{ ':hover': { color: '#64ffda' } }}
          onClick={() => projectRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          Projects
        </Link>
        <Link
          variant="h6"
          color="primary"
          underline="none"
          sx={{ ':hover': { color: '#64ffda' } }}
          onClick={() => window.scrollTo({ top: 10000, behavior: 'smooth' })}
        >
          Contact
        </Link>
      </Stack>
    </AppBar>
  )
}
