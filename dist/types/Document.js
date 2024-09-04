export const getStatusDocument = (status) => {
    switch (status) {
        case StatusDocument.Pending:
            return "Pendiente de pago";
        case StatusDocument.Paid:
            return "Pagada";
        case StatusDocument.PartiallyPaid:
            return "Pago parcial";
        case StatusDocument.Cancelled:
            return "Cancelada";
        default:
            throw new Error("Invalid invoice status");
    }
};
export var StatusDocument;
(function (StatusDocument) {
    StatusDocument[StatusDocument["Pending"] = 0] = "Pending";
    StatusDocument[StatusDocument["Paid"] = 1] = "Paid";
    StatusDocument[StatusDocument["PartiallyPaid"] = 2] = "PartiallyPaid";
    StatusDocument[StatusDocument["Cancelled"] = 3] = "Cancelled";
})(StatusDocument || (StatusDocument = {}));
