import { colors, fonts } from './variables';

export default {
  bgColor: colors.theme1,
  borderBottom: '3px solid transparent',
  color: colors.text2,
  fontFamily: fonts.primary,
  _active: {
    borderBottom: `3px solid ${colors.primary1}`,
    color: colors.primary1,
  },
  _hover: {
    color: colors.primary1,
  },
};