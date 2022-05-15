import { AppBar, Stack } from '@mui/material'
import Link from '@mui/material/Link'
import { useState } from 'react'

type RefProps = {
  projectRef: any
}

export default function Nav({ projectRef }: RefProps) {
  const [section, setSection] = useState<'Home' | 'Projects' | 'Contact'>('Home')

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#233554',
        boxShadow: '0 7px 20px 0 rgb(0 0 0 / 20%), 0 4px 10px 0 rgb(0 0 0 / 20%)',
        height: '3.3rem',
      }}
    >
      <Stack direction="row" justifyContent="center" gap="30px" height="100%">
        <Link
          variant="h6"
          color={section === 'Home' ? 'secondary' : 'primary'}
          borderBottom={section === 'Home' ? '4px solid' : 'none'}
          lineHeight="3em"
          width="80px"
          textAlign="center"
          underline="none"
          sx={{ ':hover': { color: '#64ffda', borderBottom: '4px solid' } }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setSection('Home')
          }}
        >
          Home
        </Link>
        <Link
          variant="h6"
          color={section === 'Projects' ? 'secondary' : 'primary'}
          borderBottom={section === 'Projects' ? '4px solid' : 'none'}
          lineHeight="3em"
          width="80px"
          textAlign="center"
          underline="none"
          sx={{ ':hover': { color: '#64ffda', borderBottom: '4px solid' } }}
          onClick={() => {
            projectRef.current.scrollIntoView({ behavior: 'smooth' })
            setSection('Projects')
          }}
        >
          Projects
        </Link>
        <Link
          variant="h6"
          color={section === 'Contact' ? 'secondary' : 'primary'}
          borderBottom={section === 'Contact' ? '4px solid' : 'none'}
          lineHeight="3em"
          width="80px"
          textAlign="center"
          underline="none"
          sx={{ ':hover': { color: '#64ffda', borderBottom: '4px solid' } }}
          onClick={() => {
            window.scrollTo({ top: 10000, behavior: 'smooth' })
            setSection('Contact')
          }}
        >
          Contact
        </Link>
      </Stack>
    </AppBar>
  )
}
