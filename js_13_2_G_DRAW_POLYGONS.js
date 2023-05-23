G.DRAW = {
    //circle with center c00, radius r and (stroke, line_width, fill)
    f_cicrle: function (c00, r, obj_style) {
        var my_string = '<circle cx="' + c00.x + '" cy="' + c00.y + '" r="' + r + '"';
        return my_string + " " + obj_style.f_get_string() + ' " />';
    },

    //line between two points
    f_line: function (pa, pb, obj_style) {
        var my_string = '<line x1="' + pa.x + '" y1="' + pa.y + '" x2="' + pb.x + '" y2="' + pb.y + '"';
        return my_string + " " + obj_style.f_get_string(false, false) + ' " />';
    },

    //example of result string: 10,20 110,120
    f_get_string_pairs: function (p_arr, separator = ",", separator_between = " ") {
        var my_string = p_arr[0].f_get_string_xy(separator);
        for (var i = 1; i < p_arr.length; i++) {
            my_string += (separator_between + p_arr[i].f_get_string_xy(separator));
        }
        return my_string;
    },

    f_polygon_only: function (p_arr, obj_style, is_cross = false) {
        var my_string = '<polygon stroke-linejoin="round" points="' + G.DRAW.f_get_string_pairs(p_arr) + '"';
        var when_face = my_string + " " + obj_style.f_get_string() + ' />';
        var line_0_2 = G.DRAW.f_line(p_arr[0], p_arr[2], obj_style);
        var line_1_3 = G.DRAW.f_line(p_arr[1], p_arr[3], obj_style);
        var when_line_cross = line_0_2 + line_1_3;
        return is_cross ? when_line_cross : when_face;
    },

    f_polygon_obj: function (obj_polygon) {
        var my_string = G.DRAW.f_polygon_only(obj_polygon.p_arr, obj_polygon.obj_style, obj_polygon.is_cross);
        return my_string;
    },

    //draw array of styled polygons in order (or in sorted order, when is_sort == true)
    f_polygon_array_with_sort: function (arr_obj_polygon, is_sort = true) {
        var my_string = "", len = arr_obj_polygon.length, i_string, n;

        //sort z-coordinate of face's centers
        var a6  = G.ARR.f_sort_indexes_by_z_center(arr_obj_polygon);
        var b6 = is_sort ? G.ARR.f_gen_inverse_perm(a6) : G.ARR.f_gen_perm(len);
        //var b6 = G.ARR.f_gen_perm(len);
        
        for (i = 0; i < len; i++) {
            n = i
            n = is_sort ? b6[n] : n;
            i_string = G.DRAW.f_polygon_obj(arr_obj_polygon[n]);
            my_string += i_string;
        }

        return my_string;
    }
}
