class PostPictureDto {
    constructor({id = null, post_id, picture_id}) {
        this.id = id;
        this.post_id = post_id;
        this.picture_id = picture_id;
    }
}

export default PostPictureDto;
