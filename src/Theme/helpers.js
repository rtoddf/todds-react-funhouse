import tinycolor from 'tinycolor2';

export function setThemeColors(colors) {
    let palette = { primary: {}, secondary: {}, tertiary: {}, quaternary: {}, quinary: {} }

    const primaryPalette = computeColors(colors.primary),
        secondaryPalette = computeColors(colors.secondary),
        teriaryPalette = computeColors(colors.secondary),
        quaternaryPalette = computeColors(colors.secondary),
        quinaryPalette = computeColors(colors.secondary);

    palette.primary = Object.assign({}, ...primaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    palette.secondary = Object.assign({}, ...secondaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    palette.tertiary = Object.assign({}, ...teriaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    palette.quaternary = Object.assign({}, ...quaternaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    palette.quinary = Object.assign({}, ...quinaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    return palette;
}

export function setThemeFonts(fonts) {
    let typography = {"fontSize": fonts.fontSize};

    function getValues(){
        for (let [key, value] of Object.entries(fonts)) {
            console.log(`${key}: ${value}`);
        }
    }
    
    getValues();

    console.log("typography: ", typography)
    return typography;
}

function getColorObject(value, name) {
    var c = tinycolor(value);

    return {
        name: name,
        hex: c.toHexString(),
        darkContrast: c.isLight()
    }
}

export function computeColors(hex) {
    return [
      getColorObject(tinycolor(hex).lighten(52), '50'),
      getColorObject(tinycolor(hex).lighten(37), '100'),
      getColorObject(tinycolor(hex).lighten(26), '200'),
      getColorObject(tinycolor(hex).lighten(12), '300'),
      getColorObject(tinycolor(hex).lighten(6), '400'),
      getColorObject(tinycolor(hex), '500'),
      getColorObject(tinycolor(hex).darken(6), '600'),
      getColorObject(tinycolor(hex).darken(12), '700'),
      getColorObject(tinycolor(hex).darken(18), '800'),
      getColorObject(tinycolor(hex).darken(24), '900'),
      getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
      getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
      getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
      getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
    ]
}