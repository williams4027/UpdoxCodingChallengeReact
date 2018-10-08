class ProviderData {
  constructor(first_name, last_name, email_address, specialty, practice_name) {
    this.first_name = first_name ? first_name : "" ;
    this.last_name = last_name ? last_name : "";
    this.email_address = email_address ? email_address : "";
    this.specialty = specialty ? specialty : "";
    this.practice_name = practice_name ? practice_name : "";
  }
}

export default ProviderData;
