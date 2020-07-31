class UserDto {
    constructor({id, email, name, age, birth_date, password, is_hiworks, created_date, updated_date}) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.age = age;
        this.birth_date = birth_date;
        this.password = password;
        this.is_hiworks = is_hiworks;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }
}

export default UserDto;
