// Datos del negocio en un solo lugar: cambiá acá y se actualiza toda la landing.
export const site = {
    name: "Axeliron",
    price: 300,
    marketPrice: 1200,
    deliveryDays: 7,
    revisions: 2,
    spotsLeft: 3,
    whatsappNumber: "5491150552525",
    whatsappMessage: "¡Hola Axeliron! Vi su web y quiero mi landing de USD 300. ¿Me cuentan cómo empezamos?",
    calendlyUrl: "https://calendly.com/axeliron/reunion-axeliron-team",
    email: "hola@axeliron.com",
};

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function currentMonth() {
    return new Date().toLocaleDateString("es-AR", { month: "long" });
}
