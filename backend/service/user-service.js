const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('../service/mail-service');
const tokenService = require('../service/token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');
const userModel = require('../models/user-model');
const tokenModel = require('../models/token-model');
const { ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class UserService {
  async registration(firstName, lastName, email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с почтой ${email} уже зарегестрирован!`);
    }
    const passHash = await bcrypt.hash(password, 5);
    const activationLink = uuid.v4();
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password: passHash,
      activationLink,
    });
    await mailService.SendActivationMail(
      email,
      `${process.env.API_URL}/api/activated/${activationLink}`,
    );
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async activated(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest(`Не правильная ссылка для активации`);
    }
    user.isActivated = true;
    await user.save();
  }
  async login(email, password) {
    const user = await userModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest('Нет пользователя с таким email');
    }
    const passHashFromClient = await bcrypt.compare(password, user.password);
    if (!passHashFromClient) {
      throw ApiError.BadRequest('Не верный пороль');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }
  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError('нет токена');
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError('нет ');
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }
  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }
  async changeUserData(UserId, dataForChange, file) {
    if (!dataForChange) {
      return ' нет даных для измениний';
    }

    if (file) {
      var id = crypto.randomBytes(20).toString('hex');
      const fileExt = path.extname(file.name);

      const imgUrl = process.env.API_URL + '/images/' + id + fileExt;
      const pathToSave = 'uploads/images/' + id + fileExt;
      file.mv(pathToSave, (error) => {
        if (error) {
          console.log(error);
        }
      });
      dataForChange.imgUrl = imgUrl;
    }
    if (dataForChange.email) {
      dataForChange.isActivated = false;
      const activationLink = uuid.v4();
      dataForChange.activationLink = activationLink;
      await mailService.SendActivationMail(
        dataForChange.email,
        `${process.env.API_URL}/api/activated/${activationLink}`,
      );
    }

    if (dataForChange.password) {
      const newPassHash = await bcrypt.hash(dataForChange.password, 5);
      dataForChange.password = newPassHash;
    }
    console.log(dataForChange);
    await UserModel.updateOne({ _id: ObjectId(UserId) }, { $set: { ...dataForChange } });
    const ChangedUserData = await UserModel.findOne({ _id: ObjectId(UserId) });
    const userDto = new UserDto(ChangedUserData);
    return userDto;
  }
}
module.exports = new UserService();
