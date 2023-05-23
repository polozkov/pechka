(function f_define_F_AB_prototype() {
    G.F_AB.f_by_center_and_wh = function (wh, c = new G.F_XYZ(0,0)) {
        var d50 = wh.f_op_scale(0.5);
        var a = c.f_op_sub(d50);
        var b = c.f_op_add(d50);
        return new G.F_AB([[a.x, a.y], [b.x, b.y]]);
    }

    G.F_AB.prototype.f_get_wh = function() {
        return new G.F_XYZ(this.b.x - this.a.x, this.b.y - this.a.y); 
    }

    G.F_AB.prototype.f_get_center = function() {
        return new G.F_XYZ((this.b.x + this.a.x) * 0.5, (this.b.y + this.a.y) * 0.5); 
    }

    G.F_AB.prototype.f_op_resize = function() {
        return new G.F_XYZ(this.b.x - this.a.x, this.b.y - this.a.y); 
    }

    G.F_AB.prototype.f_get_view_box = function() {
        var wh = this.f_get_wh();
        return this.a.x + ',' + this.a.y + ' ' + wh.x + ',' + wh.y;
    }
}());