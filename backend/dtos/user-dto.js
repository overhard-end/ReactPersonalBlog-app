class UserDto {
  firstName;
  lastName;
  imgUrl;
  email;
  id;
  isActivated;

  constructor(model) {
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.imgUrl = model.imgUrl;
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
  }
}
module.exports = UserDto;
