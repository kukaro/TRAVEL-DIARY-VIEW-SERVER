class FriendDto {
    constructor({
                    id = null,
                    owner_id = null,
                    friend_email = null
                }) {
        this.id = id;
        this.owner_id = owner_id;
        this.friend_email = friend_email;
    }
}

export default FriendDto;
