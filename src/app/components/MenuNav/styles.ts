import { css } from "../../../../styled-system/css";

export const container = css({
  maxW: { xs: '325px', xl: '620px' },    
  height: '5rem',
  display: 'flex',
  alignItems: 'center',  
  position: 'fixed',  
  left: '50%',
  transform: 'translate(-50%, 0)',  
  zIndex: '9999',
  bg: 'rgba(33, 31, 35, 0.35)',
  backdropFilter: 'blur(20px)',
  rounded: '6.25rem',
  padding: '1.375rem 3.25rem',  
  fontWeight: 'medium',

  xs: {
    bottom: '2rem',    
    overflow: 'hidden',
    overflowX: 'visible',
    scrollbarWidth: 'none'
  },

  xl: {
    top: '2rem',
  },

  '& .activeLink': {
    color: 'purple.300'
  },

  '& nav > ul > li, span > a': { 
    color: 'gray.300',
    '_hover': {
      filter: 'brightness(0.8)'
    }
  },

  '& nav, ul': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2.625rem',    
  },

  '& nav > ul > span': {
    display: { xs: 'none', xl: 'flex' },
    alignItems: 'center',
    gap: '1rem',
  }
})