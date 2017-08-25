// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
  	name: "Betty Boop",
  	photo: "http://img1.picturescafe.com/pc/023/001.gif",
  	scores: ["1","3","3","4","3","1","1","2","4","3"]
  },
  {
  	name: "James Johnson",
  	photo: "https://www.3dartistonline.com/users/4058/thm1024/tguy5_render02_f.jpg",
  	scores: ["1","1","5","1","3","5","4","4","4","3"]
  }
];



// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
