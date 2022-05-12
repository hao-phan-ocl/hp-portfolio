import { Box, Link, Stack, Typography } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'

export default function Footer() {
  return (
    <>
      <Stack
        alignItems="center"
        width="100%"
        gap="25px"
        mt="150px"
        p="50px 0"
        position="relative"
        // sx={{background: 'radial-gradient(circle )'}}
        overflow="hidden"
      >
        <Link
          title="Email me"
          color="secondary"
          underline="hover"
          aria-label="Gmail"
          onClick={() => window.open('mailto:nguyenhao.phan@gmail.com')}
        >
          <Typography>nguyenhao.phan@gmail.com</Typography>
        </Link>
        <Stack direction="row" gap="15px">
          <Link
            href="https://www.linkedin.com/in/hao-phan-06b628110/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin"
          >
            <LinkedIn
              sx={{
                fontSize: '33px',
                ':hover': { color: '#73CCA8' },
              }}
            />
          </Link>
          <Link
            href="https://github.com/nguyenhaophan/e-library"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <GitHub sx={{ fontSize: '33px', ':hover': { color: '#73CCA8' } }} />
          </Link>
        </Stack>
        <Typography color="#525e65" fontSize="15px">
          © 2022 Hao Phan
        </Typography>
        <ArrowDropDownCircleIcon
          sx={{
            margin: '0',
            fontSize: '70px',
            ':hover': { color: '#73CCA8' },
            transform: 'rotate(180deg)',
            cursor: 'pointer',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <Box
          sx={{
            display: 'block',
            backgroundColor: '#2E3445',
            position: 'absolute',
            top: '0',
            zIndex: '-1',
            height: '200vw',
            width: '200vw',
            borderRadius: '50%',
          }}
        />
      </Stack>
    </>
  )
}
