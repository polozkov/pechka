//visual settings
G.V = {
    SIZES_WH: new G.F_XYZ(300, 400),
    
    STYLES: {
        INVISIBLE: new G.F_STYLE("RGBA(0, 0, 0, 0.0)", 1, "RGBA(0, 0, 0, 0.0)"),

        DEFAULT: new G.F_STYLE("black", 1, "RGBA(128, 128, 128, 0.7)"),

        ARR_CUBE_COLORS: ["red","orange","yellow","green","cyan","blue","purple","brown"],

        f_default_styles_for_cube: function (i_cube = 0, i_face = 0, is_27 = true) {
            var fill_x = "#DDD"; var fill_x9 = "#777";
            var fill_y = "#999"; var fill_y9 = "#333";
            var fill_z = "#666"; var fill_z9 = "#111";
            var fill_xyz = [fill_x, fill_y, fill_z]; var fill_xyz9 = [fill_x9, fill_y9, fill_z9];

            var c_stroke = "black";
            var n = (i_face - i_face % 2) / 2;
            var c_fill = is_27 ? fill_xyz[n] : fill_xyz9[n];
            return new G.F_STYLE(c_stroke, 0.1, c_fill);
        }
    }
};