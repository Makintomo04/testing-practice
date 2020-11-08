const googleSearch = require("./script")
dbMock = [
    "gaming.com",
    "esportsgaming.com",
    "bpl.com",
    "netflix.com",
    "cheese.com",
    "youtube.com",
    "footballteams.com",
]
describe("googleSearch",()=>{
    it("should search google db",()=>{
        expect(googleSearch("fruits",dbMock)).toEqual([])
        expect(googleSearch("gaming",dbMock)).toEqual(["gaming.com", "esportsgaming.com"])
    })
    it("should work with undefined and null inputs",()=>{
        expect(googleSearch(undefined,dbMock)).toEqual([])
        expect(googleSearch(null,dbMock)).toEqual([])
    })
    it("should not return more than 3 matches",()=>{
        expect(googleSearch(".com",dbMock).length).toEqual(3)
    })
})