import AddClientUseCase from "./add-client.usecase";

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn(),
  };
};

describe("AddClient usecase unit test", () => {
  it("should add a client", async () => {
    expect(1).toEqual(1);
    
    const repository = MockRepository();
    const usecase = new AddClientUseCase(repository);

    const input = {
      name: "Client 1",
      email: "1@1.com",
      address: "Client 1 address",
    };

    const result = await usecase.execute(input);

    expect(repository.add).toBeCalled();

    expect(result.id).toBeDefined();
    expect(result.name).toBe(input.name);
    expect(result.email).toBe(input.email);
    expect(result.address).toBe(input.address);
  });
});
