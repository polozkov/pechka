G.C = {
    //8 vertices of cubes
    arr_v8: [
        [-1, -1, -1],
        [-1, -1, +1],
        [-1, +1, -1],
        [-1, +1, +1],
        [+1, -1, -1],
        [+1, -1, +1],
        [+1, +1, -1],
        [+1, +1, +1]
    ],

    arr_v8_obj: [
        new G.F_XYZ(-1, -1, -1),
        new G.F_XYZ(-1, -1, +1),
        new G.F_XYZ(-1, +1, -1),
        new G.F_XYZ(-1, +1, +1),
        new G.F_XYZ(+1, -1, -1),
        new G.F_XYZ(+1, -1, +1),
        new G.F_XYZ(+1, +1, -1),
        new G.F_XYZ(+1, +1, +1)
    ],

    //6 3D directions
    arr_dir6: [
        [-1, 0, 0],
        [1, 0, 0],
        [0, -1, 0],
        [0, 1, 0],
        [0, 0, -1],
        [0, 0, 1]
    ],

    //6 faces of cubes: minusX, plusX, mY,pY, mZ,pZ
    arr_f6: [
        [0, 2, 6, 4],
        [7, 3, 1, 5],
        [0, 4, 5, 1],
        [7, 6, 2, 3],
        [0, 1, 3, 2],
        [7, 5, 4, 6]
    ],

    arr_6_6_to_edge: [
        [[null,null],[null,null],[4,0],[2,6],[0,2],[6,4]],
        [[null,null],[null,null],[1,5],[7,3],[3,1],[5,7]],

        [[0,4],[5,1],[null,null],[null,null],[1,0],[4,5]],
        [[6,2],[3,7],[null,null],[null,null],[2,3],[7,6]],

        [[2,0],[1,3],[0,1],[3,2],[null,null],[null,null]],
        [[4,6],[7,5],[5,4],[6,7],[null,null],[null,null]]
    ]
};