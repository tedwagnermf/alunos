import { fn } from "sequelize";
import Id from "../../../@shared/domain/value-object/id.value-object";
import Product from "../../domain/product.entity";
import FindAllProductsUseCase from "../find-all_products/find-all-products.usecase";
import FindProductUseCase from "./find-product.usecase";

const product = new Product({
  id: new Id("1"),
  name: "Product 1",
  description: "Product 1 description",
  salesPrice: 100,
});

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    findAll: jest.fn(),
  };
};

describe("FindProduct unit test", () => {
    it("should find a product", async () => {
        const repository = MockRepository();
        const usecase = new FindProductUseCase(repository);

        const input = {
          id: "1",
        }

        const result = await usecase.execute(input);

        expect(repository.find).toBeCalled();

        expect(result.id).toBe("1");
        expect(result.name).toBe("Product 1");
        expect(result.description).toBe("Product 1 description");
        expect(result.salesPrice).toBe(100);
    } )
});
