import { css } from "../../../../styled-system/css";

export const skills = css({
  marginBottom: '6.875rem',
  '& h2': {
    fontSize: {xs: '2rem', xl: '3.75rem' },
    color: 'gray.300',
    textAlign: { xs: 'center' },    
    maxW: { xs: '320px', xl: '650px' },
    margin: '0 auto',
  },
  '& > div': {
    marginTop: '3.875rem',
    '& > li': {
      width: '19.063rem',
      height: 'max-content',
      padding: '1.225rem 2.125rem',
      borderColor: '#232323',
      borderWidth: '1px',
      borderStyle: 'solid',
      rounded: '0.75rem',

      '& h3': {
        color: 'white',
        marginBottom: '1.2rem',
      },   
      '& > span': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '0.875rem',
        color: 'white',
        '&:not(:last-child)': {
          marginBottom: '0.875rem',
        },

        '& > div': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgColor: '#211F23',
          width: '2.125rem',
          height: '2.125rem',
          rounded: '100%'
        }
      }   
    }
  }
})