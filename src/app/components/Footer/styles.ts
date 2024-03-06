import { css } from "../../../../styled-system/css";

export const container = css({  
  maxW: { xl: '1120px', '2xl': '1520px' },
  margin: {
    xs: '0 2.125rem 10rem 2.125rem',
    xl: '0 auto',
  },

  '& p': {
    color: 'gray.300',
    padding: '1.625rem 2rem',
  },

  '& section': {
    bg: 'gray.800',
    rounded: '6.25rem',
    padding: '1.625rem 2rem',
  },

  '& section > div': {
    justifyContent: 'space-between',
    color: 'gray.400',    
    '& > strong': {
      fontWeight: 'normal',
    },
  },

  '& div, span': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  }
})