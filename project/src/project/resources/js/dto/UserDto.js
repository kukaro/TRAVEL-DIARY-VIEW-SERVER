class UserDto {
    constructor({ email, name, age, birth_date, password, created_date, updated_date }) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.birth_date = birth_date;
        this.password = password;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }
}

export default UserDto;