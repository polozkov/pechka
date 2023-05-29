G.DRAW.CUBE = {
    f_arr_v8: function(m33, center_xyz = new G.F_XYZ(0.0, 0.0, 0.0), cube_ratio = 1.0) {
        function f(i8) {
            var cube_vertex = G.C.arr_v8_obj[i8].f_op_mult_matrix_33(m33).f_op_scale(cube_ratio);
            return cube_vertex.f_op_add(center_xyz);
        }
        return G.ARR.f_gen(8, f);
    },

    f_all_faces: function (p8, i_cube = 0, is_27 = true) {
        //return [arr4_vertices_of_face] in [brackets] for adding style
        var f = function(i) {
            var arr4_vertices_of_face = G.C.arr_f6[i]
            var f_vertice = function(i_vertice) {
                return p8[arr4_vertices_of_face[i_vertice]].f_op_copy();
            }
            var arr_points = G.ARR.f_gen(arr4_vertices_of_face.length, f_vertice);
            //debugger
            var style = G.V.STYLES.f_default_styles_for_cube(i_cube, i, is_27);
            //debugger
            return new G.F_POLYGON(arr_points, style);
        }

        //console.log(f(0));
        return [f(0), f(1), f(2), f(3), f(4), f(5)];
    },

    f_draw_cube: function (sizes_xyz, rotation_xyz, center_xyz = new G.F_XYZ(0.0, 0.0, 0.0)) {
        var m33 = G.M_33.f_scale_and_rot(sizes_xyz.f_op_scale(0.5), rotation_xyz);
        var v8 = G.DRAW.CUBE.f_arr_v8(m33, center_xyz);

        var arr6_faces = G.DRAW.CUBE.f_all_faces(v8);
        return G.DRAW.f_polygon_array_with_sort(arr6_faces);
    },

    f_draw_polycube: function (arr_cubes, sizes_xyz_grid, rotation_xyz, cube_ratio_fill, is_27 = true) {
        var m33 = G.M_33.f_scale_and_rot(sizes_xyz_grid.f_op_scale(0.5), rotation_xyz);


        function f_arr6_faces(i) {
            var c00 = arr_cubes[i].center.f_op_mult_matrix_33(m33);
            var v8 = G.DRAW.CUBE.f_arr_v8(m33, c00, cube_ratio_fill);
            var arr6_faces = G.DRAW.CUBE.f_all_faces(v8, i, is_27);
            return arr6_faces;
        }

        var arr_faces = [], temp_cube = [], t, i6;

        for (t = 0; t < arr_cubes.length; t++) {
            temp_cube.push(f_arr6_faces(t));
            for (i6 = 0 ; i6 < 6; i6++) {
                arr_faces.push(temp_cube[t][i6]);
            }
        }

        return G.DRAW.f_polygon_array_with_sort(arr_faces);
    }
};