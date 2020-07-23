import config from '../../config'

export function fullHiworksOauthUri() {
    return `${config.hiworks_oath_uri}?client_id=${config.client_id}&access_type=offline`
}
