import Id from "../../@shared/domain/value-object/id.value-object";
import Transaction from "../domain/transaction";
import ProcessPaymentUseCase from "./process-payment.usecase";

const transactionApproved = new Transaction({
  id: new Id("1"),
  amount: 100,
  orderId: "1",
  status: "approved",
});

const transactionDeclined = new Transaction({
    id: new Id("1"),
    amount: 50,
    orderId: "1",
    status: "declined",
  });

const MockRepositoryApproved = () => {
  return {
    save: jest.fn().mockReturnValue(Promise.resolve(transactionApproved)),
  };
};

const MockRepositoryDeclined = () => {
    return {
      save: jest.fn().mockReturnValue(Promise.resolve(transactionDeclined)),
    };
  };
  
describe("ProcessPayment usecase unit test", () => {
  it("should approve a transaction", async () => {
    const repository = MockRepositoryApproved();
    const usecase = new ProcessPaymentUseCase(repository);

    const input = {
      orderId: "1",
      amount: 100,
    };

    const result = await usecase.execute(input);

    expect(repository.save).toHaveBeenCalled()
    expect(result.transactionId).toBe(transactionApproved.id.id);
    expect(result.status).toBe("approved");
    expect(result.amount).toBe(100);
    expect(result.orderId).toBe("1");
    expect(result.createdAt).toBe(transactionApproved.createdAt);
    expect(result.updatedAt).toBe(transactionApproved.updatedAt);
  });

  it("should decline a transaction", async () => {
    const repository = MockRepositoryDeclined();
    const usecase = new ProcessPaymentUseCase(repository);

    const input = {
      orderId: "1",
      amount: 50,
    };

    const result = await usecase.execute(input);

    expect(repository.save).toHaveBeenCalled()
    expect(result.transactionId).toBe(transactionDeclined.id.id);
    expect(result.status).toBe("declined");
    expect(result.amount).toBe(50);
    expect(result.orderId).toBe("1");
    expect(result.createdAt).toBe(transactionDeclined.createdAt);
    expect(result.updatedAt).toBe(transactionDeclined.updatedAt);
  });
});
