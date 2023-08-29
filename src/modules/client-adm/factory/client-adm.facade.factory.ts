import ClientRepository from "../repository/client.repository";
import AddClientUseCase from "../usecase/add-client/add-client.usecase";
import FindClientUseCase from "../usecase/find-client/find-client.usecase";
import ClientAdmFacade from "../facade/client-adm.facade";

export default class ClientAdmFacadeFactory {
    static create() {
        const repository = new ClientRepository();
        const addUsecase = new AddClientUseCase(repository);
        const findUsecase = new FindClientUseCase(repository);
        const facade = new ClientAdmFacade({
            addUsecase: addUsecase,
            findUsecase: findUsecase,
        });

        return facade;
    }
}