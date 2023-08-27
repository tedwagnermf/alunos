import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import ProductAdmFacadeInterface, { CheckStockFacadeInputDto, CheckStockFacadeOutputDto, ProductAdmFacadeInputDto } from "./product-adm.facade.interface";

export interface UseCaseProps {
    addUseCase: UseCaseInterface;
    stockUseCase: UseCaseInterface;
}

export default class ProductAdmFacade implements ProductAdmFacadeInterface {
    private _addUsecase: UseCaseInterface;
    private _checkStockUsecase: UseCaseInterface;

    constructor(usecaseProps: UseCaseProps) {
        this._addUsecase = usecaseProps.addUseCase;
        this._checkStockUsecase = usecaseProps.stockUseCase;
    }

    addProduct(input: ProductAdmFacadeInputDto): Promise<void> {
        // se o dto do caso de uso da facade for != do dto da facade, converter o dto da facade para o dto do caso de uso
        return this._addUsecase.execute(input);
    }
    checkStock(input: CheckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto> {
        // se o dto do caso de uso da facade for != do dto da facade, converter o dto da facade para o dto do caso de uso
        return this._checkStockUsecase.execute(input);
    }   
}