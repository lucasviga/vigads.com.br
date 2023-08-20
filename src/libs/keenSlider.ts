export const keenSliderConfig = (isMobile: boolean) => {
  return {
    loop: true,
    mode: "free",
    slides: { 
      origin: "center", 
      perView: isMobile ? 1.2 : 3.5, 
      spacing: isMobile ? 15 : 80, 
    },
    range: {
      min: -5,
      max: 5,
    }
  }
}