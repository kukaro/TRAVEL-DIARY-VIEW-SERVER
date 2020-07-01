import axios from 'axios'
import config from '../../config'

const valid_method = ['get', 'post', 'put', 'patch', 'delete'];

export function call(commit, method, path, success_mutation_name, fail_mutation_name, data = {}) {
    method = method.toLowerCase();
    const valid = valid_method.some((value, key) => {
        if (value === method) {
            return true;
        }
        return false;
    })
    if (valid) {
        axios.request({
            method: method,
            url: `http://${config.api_server_host}${path}`,
            data
        }).then((res) => {
            commit(success_mutation_name, res.data);
        }).catch((res) => {
            commit(fail_mutation_name, res)
        })
    } else {
        //TODO Throw error
        return null;
    }
}