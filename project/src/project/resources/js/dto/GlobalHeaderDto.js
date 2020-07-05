/**
 * cb_name is vuex mutations name
 */
class GlobalHeaderDto {
    constructor(path, real_name, view_name, cb_name = null) {
        this.path = path;
        this.real_name = real_name;
        this.view_name = view_name;
        this.cb_name = cb_name;
    }
}

export default GlobalHeaderDto;
