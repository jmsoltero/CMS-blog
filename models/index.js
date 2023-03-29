const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comments');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

