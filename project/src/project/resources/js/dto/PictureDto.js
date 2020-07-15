class PictureDto {
    constructor({id = null, owner_email, location, path, created_date, updated_date}) {
        this.id = id;
        this.owner_email = owner_email;
        this.location = location;
        this.path = path;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }
}

export default PictureDto;
