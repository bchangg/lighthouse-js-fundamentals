/*
 * Programming Quiz: Facebook Friends (7-5)
 */

let facebookProfile = {
  name: "Brian",
  friends: 10,
  messages: ["hello", "world", "hola"],
  postMessage: function(message) {
    this.messages.push(message);
  },
  deleteMessage: function(index) {
    this.messages.splice(index, 1);
  },
  addFriend: function() {
    this.friends++;
  },
  removeFriend: function() {
    this.friends--;
  }
}
