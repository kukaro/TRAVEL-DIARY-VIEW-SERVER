class CriteriaDto {
    constructor({value, cb, param = []}) {
        this.value = value;
        if (!cb) {
            cb = function () {
                console.log('EMPTY FUNCTION : ', ...param);
            }
        }
        this.cb = cb;
        this.param = param
    }
}
export default CriteriaDto;
