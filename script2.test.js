const fetch = require("node-fetch")
const swampi = require("./script2")

describe("Async", ()=>{
    it("calls swampi to fetch people", ()=>{
        expect.assertions(2)
       return swampi.getPeople(fetch).then(data => {
            expect(data.count).toEqual(82)
            expect(data.results.length).toBeGreaterThan(5)
        })
    })
})