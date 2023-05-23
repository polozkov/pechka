//visual settings
G.V = {
    SIZES_WH: new G.F_XYZ(300, 400),
    
    STYLES: {
        INVISIBLE: new G.F_STYLE("RGBA(0, 0, 0, 0.0)", 1, "RGBA(0, 0, 0, 0.0)"),

        DEFAULT: new G.F_STYLE("black", 1, "RGBA(128, 128, 128, 0.7)"),

        ARR_CUBE_COLORS: ["red","orange","yellow","green","cyan","blue","purple","brown"],

        f_default_styles_for_cube: function (i_cube = 0) {
            var c = G.V.STYLES.ARR_CUBE_COLORS[i_cube];
            return new G.F_STYLE(c, 1, "RGBA(255,255,255,0.6)");
        }
    }
};