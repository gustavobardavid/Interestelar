import { Box, Container,  Stack, Typography } from '@mui/material';

export default function Hero({image}){
    return (
        <div className='hero' key={image.date}>
                        <Box sx={{background:`url(${image.url})`, backgroundSize:'cover', width:'100%', height:'60vh', borderRadius:'20px', backgroundPosition:'center'}}></Box>
                        <div className='hero'>
            <Box
        id="hero"
        sx={({
          width: '100%',
          backgroundSize: '100% 20%',
          backgroundRepeat: 'no-repeat'
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 1, sm:  15 },
            pb: { xs: 22, sm: 12 }
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
                component="span"
                variant="h2"
                sx={{
                  color: 'var(--terciary)',
                  fontFamily: 'Poppins',
                  fontWeight:'bold'
                }}
              >{image.title}
              </Typography>
            <Typography variant="body2" textAlign="center" color='var(--secondary)' style={{ fontFamily: 'Poppins' }}>
            {image.date}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: 'auto' }, fontFamily: 'Poppins' }}
            >
              
            </Stack>
          </Stack>
        </Container>
        </Box>
      </div>
                      </div>
    )
}