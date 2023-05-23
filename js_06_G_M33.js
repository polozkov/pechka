G.M_33 = {
    f_mult_matrix_left_right: function (L, R) {
        function f(row, col) {
            return L[row][0] * R[0][col] + L[row][1] * R[1][col] + L[row][2] * R[2][col];
        }
        return [[f(0,0), f(0,1), f(0,2)], [f(1,0), f(1,1), f(1,2)], [f(2,0), f(2,1), f(2,2)]];
    },

    f_rot_z: function (SIN, COS) {
        return [[COS, SIN, 0], [-SIN, COS, 0], [0, 0, 1]]; 
    },

    f_rot_y: function (SIN, COS) {
        return [[COS, 0, -SIN], [0, 1, 0], [SIN, 0, COS]]; 
    },

    f_rot_x: function (SIN, COS) {
        return [[1, 0, 0], [0, COS, SIN], [0, -SIN, COS]]; 
    },

    //order: rotate x, rotate y, rotate z
    f_rot_xyz: function (arr_sin_cos_xyz) {
        var m33_x = G.M_33.f_rot_x(arr_sin_cos_xyz[0][0], arr_sin_cos_xyz[0][1]);
        var m33_y = G.M_33.f_rot_y(arr_sin_cos_xyz[1][0], arr_sin_cos_xyz[1][1]);
        var m33_z = G.M_33.f_rot_z(arr_sin_cos_xyz[2][0], arr_sin_cos_xyz[2][1]);

        var m33_y_m33_x = G.M_33.f_mult_matrix_left_right(m33_y, m33_x);
        return G.M_33.f_mult_matrix_left_right(m33_z, m33_y_m33_x);
    },

    f_rot_degrees: function (arr_deg_xyz) {
        function f_sin_cos(deg) {var rad = deg * Math.PI / 180; return [Math.sin(rad), Math.cos(rad)]; }
        var arr_sin_cos_xyz = [f_sin_cos(arr_deg_xyz.x), f_sin_cos(arr_deg_xyz.y), f_sin_cos(arr_deg_xyz.z)];
        //debugger
        return G.M_33.f_rot_xyz(arr_sin_cos_xyz);
    },

    f_scale_xyz: function(obj_xyz_scale = new G.F_XYZ(1,1,1)) {
        return [[obj_xyz_scale.x, 0,0], [0,obj_xyz_scale.y,0], [0,0,obj_xyz_scale.z]];
    },

    //order: scale, rotate
    f_scale_and_rot: function(obj_xyz_scale = new G.F_XYZ(1,1,1), arr_deg_xyz = new G.F_XYZ(0,0,0)) {
        var m_scale = G.M_33.f_scale_xyz(obj_xyz_scale);
        var m_rot = G.M_33.f_rot_degrees(arr_deg_xyz);
        //debugger
        return G.M_33.f_mult_matrix_left_right(m_rot, m_scale);
    }
}

//console.log(G.M_33.f_rot_degrees([0,0,0]));