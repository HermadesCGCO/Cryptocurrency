const MINE_RATE = 1000
const INITIAL_DIFFICULTY = 3

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: "-----",
    hash: "hash-one",
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: "Dean Martin (born Dino Paul Crocetti; June 7, 1917 – December 25, 1995) was an American singer, actor, and comedian. One of the most popular and enduring American entertainers of the mid-20th century, Martin was nicknamed \"The King of Cool\"."
}

const STARTING_BALANCE = 0

module.exports = {
    GENESIS_DATA,
    MINE_RATE,
    STARTING_BALANCE
}
