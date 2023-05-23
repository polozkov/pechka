(function f_test() {
    G.EL.f_set_view_box();

    var sizes_xyz_grid = new G.F_XYZ(100,100,100);
    var rotation_xyz = new G.F_XYZ(-10,-20,0);
    var cube_ratio_fill = 0.9;

    var arr_cubes = [
        {center: new G.F_XYZ(0,-2,0)}, {center: new G.F_XYZ(2,-2,0)},
        {center: new G.F_XYZ(0,0,0)}, {center: new G.F_XYZ(2,0,0)}, 
        {center: new G.F_XYZ(0,2,0)}, {center: new G.F_XYZ(2,2,0)}, 
        {center: new G.F_XYZ(0,4,0)}, {center: new G.F_XYZ(0,4,2)}
    ];

    var svg = G.DRAW.CUBE.f_draw_polycube(arr_cubes, sizes_xyz_grid, rotation_xyz, cube_ratio_fill);

    //debugger
    G.EL.f_add_html(svg);
}());