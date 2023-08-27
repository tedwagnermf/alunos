import { Constructor } from "sequelize-typescript/dist/shared/types";
import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import ProductGateway from "../../gateway/product.gateway";

export interface FindAllProductsDto {
  products: {
    id: string;
    name: string;
    description: string;
    salePrice: number;
  }[];
}

export default class FindAllProductsUseCase implements UseCaseInterface {
  constructor(private productRepository: ProductGateway) {}

  async execute(): Promise<any> {
    const products = await this.productRepository.findAll();

    return {
        products: products.map((product) => ({
            id: product.id.id,
            name: product.name,
            description: product.description,
            salesPrice: product.salesPrice,
        })),
    }
  }
}
