(function f_define_F_CUBE_prototype() {
    G.F_CUBE.prototype.f_op_copy = function() {
        return new G.F_CUBE(this.n24_rotation, this.center);
    }
}());