import { css } from '../../styled-system/css'
import { cva } from '../../styled-system/css';

import blurDark from '../../public/images/blur-dark.png';

export const main = css({
  minH: '100%',
})

export const me = css({
  textAlign: { xs: 'center', xl: 'initial'},
  display: 'flex',
  flexDir: { xs: 'column', xl: 'row-reverse' },
  alignItems: 'center',
  justifyContent: {xs: 'center', xl: 'space-between'},
  
  marginTop: { xl: '6rem', '2xl': '10rem' },
  padding: { xl: '0 6.5rem', '2xl': '0 12.5rem'},
  
  '& > img': {
    width: { xs: '10rem', xl: '25rem' },
    paddingTop: { xs: '6.25rem' }
  },
  '& > div': {
    margin: { xs: '0 2.625rem', xl: 'unset' }, 
    xl: { w: '30rem' },
    
    '& h1': {
      color: 'white',
      fontSize: { xs: '2rem', xl: '4.688rem'},
      marginTop: '2.5rem',
    },
    '& p': {
      marginTop: '1.375rem',
      color: 'gray.400',
      lineHeight: { xs: '1.875rem', xl: '2rem' },
      '& > span': {
        color: 'white',
        fontWeight: 'bold'
      }
    },
    '& > div': {
      mt: '3.5rem',
      display: 'flex',
      flexDir: {xs: 'column', xl: 'row'},
      justifyContent: {xs: 'center', xl: 'flex-start'},
      alignItems: 'center',
      gap: { xs: '0.875rem', xl: '1.75rem' },
      '& > a:hover': {
        filter: 'brightness(0.8)',
      }
    }
  },  
})

export const resumeDownload = css({
  w: '11.5rem',
  h: '2.875rem',
  bg: 'white',
  color: 'gray.900',
  textAlign: 'center',
  p: '0.75rem 2.5rem',
  rounded: '6.25rem',
  fontWeight: 'bold',
})

export const linkRedirect = css({
  color: 'purple.300',
})

export const introExperience = css({  
  marginTop: '15.25rem',
  'xl': {
    display: 'flex',
    alignItems: 'center',
    gap: '8rem',
    padding: '0 6.5rem',
    overflow: 'hidden',
  },
  '2xl': {
    gap: '2rem',
    padding: '0 12.5rem',
  },

  '& p': {
    color: 'gray.400',
    w: '245px',
    m: { xs: '0 auto', xl: 'unset'},
  },
  '& strong': {
    display: 'block',
    fontSize: '5rem',
    color: 'white',
    margin: '-0.6rem 0',
  }
})

export const introExperienceBox = css({  
  width: { xs: '100%', xl: '16%' },
  textAlign: { xs: 'center', xl: 'initial' },
  position: 'relative',
  '_before': {
    content: '',
    position: 'absolute',
    zIndex: 9999,
  }
})

export const experienceCarousel = css({
  w: { xl: '100%', },
  margin: { xs: '3.438rem 2.125rem', xl: 'unset' },
  '& span': {
    fontWeight: 'bold',
    color: 'gray.800',
    display: 'block',
    marginTop: '0.8rem'
  },
})

export const techCard = cva({
  base: {
    w: { xs: '13.75rem', xl: '25.625rem'},
    h: { xs: '11.875rem', xl: '17.5rem'},
    bg: '#C3C99E',
    rounded: '3.75rem',
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    p: '0 1.875rem',
  },
  variants: {
    theme: {
      js: {
        bg: '#C3C99E',
      },
      react: {
        bg: '#7D9CA5',
      },
      nextjs: {
        bg: '#C2C2C2',
      },
      figma: {
        bg: '#C0E5D7',
      }
    }
  }
})

export const favThingsSection = css({  
  '& > div': {
    textAlign: 'center',
    margin: '13.125rem 0',
    fontSize: { xs: '2.5rem', xl: '5.625rem'},
    fontWeight: 'semibold',
    '& > h2:not(:last-child)': {
      marginBottom: '6.25rem',
    },

    '& h2:nth-child(1)': {
      color: '#C69AFF'
    },
    '& h2:nth-child(2)': {
      color: '#9F53FF'
    },
    '& h2:nth-child(3)': {
      color: '#6104D6'
    }
  }     
})

