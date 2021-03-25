const colorsName = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  mercury: "#E5E5E5",
  dodgerBlue: "#2188FF",
  scienceBlue: "#0366D6",
  slateGray: "#6E7E91",
  lightShaft: "#363636",
  mineShaft: "#252525",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  anakiwa: "#8CC2FF",
  tropicalBlue: "#CDE0F7",
  porcelain: "#F2F3F4",
  shipCove: "#6D93BE",
  doveGray: "#6D6D6D",
  tundora: "#414141",
  wattle: "#dcd750",
};

const common = {
  fontSize: {
    small: "12px",
    regular: "14px",
    normal: "18px",
    large: "20px",
    xlarge: "24px",
    xxlarge: "30px",
    xxxlarge: "32px",
    theLargest: "38px",
  },
  fontWeight: {
    normal: "400",
    regular: "600",
    bold: "700",
    black: "900",
  },
  media: {
    extraMobileSmall: "340px",
    extraMobile: "575.98px",
    mobile: "767.98px",
    tablet: "991.98px",
    desktop: "1199.98px",
  },
};

export const lightTheme = {
  ...common,
  colors: {
    primary: colorsName.scienceBlue,
    textPrimary: colorsName.mineShaft,
    outline: colorsName.wattle,
    body: {
      background: colorsName.whiteLilac,
      text: colorsName.slateGray,
    },
    buttonLink: {
      text: colorsName.white,
      border: colorsName.ironTransparent,
      shadow: colorsName.anakiwa,
    },
    sectionBackground: colorsName.white,
    headerLine: colorsName.mercury,
    tile: {
      border: colorsName.porcelain,
      borderHover: colorsName.tropicalBlue,
      header: colorsName.scienceBlue,
    },
    themeSwitch: {
      background: colorsName.mercury,
      icon: colorsName.white,
    },
  },
};

export const darkTheme = {
  ...common,
  colors: {
    primary: colorsName.dodgerBlue,
    textPrimary: colorsName.white,
    outline: colorsName.wattle,
    body: {
      background: colorsName.mineShaft,
      text: colorsName.white,
    },
    buttonLink: {
      text: colorsName.white,
      border: colorsName.ironTransparent,
      shadow: colorsName.shipCove,
    },
    sectionBackground: colorsName.lightShaft,
    headerLine: colorsName.tundora,
    tile: {
      border: colorsName.tundora,
      borderHover: colorsName.blumine,
      header: colorsName.white,
    },
    themeSwitch: {
      background: colorsName.mercury,
      icon: colorsName.mineShaft,
    },
  },
};
