G.EL =  {
    main_svg: document.getElementById("id_main_svg"),

    f_clear_html: function(el = G.EL.main_svg) {
        el.innerHTML = "";
    },

    f_add_html: function(inner_html_to_add, el = G.EL.main_svg) {
        el.innerHTML = el.innerHTML + inner_html_to_add;
    },

    f_set_view_box: function(must_wh = new G.F_XYZ(1000, 1000), el = G.EL.main_svg) {
        var old_wh = new G.F_XYZ(el.clientWidth, el.clientHeight);
        var scale, view_box_string, new_wh;

        //vertical orientation
        if ((must_wh.x * old_wh.y) > (must_wh.y *old_wh.x)) {
            scale = must_wh.x / old_wh.x;
        } else {
            scale = must_wh.y / old_wh.y;
        }

        new_wh = old_wh.f_op_scale(scale);
        view_box_string = G.F_AB.f_by_center_and_wh(new_wh).f_get_view_box();
        el.setAttribute("viewBox", view_box_string);
        console.log(new_wh);
    }
};

