'use strict';

var names = ['John', 'Maike'];

names.forEach( name => {
  if (name === 'John') {
    console.info(`Hei, ${name}`);
  }
});


var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f => {
      console.log(`${this._name} knows ${f}`);
    });
  }
}


class User extends Backbone.Model {
  constructor() {
    super();

    this.bones = [];
    this.boneMatrices = [];
  }

  get boneCount() {
    return this.bones.length;
  }

  set MatrixType(matrixType) {
    this.idMatrix = matrixType;
  }

  static defaultMatrix() {
    return 'Hello World';
  }

}
