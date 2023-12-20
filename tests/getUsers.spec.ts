import { usersResponse } from "./responses/getUsersResponse"
import { getUsers } from "./getUsers"

describe("getGroups.ts", () => {
  it("should return array with 6 users", async () => {
    const actualResult = await getUsers();
    const expectedResult = usersResponse
    expect(actualResult).toStrictEqual(expectedResult)
  })
})
