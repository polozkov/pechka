G.ARR = {
    //generate array by function-generator
    f_gen: function (len, f) {
        var my_arr = [], i;
        for (i = 0; i < len; i++) {
            my_arr.push(f(i));
        }
        return my_arr;
    },

    f_op_copy: function (arr) {
        var arr_result = [], i;
        for (i = 0; i < arr.length; i++) {
            arr_result.push(arr[i].f_op_copy());
        }
        return arr_result;
    },

    f_gen_perm: function(len) {
        return G.ARR.f_gen(len, function(i) {return i});  
    },

    f_gen_inverse_perm: function(p) {
        var len = p.length;
        var my_arr = G.ARR.f_gen(len, function(i) {return -1});
        for (i = 0; i < len; i++) {
            my_arr[p[i]] = i;
        }
        return my_arr;
    },

    //return permutatation with sorting of indexes
    f_sort_indexes: function(arr_center_points_z) {
        var len = arr_center_points_z.length;
        //it will be permutation
        var arr_indexes = G.ARR.f_gen(len, function() {return -1});

        //set min of undefined (minus ones)
        function f_set_min_value(i_order_from_min_is_unused) {
            var current_value = +Infinity;
            //search element, that if minimum (for i_order_from_min == 0), e.t.c.
            var current_i = undefined;
            for (var j = 0; j < len; j++)  {
                if (arr_indexes[j] === (-1)) {
                    if (arr_center_points_z[j] < current_value) {
                        current_value = arr_center_points_z[j];
                        current_i = j;
                    }
                }
            }
            arr_indexes[current_i] = i_order_from_min_is_unused;
        }

        for (var i = 0; i < len; i++) {
            f_set_min_value(i);
        }

        return arr_indexes;
    },

    f_center_of_points: function(arr_points) {
        var sum = new G.F_XYZ();
        for (var i = 0; i < arr_points.length; i++) {
            sum = sum.f_op_add(arr_points[i])
        }
        return sum.f_op_scale(1 / arr_points.length);
    },

    f_sort_indexes_by_z_center: function(arr_obj_polygons) {
        var len = arr_obj_polygons.length;

        //center by z-coordinates
        function f(n) {
            var arr_points = arr_obj_polygons[n].p_arr;
            return G.ARR.f_center_of_points(arr_points).z
        }

        var arr_center_points_z = G.ARR.f_gen((len), f);

        return G.ARR.f_sort_indexes(arr_center_points_z);
    }
};

