import { css } from "../../../styled-system/css";

export const educations = css({
  padding: { xs: '0 2.125rem', xl: 'unset'},
  maxW: { xl: '1120px', '2xl': '1520px' },  
  margin: { xl: '15.625rem auto 8.75rem auto' },

  '& li': {
    display: 'flex',
    flexDir: { xs: 'column', xl: 'row' },
    gap: { xs: '3.875rem', xl: '' },
    alignItems: { xl: 'center' },
    justifyContent: { xl: 'space-between' },
    padding: { xs: '2.125rem'},
    borderColor: 'gray.700',
    borderWidth: '1px',
    borderStyle: 'solid',
    rounded: '2.5rem',

    '& > div': {
      display: 'flex',
      flexDir: 'column',
      gap: '0.625rem',
    },

    '& h2': {
      color: 'white',
      fontWeight: 'semibold',
      fontSize: { xl: '1.75rem' }
    },
    '& p': {
      color: 'purple.300'
    },
    '& time': {
      color: 'gray.400'
    },
    '& a': {
      color: 'green.500',
      fontSize: '1.375rem',
      '_hover': {
        filter: 'brightness(0.8)',
      }
    },
  },

  '& li:not(:last-child)': {
    marginBottom: '2rem',
  },  
})