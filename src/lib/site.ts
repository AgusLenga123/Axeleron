// Datos del negocio en un solo lugar: cambiá acá y se actualiza toda la landing.
export const site = {
    name: "Axeliron",
    price: 300,
    marketPrice: 1200,
    deliveryDays: 7,
    revisions: 2,
    spotsLeft: 3,
    calendlyUrl: "https://calendly.com/axeliron/reunion-axeliron-team",
    email: "hola@axeliron.com",
};

export function currentMonth() {
    return new Date().toLocaleDateString("es-AR", { month: "long" });
}
