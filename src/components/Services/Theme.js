export const theme = {
  colors: {    
    button: '#e44848',
    darkRed: "#DC143C",
    main: '#101828',
    inputs: 'f7f7f7',
    features: '#f2f4f7',
    rating: '#ffc531',    
    text: '#475467',
    Indigo: "#4B0082",     
    yellow: "#FFFF00",
    lightBlue: "#97d3e6",
    white: "#FFFFFF",
    transparent: "transparent",
    mainBackground: ['linear-gradient(to top, #0f2027, #203a43, #2c5364)'],
    imageBackground: ['red', 'linear-gradient (90deg, #ff9966,#ff5e62'],           
    },

    radii: {
        sm: "4px",
        md: "10px",
        lg: "16px",
    },

    fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
    xxl: '34px',
    xxxl: '42px',
    },
    
    breakpoints: {
    xs: '320px',
    s: '768px',
    m: '1024px',
    l: '1280px',
    xl: '1440px',
  },

  animations: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },

  transition: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',

  spasing: (value) => `${value * 4}px`,
}


