import { groupsResponse } from "./responses/getGroupsResponse"
import { getGroups } from "./getGroups"

describe("getGroups.ts", () => {
  it("should return array with 3 groups", async() => {
    const actualResult = await getGroups();
    const expectedResult = groupsResponse
    expect(actualResult).toStrictEqual(expectedResult)
  })
})
