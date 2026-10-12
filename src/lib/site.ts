// Datos del negocio en un solo lugar: cambiá acá y se actualiza toda la landing.
export const site = {
    name: "Axeliron",
    price: 300,
    marketPrice: 1200,
    deliveryDays: 7,
    revisions: 2,
    spotsLeft: 3,
    whatsappNumber: "5491136515953",
    whatsappMessage: "Hola! Quiero mi landing de USD 300 con Axeliron. ¿Hablamos?",
    calendlyUrl: "https://calendly.com/axeliron/reunion-axeliron-team",
    email: "hola@axeliron.com",
    instagram: "https://www.instagram.com/axeliron_/",
};

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function currentMonth() {
    return new Date().toLocaleDateString("es-AR", { month: "long" });
}
