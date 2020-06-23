export function sBind(prefix, target_datas, dest_datas) {  
    Object.keys(target_datas.state).forEach(key => {
        const value = target_datas.state[key];
        dest_datas.state[`${prefix}_${key}`] = value;
    });
    Object.keys(target_datas.mutations).forEach(key => {
        const value = target_datas.mutations[key];
        dest_datas.mutations[`${prefix}_${key}`] = value;
    });
    Object.keys(target_datas.actions).forEach(key => {
        const value = target_datas.actions[key];
        dest_datas.actions[`${prefix}_${key}`] = value;
    });
    Object.keys(target_datas.getters).forEach(key => {
        const value = target_datas.getters[key];
        dest_datas.getters[`${prefix}_${key}`] = value;
    });
}