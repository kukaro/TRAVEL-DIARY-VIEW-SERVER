import axios from 'axios'
import config from '../../config'

const valid_method = ['get', 'post', 'put', 'patch', 'delete'];

//TODO : 이부분 나중에 로그인 로직 정립되면 반드시 바뀌어야 함
export function loginCall(commit, data, success_mutation_name, fail_mutation_name) {
    axios.request({
        method: 'post',
        url: `${config.api_server_host}/login`,
        data: `email=${data.email}&password=${data.password}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((res) => {
        commit(success_mutation_name, {res, data});
    }).catch((res) => {
        commit(fail_mutation_name, res)
    })
}

export function call(commit,
                     method,
                     path,
                     success_mutation_name,
                     fail_mutation_name,
                     data = {},
                     headers={}) {
    method = method.toLowerCase();
    const valid = valid_method.some((value, key) => {
        if (value === method) {
            return true;
        }
        return false;
    });
    if (valid) {
        axios.request({
            method: method,
            url: `${config.api_server_host}${path}`,
            data,
            headers
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
