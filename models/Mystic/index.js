const mongoose = require('mongoose');
const EnchantSchema = require('./EnchantSchema');
const ItemSchema = require('./ItemSchema');

const MysticSchema = mongoose.Schema({
    enchants: {
        type: [EnchantSchema],
        index: true,
    },
    lastseen: {
        type: Date,
        index: true
    },
    lastseenOffline: {
        type: Date,
        index: true,
    },
    flags: [String],
    owner: String,
    nonce: {
        type: Number,
        index: true,
    },
    lives: {
        type: Number,
        index: true,
    },
    maxLives: {
        type: Number,
        index: true,
    },
    tokens: {
        type: Number,
        index: true,
    },
    tier: {
        type: Number,
        index: true,
    },
    owners: [{
        uuid: String,
        time: Date,
    }],
    item: ItemSchema,
    t1: [EnchantSchema],
    t2: [EnchantSchema],
    t3: [EnchantSchema],
});

MysticSchema.index({ nonce: 1, enchants:1,  maxLives: 1 });//, { expireAfterSeconds: 60 * 60 * 24 * 30 * 3 }); // 3 months

module.exports = mongoose.model('Mystics', MysticSchema);
