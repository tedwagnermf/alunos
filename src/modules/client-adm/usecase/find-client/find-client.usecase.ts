import Id from "../../../@shared/domain/value-object/id.value-object";
import Client from "../../domain/client.entity";
import ClientGateway from "../../gateway/client.gateway";
import { FindClientInputDto, FindClientOutputDto } from "../client.usecase.dto";

export default class FindClientUseCase {
  private _repository: ClientGateway;

  constructor(_repository: ClientGateway) {
    this._repository = _repository;
  }

  async execute(input: FindClientInputDto): Promise<FindClientOutputDto> {
    const result = await this._repository.find(input.id);

    return {
      id: result.id.id,
      name: result.name,
      email: result.email,
      address: result.address,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    };
  }
}
