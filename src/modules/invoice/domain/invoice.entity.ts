import Id from "../../@shared/domain/value-object/id.value-object"
import InvoiceItems from "./invoice-items.entity"
import BaseEntity from "../../@shared/domain/entity/base.entity"
import AggregateRoot from "../../@shared/domain/entity/aggregate-root.interface"
import Address from "../../@shared/domain/value-object/address.value-objects"

type InvoiceProps = {
    id?: Id;
    name: string;
    document: string;
    address: Address;
    items: InvoiceItems[];
    total?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default class Invoice extends BaseEntity implements AggregateRoot {
    private _name: string;
    private _document: string;
    private _address: Address;
    private _items: InvoiceItems[];
    private _total: number;

    constructor(props: InvoiceProps) {
        super(props.id, props.createdAt, props.updatedAt);
        this._name = props.name;
        this._document = props.document;
        this._address = props.address;
        this._items = props.items;
        this._total = props.total || 0;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get document(): string {
        return this._document;
    }

    set document(document: string) {
        this._document = document;
    }
    
    get address(): Address {
        return this._address;
    }

    set address(address: Address) {
        this._address = address;
    }

    get items(): InvoiceItems[] {
        return this._items;
    }

    set items(items: InvoiceItems[]) {
        this._items = items;
    }

    get total(): number {
        return this._total;
    }
}
