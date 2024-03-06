import { css } from "../../../styled-system/css";

export const intro = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  gap: '2.375rem',
  marginTop: { xs: '12rem' },

  '& > p': {
    textAlign: 'center',
    color: 'gray.300',
    maxW: { xs: '278px', xl: '640px' },
    margin: { xs: '0 auto' },
    lineHeight: { xs: '2rem', xl: '3rem' },
    fontWeight: 'light',

    '& strong': {
      fontWeight: 'bold',
    },

    xl: {
      fontSize: '1.5rem',      
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
  '_hover': {
    filter: 'brightness(0.8)',
  },
})

export const experience = css({
  maxW: { xl: '1120px', '2xl': '1520px' },
  margin: { 
    xs: '6.25rem 2.125rem 0 2.125rem',
    xl: '6.25rem auto'
  },

  '& > li:not(:last-child)': {
    marginBottom: {xs: '2rem', xl: '5.625rem'},
  },

  '& > li': {
    w: '100%',
    display: 'flex',
    flexDir: { xs: 'column', xl: 'row' }, 
    gap: { xs: '3.875rem', xl: 'unset' }, 
    justifyContent: 'flex-start',
    background: 'gray.800',
    rounded: '2.5rem',
    padding: {
      xs: '4.375rem 2.375rem',
    }, 
    '& .experience-details': {
      w: { xl: '40%' }
    },
    '& .experience-activity': {
      w: { xl: '60%' }
    },
    '& h3': {
      fontSize: { xs: '1.375rem' },      
      fontWeight: 'semibold',
    },
    '& p': {
      marginTop: '1rem',
      lineHeight: { xs: '1.875rem '}
    },
    '& span': {
      margin: '0.75rem 0',
    },
    '& h2': {
      color: 'white',
      fontWeight: 'semibold',
      fontSize: { xs: '1rem', xl: '1.75rem' }
    },
    '& span, h3': {
      color: 'purple.300',
      display: 'block',    
      fontSize: '1.375rem',
    },
    '& time, address, p': {
      color: 'gray.400',
    }
  }
})