class PostcommentDto {
    constructor({id = null, owner_email, post_id, contents, parents_comment_id = null, created_date, updated_date}) {
        this.id = id;
        this.owner_email = owner_email;
        this.post_id = post_id;
        this.contents = contents;
        this.parents_comment_id = parents_comment_id;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }
}

export default PostcommentDto;
