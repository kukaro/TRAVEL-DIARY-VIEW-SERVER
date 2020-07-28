class JwtDto {
    constructor({
                    access_token = null,
                    expires_in = null,
                    token_type = null
                }) {
        this.access_token = access_token;
        this.expires_in = expires_in;
        this.token_type = token_type;
    }
}

export default JwtDto;
