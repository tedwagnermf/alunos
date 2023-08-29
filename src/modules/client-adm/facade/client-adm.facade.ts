import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import { FindClientInputDto } from "../usecase/Client.usecase.dto";
import ClientAdmFacadeInterface, { AddClientFacadeInputDto, FindClientFacadeOutputDto } from "./client-adm.facade.interface";

export interface UseCaseProps  {
    addUsecase: UseCaseInterface;
    findUsecase: UseCaseInterface;
}

export default class ClientAdmFacade implements ClientAdmFacadeInterface {
    private _addUsecase: UseCaseInterface;
    private _findUsecase: UseCaseInterface;

    constructor(usecaseProps: UseCaseProps) {
        this._addUsecase = usecaseProps.addUsecase;
        this._findUsecase = usecaseProps.findUsecase;
    }

    async add(input: AddClientFacadeInputDto): Promise<void> {
        await this._addUsecase.execute(input);
    }
    async find(input: FindClientInputDto): Promise<FindClientFacadeOutputDto> {
        return await this._findUsecase.execute(input);
    }
}