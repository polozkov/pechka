G.TRICUBE = {
  f_string_to_coord_3d: function (s, mult = 1) {
    function f_is_digit(t) {
      return (
        t == "0" ||
        t == "1" ||
        t == "2" ||
        t == "3" ||
        t == "4" ||
        t == "5" ||
        t == "6" ||
        t == "7" ||
        t == "8" ||
        t == "9"
      );
    }
    function f_to_digit(t) {
      return Number(t);
    }

    var arr_result = [];
    var i_xyz = [0, 0, 0];

    var i, i_char;
    for (i = 0; i < s.length; i++) {
      i_char = s.substring(i, i + 1);
      //console.log(i, i_char);
      if (f_is_digit(i_char)) {
        i_xyz[0] = f_to_digit(i_char * mult);
        arr_result.push(i_xyz.slice());
        continue;
      }
      if (i_char == ",") {
        i_xyz[2] += mult;
        continue;
      }
      if (i_char == ";") {
        i_xyz[2] = 0;
        i_xyz[1] -= mult;
        continue;
      }
    }
    return arr_result;
  },

  //my_shift in absolute shift
  f_string_to_svg: function (s, my_shift_absolute = [0,0], scale = new G.F_XYZ(2,2,2), rotation_xyz = new G.F_XYZ(-15,-20,5), cube_ratio_fill = 0.9) {
    var ARR_CENTERS = G.TRICUBE.f_string_to_coord_3d(s, 2);
    function  f_shift(xy) {
      return [xy[0] * 2 - 20, xy[1] * 2 - 5];
    }
    function f_i_cube(i) {
        return ({center: new G.F_XYZ(
            ARR_CENTERS[i][0],
            ARR_CENTERS[i][1],
            ARR_CENTERS[i][2]
        )});
    }
    if ((ARR_CENTERS.length % 9) !== 0) {
      alert(s);
    }
    var arr_cubes = G.ARR.f_gen(ARR_CENTERS.length, f_i_cube);
    var svg_form = G.DRAW.CUBE.f_draw_polycube(arr_cubes, scale, rotation_xyz, cube_ratio_fill, ARR_CENTERS.length == 27);

    var dxy = f_shift(my_shift_absolute)[0] + ' ' + f_shift(my_shift_absolute)[1];
    return '<g transform="translate(' + dxy + ')">' + svg_form + '</g>';
}
};
