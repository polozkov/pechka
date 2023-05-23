//Global object for all project
var G = {
    //generator of the arrays
    ARR: {},

    //3d point (for centers of cubes x,y,z are integer even nubbers, step = 2)
    F_XYZ: function(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    },

    F_AB: function(m22) {
        this.a = new G.F_XYZ(m22[0][0], m22[0][1]);
        this.b = new G.F_XYZ(m22[1][0], m22[1][1]);
    },

    //HTML-elements, SVG-element for drawing 
    EL: {},



    //matrix 3by3 of rotation of the cube
    M_33: {},

    //style of SVG element (stroke, stroke_width, fill)
    F_STYLE: function(stroke = "black", stroke_width = 1, fill = "gray") {
        this.stroke = stroke;
        this.fill = fill;
        this.stroke_width = stroke_width;
    },

    //constants (of the cube faces, rotations e.t.c.)
    C: {},

    F_POLYGON: function(p_arr, obj_style, is_cross = false) {
        this.p_arr = G.ARR.f_op_copy(p_arr);
        this.obj_style = obj_style.f_op_copy();
        this.z_index = G.ARR.f_center_of_points(p_arr);

        //cross is connector, false is face
        this.is_cross = is_cross;
    },

    //visual settings
    V: {},

    F_CUBE: function(n24_rotation = 0, center = new G.F_XYZ()) {
        //rotation from the start position
        this.n24_rotation = n24_rotation;

        //3d coord (x,y,z), where values are integers and even (step = 2)
        this.center = center.f_op_copy();
    },

    F_EDGE: function(n_cube, face_0, face_1) {
        this.n_cube = n_cube;
        this.face_0 = face_0;
        this.face_1 = face_1;
    },

    F_EDGE_PAIR: function(edge_a, edge_b) {
        this.edge_a = new G.F_EDGE(edge_a.n_cube, edge_a.face_0, edge_a.face_1);
        this.edge_b = new G.F_EDGE(edge_b.n_cube, edge_b.face_0, edge_b.face_1);
    },

    //arr_edge_pair we must copy before
    F_TASK: function(arr_edge_pair, arr_012) {
        this.arr_edge_pair = arr_edge_pair;
        this.arr_012 = arr_012.slice();
    },

    //output on SVG
    DRAW: {},

    //Artificial intelligence for solving puzzle
    AI: {}
};