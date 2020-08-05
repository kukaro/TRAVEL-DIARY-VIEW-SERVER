class FriendDto {
    constructor({
                    id = null,
                    owner_id = null,
                    friend_id = null
                }) {
        this.id = id;
        this.owner_id = owner_id;
        this.friend_id = friend_id;
    }
}

export default FriendDto;
