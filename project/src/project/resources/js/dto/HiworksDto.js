class HiworksDto {
    constructor(
        {
            access_token = null,
            refresh_token = null,
            office_no = null,
            user_no = null,
        }
    ) {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.office_no = office_no;
        this.user_no = user_no;
    }

}

export default HiworksDto;
