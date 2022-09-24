class PostDto {
  userId;
  date;
  title;
  text;
  imgUrl;
  constructor(model) {
    this.userId = model.userId;
    this.date = model.date;
    this.title = model.title;
    this.text = model.text;
    this.imgUrl = model.imgUrl;
  }
}
module.exports = PostDto;
