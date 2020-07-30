class FriendDto {
    constructor({
                    id = null,
                    owner_email = null,
                    friend_email = null
                }) {
        this.id = id;
        this.owner_email = owner_email;
        this.friend_email = friend_email;
    }
}

export default FriendDto;
