class PictureDto {
    constructor({id = null, owner_id, location, path, created_date, updated_date}) {
        this.id = id;
        this.owner_id = owner_id;
        this.location = location;
        this.path = path;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }
}

export default PictureDto;
