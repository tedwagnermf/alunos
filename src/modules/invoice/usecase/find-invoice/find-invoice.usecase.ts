import InvoiceGateway from "../../gateway/invoice.gateway";
import {
  FindInvoiceUseCaseInputDto,
  FindInvoiceUseCaseOutputDto,
} from "../invoice.usecase.dto";

export default class FindInvoiceUseCase {
  constructor(private _repository: InvoiceGateway) {}

  async execute(
    input: FindInvoiceUseCaseInputDto
  ): Promise<FindInvoiceUseCaseOutputDto> {
    const result = await this._repository.find(input.id);

    return {
      id: result.id.id,
      name: result.name,
      document: result.document,
      address: {
        street: result.address.street,
        number: result.address.number,
        complement: result.address.complement,
        city: result.address.city,
        state: result.address.state,
        zipCode: result.address.zipCode,
      },
      items: result.items.map((InvoiceItem) => ({
        id: InvoiceItem.id.id,
        name: InvoiceItem.name,
        price: InvoiceItem.price,
      })),
      total: result.total,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    };
  }
}
