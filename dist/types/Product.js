export var ProductStockState;
(function (ProductStockState) {
    ProductStockState[ProductStockState["OutOfStock"] = 0] = "OutOfStock";
    ProductStockState[ProductStockState["InStock"] = 1] = "InStock";
    ProductStockState[ProductStockState["Reserved"] = 2] = "Reserved";
    ProductStockState[ProductStockState["LowStock"] = 3] = "LowStock";
    ProductStockState[ProductStockState["MediumStock"] = 4] = "MediumStock";
    ProductStockState[ProductStockState["HighStock"] = 5] = "HighStock";
    ProductStockState[ProductStockState["CriticalStock"] = 6] = "CriticalStock";
    ProductStockState[ProductStockState["InTransit"] = 7] = "InTransit";
    ProductStockState[ProductStockState["TemporarilyOutOfStock"] = 8] = "TemporarilyOutOfStock";
    ProductStockState[ProductStockState["DefectiveStock"] = 9] = "DefectiveStock";
    ProductStockState[ProductStockState["PendingReview"] = 10] = "PendingReview";
})(ProductStockState || (ProductStockState = {}));
export function getStockStateText(state) {
    switch (state) {
        case ProductStockState.OutOfStock:
            return "Sin stock";
        case ProductStockState.InStock:
            return "Con stock";
        case ProductStockState.Reserved:
            return "Reservedo";
        case ProductStockState.LowStock:
            return "Stock bajo";
        case ProductStockState.MediumStock:
            return "Stock medio";
        case ProductStockState.HighStock:
            return "Stock alto";
        case ProductStockState.CriticalStock:
            return "Stock critico";
        case ProductStockState.InTransit:
            return "En transito";
        case ProductStockState.TemporarilyOutOfStock:
            return "Temporalmente fuera de stock";
        case ProductStockState.DefectiveStock:
            return "Stock defectuoso";
        case ProductStockState.PendingReview:
            return "Pendiente de revisión";
        default:
            throw new Error("Invalid product stock state");
    }
}
