(function f_define_F_XYZ_prototype() {
    G.F_XYZ.prototype.f_op_copy = function() {
        return new G.F_XYZ(this.x, this.y, this.z);
    }

    G.F_XYZ.prototype.f_op_add = function(p) {
        return new G.F_XYZ(this.x + p.x, this.y + p.y, this.z + p.z);
    }
    
    G.F_XYZ.prototype.f_op_sub = function(p) {
        return new G.F_XYZ(this.x - p.x, this.y - p.y, this.z - p.z);
    }

    G.F_XYZ.prototype.f_op_mult = function(p) {
        return new G.F_XYZ(this.x * p.x, this.y * p.y, this.z * p.z);
    }

    G.F_XYZ.prototype.f_op_scale = function(ratio) {
        return new G.F_XYZ(this.x * ratio, this.y * ratio, this.z * ratio);
    }

    G.F_XYZ.prototype.f_op_add_self = function(p) {
        this.x += p.x;
        this.y += p.y;
        this.z += p.z;
    }
    G.F_XYZ.prototype.f_op_sub_self = function(p) {
        this.x -= p.x;
        this.y -= p.y;
        this.z -= p.z;
    }

    //is this === p (check three coordinates: x,y,z)
    G.F_XYZ.prototype.f_is_xyz_eq = function(p) {
        return ((this.x === p.x) && (this.y === p.y) && (this.z === p.z));
    }

    //if this > p return 1, if this < p return -1, if equal return 0
    G.F_XYZ.prototype.f_compare_sign = function(p) {
        if (this.z !== p.z) {return ((this.z > p.z) ? 1 : -1);}
        if (this.y !== p.y) {return ((this.y > p.y) ? 1 : -1);}
        if (this.x !== p.x) {return ((this.x > p.x) ? 1 : -1);}
        return 0;
    }

    //new vector-row = old vector-row * m33 (array 3*3 of real))
    G.F_XYZ.prototype.f_op_mult_matrix_33 = function (m33) {
        var X = m33[0], Y = m33[1], Z = m33[2];
        var new_x = X[0] * this.x + Y[0] * this.y + Z[0] * this.z;
        var new_y = X[1] * this.x + Y[1] * this.y + Z[1] * this.z;
        var new_z = X[2] * this.x + Y[2] * this.y + Z[2] * this.z;
        return new G.F_XYZ(new_x, new_y, new_z);
    }

    G.F_XYZ.prototype.f_op_rotate_ort_n012_self = function (ort_012, n_90_0123) {
        return this.f_op_copy(); //TO DO
    }

    G.F_XYZ.prototype.f_get_string_xy = function(separator = ",") {
        return (this.x + separator + this.y);
    }
}());

