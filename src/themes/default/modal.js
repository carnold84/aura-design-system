import { colors, fonts } from './variables';

export default {
  footer: {
    bgColor: colors.theme1,
    borderTop: `1px solid ${colors.theme2}`,
  },
  header: {
    bgColor: colors.theme1,
    borderBottom: `1px solid ${colors.theme2}`,
  },
  modal: {
    bgColor: colors.theme1,
    border: 'none',
    boxShadow: '0px 0px 20px 1px rgba(0, 0, 0, 0.15)',
  },
  overlay: {
    bgColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: colors.text1,
    fontFamily: fonts.primary,
    fontSize: '1.2em',
    fontWeight: 600,
    lineHeight: '1.2em',
  },
  fontFamily: fonts.secondary,
  fontSize: '1em',
  fontWeight: 600,
  lineHeight: '1em',
};