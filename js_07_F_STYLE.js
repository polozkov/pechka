//get styles: stroke, stroke_width, fill (and optional id) as one string (for SVG element)
G.F_STYLE.prototype.f_get_string = function(with_fill = true, id = false) {
    var stroke = 'stroke="' + this.stroke + '"';
    var stroke_width = ' stroke-width="' + this.stroke_width + '"';
    var fill = with_fill ? (' fill="' + this.fill + '"') : "";

    //identifisator for mouse events
    var el_id = id ? (' id="' + id + '"') : ""; 
    return stroke + stroke_width + fill + el_id;
}

G.F_STYLE.prototype.f_op_copy = function() {
    return new G.F_STYLE(this.stroke, this.stroke_width, this.fill);
}