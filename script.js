const googleDatabase = [
    "gaming.com",
    "bpl.com",
    "football.com",
    "animals.com",
    "footballplayers.com",
    "footballteams.com",
];
const googleSearch = (searchInput,db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput)
    })
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

module.exports = googleSearch