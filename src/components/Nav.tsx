import { AppBar, Stack } from '@mui/material'
import Link from '@mui/material/Link'

export default function Nav() {
  const items = ['Home', 'Projects', 'Contact']

  function handleOnClick() {
    console.log('clicked')
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#525e65',
        boxShadow: '0 7px 20px 0 rgb(0 0 0 / 20%), 0 4px 10px 0 rgb(0 0 0 / 20%)',
        padding: '15px 0',
      }}
    >
      <Stack direction="row" justifyContent="center" gap="30px">
        {items.map((item, i) => (
          <Link
            key={i}
            variant="h6"
            color="#DBE8D4"
            underline="none"
            sx={{ ':hover': { color: '#73CCA8' } }}
            onClick={handleOnClick}
          >
            {item}
          </Link>
        ))}
      </Stack>
    </AppBar>
  )
}
