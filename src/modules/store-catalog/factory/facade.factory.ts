import StoreCatalogFacade from "../facade/store-catalog.facade";
import ProductRepository from "../repository/product.repository";
import FindAllProductsUseCase from "../usecase/find-all_products/find-all-products.usecase";
import FindProductUseCase from "../usecase/findProduct/find-product.usecase";

export default class StoreCatalogFacadeFactory {
  static create(): StoreCatalogFacade {
    const repository = new ProductRepository();
    const findUseCase = new FindProductUseCase(repository);
    const findAllUseCase = new FindAllProductsUseCase(repository);

    const facade = new StoreCatalogFacade({
      findUseCase: findUseCase,
      findAllUseCase: findAllUseCase,
    });

    return facade;
  }
}
