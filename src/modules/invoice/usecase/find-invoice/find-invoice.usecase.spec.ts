import Address from "../../../@shared/domain/value-object/address.value-objects";
import Id from "../../../@shared/domain/value-object/id.value-object";
import InvoiceItems from "../../domain/invoice-items.entity";
import Invoice from "../../domain/invoice.entity";
import FindInvoiceUseCase from "./find-invoice.usecase";

const invoice1 = new Invoice({
  id: new Id("1"),
  name: "Invoice 1",
  document: "Document 1",
  address: new Address({
    street: "Street 1",
    number: "Number 1",
    complement: "Complement 1",
    city: "City 1",
    state: "State 1",
    zipCode: "ZipCode 1",
  }),
  items: [
    new InvoiceItems({
        id: new Id("1"),
        name: "InvoiceItem 1",
      price: 1,
    }),
    new InvoiceItems({
        id: new Id("2"),
      name: "InvoiceItem 2",
      price: 2,
    }),
  ],
});

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(invoice1)),
  };
};

describe("FindInvoice usecase unit test", () => {
  it("should find a invoice", async () => {
    const repository = MockRepository();
    const usecase = new FindInvoiceUseCase(repository);

    const input = {
      id: "1",
    };

    const result = await usecase.execute(input);

    expect(repository.find).toBeCalled();

    expect(result.id).toBe(input.id);
    expect(result.name).toBe(invoice1.name);
    expect(result.document).toBe(invoice1.document);
    expect(result.address.street).toBe(invoice1.address.street);
    expect(result.address.number).toBe(invoice1.address.number);
    expect(result.address.complement).toBe(invoice1.address.complement);
    expect(result.address.city).toBe(invoice1.address.city);
    expect(result.address.state).toBe(invoice1.address.state);
    expect(result.address.zipCode).toBe(invoice1.address.zipCode);
    expect(result.items.length).toBe(2);
    expect(result.items[0].id).toBe(invoice1.items[0].id.id);
    expect(result.items[0].name).toBe(invoice1.items[0].name);
    expect(result.items[0].price).toBe(invoice1.items[0].price);
    expect(result.items[1].id).toBe(invoice1.items[1].id.id);
    expect(result.items[1].name).toBe(invoice1.items[1].name);
    expect(result.items[1].price).toBe(invoice1.items[1].price);
    expect(result.createdAt).toBe(invoice1.createdAt);
    expect(result.updatedAt).toBe(invoice1.updatedAt);
  });
});

