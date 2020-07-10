const list = ['jwt'];
const ss = sessionStorage;

class SessionStorage {
    static validKey(name) {
        return list.some((value,/*key*/) => {
            if (value === name) {
                return true;
            }
        });
    }

    static set(key, value) {
        if (SessionStorage.validKey(key)) {
            ss[key] = value;
        }
    }

    static get(key) {
        if (SessionStorage.validKey(key)) {
            return ss[key];
        } else {
            return undefined;
        }
    }

    static remove(key){
        if (SessionStorage.validKey(key)) {
            delete ss[key];
        }
    }

    static getJwt() {
        if (SessionStorage.get('jwt')) {
            return JSON.parse(SessionStorage.get('jwt'));
        }else{
            return undefined;
        }
    }
}

export default SessionStorage;
