class PostDto {
    constructor({id = null, owner_email, title = null, contents = null, parents_post_id = null, created_date, updated_date}) {
        this.id = id;
        this.owner_email = owner_email;
        this.title = title;
        this.contents = contents;
        this.parents_post_id = parents_post_id;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }
}

export default PostDto;
