const list = ['Authorization'];

class Cookie {
    static list = [];

    static validKey(name) {
        return list.some((value,/*key*/) => {
            if (value === name) {
                return true;
            }
        });
    }

    static set(key, value) {
        if (Cookie.validKey(key)) {
            document.cookie=`${key}=${value}`
        }
    }

    static get(key) {
        if (Cookie.validKey(key)) {
            let list = document.cookie.split(';');
            let obj = {}
            list.forEach((value, key) => {
                key = value.split('=')[0];
                value = value.split('=')[1];
                return obj[key] = value;
            })
            return obj[key];
        } else {
            return undefined;
        }
    }

    static remove(key) {
        if (Cookie.validKey(key)) {
            document.cookie=`${key}=${value};Expires=${new Date().toUTCString()}`
        }
    }

    static getJwt() {
        if (Cookie.get('jwt')) {
            return JSON.parse(Cookie.get('jwt'));
        } else {
            return undefined;
        }
    }
}

export default Cookie;
