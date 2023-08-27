import Id from "../../../@shared/domain/value-object/id.value-object";
import Client from "../../domain/client.entity";
import FindClientUseCase from "./find-client.usecase";

const client1 = new Client({
  id: new Id("1"),
  name: "Client 1",
  email: "1@1.com",
  address: "Client 1 address",
});

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(client1)),
  };
};

describe("FindClient usecase unit test", () => {
  it("should find a client", async () => {
    const repository = MockRepository();
    const usecase = new FindClientUseCase(repository);

    const input = {
      id: "1",
    };

    const result = await usecase.execute(input);

    expect(repository.find).toBeCalled();

    expect(result.id).toBe(input.id);
    expect(result.name).toBe(client1.name);
    expect(result.email).toBe(client1.email);
    expect(result.address).toBe(client1.address);
    expect(result.createdAt).toBe(client1.createdAt);
    expect(result.updatedAt).toBe(client1.updatedAt);
  });
});
