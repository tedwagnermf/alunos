import Id from "../../../@shared/domain/value-object/id.value-object";
import Product from "../../domain/product.entity";
import ProductGateway from "../../gateway/product.gateway";

export interface AddProductInputDto {
    id?: string;
    name: string;
    description: string;
    purchasePrice: number;
    stock: number;
  }
  
  export interface AddProductOutputDto {
      id: string;
      name: string;
      description: string;
      purchasePrice: number;
      stock: number;
      createdAt: Date;
      updateAt: Date;
    }
    
export default class AddProductUseCase {
    private _productRepository: ProductGateway;

    constructor(_productRepository: ProductGateway) {
        this._productRepository = _productRepository;
    }

    async execute(input: AddProductInputDto): Promise<AddProductOutputDto> {
        const props = {
            id: new Id(input.id),
            name: input.name,
            description: input.description,
            purchasePrice: input.purchasePrice,
            stock: input.stock,
        };
        
        const product = new Product(props);

        this._productRepository.add(product);

        return {
            id: product.id.id,
            name: product.name,
            description: product.description,
            purchasePrice: product.purchasePrice,
            stock: product.stock,
            createdAt: product.createdAt,
            updateAt: product.updatedAt,
        }
    }
}