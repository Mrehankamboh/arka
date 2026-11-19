export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const socialLinks = [
  { href: "#footer", label: "LinkedIn" },
  { href: "#footer", label: "Instagram" },
  { href: "#footer", label: "Dribbble" },
  { href: "#footer", label: "X" },
] as const;

export const heroWords = [
  { text: "Products", italic: false },
  { text: "with", italic: false },
  { text: "a", italic: false },
  { text: "precise", italic: true },
  { text: "point", italic: false },
  { text: "of", italic: false },
  { text: "view.", italic: false },
] as const;

export const proofs = [
  { label: "Product", text: "From a brief to a shipped interface." },
  { label: "Brand systems", text: "Type, color, and components that hold." },
  { label: "Web", text: "Fast, accessible, and ready to launch." },
] as const;

export const services = [
  {
    index: "01",
    title: "Product strategy",
    outcome: "A point of view before a screen.",
    body: "We name the decision the product must help someone make, then remove everything that does not serve it. The work starts there, not in a feature list.",
  },
  {
    index: "02",
    title: "Interface design",
    outcome: "Quiet under pressure.",
    body: "Type, space, and motion tuned so the product feels considered on the first tap and the hundredth. Nothing decorative that the task does not need.",
  },
  {
    index: "03",
    title: "Design systems",
    outcome: "One language, used without debate.",
    body: "Tokens, components, and rules a team can extend without the product drifting. Built to be picked up by people who were not in the room.",
  },
  {
    index: "04",
    title: "Web engineering",
    outcome: "Built to the same standard as the design.",
    body: "A production front end, careful performance, and the last ten percent that makes a launch feel finished. We hand over code your team can keep.",
  },
] as const;

export const stats = [
  { value: "48", label: "Products shipped" },
  { value: "14 wks", label: "Typical engagement" },
  { value: "7 in 10", label: "Clients who return" },
] as const;

export const principles = [
  {
    title: "Restraint",
    body: "Remove until the idea is obvious. A product should explain itself.",
  },
  {
    title: "Sequence",
    body: "Motion shows what changed. It does not perform for its own sake.",
  },
  {
    title: "Craft",
    body: "The last ten percent is the product. We stay for it.",
  },
] as const;

export const projects = [
  {
    name: "Northline",
    category: "Product",
    result: "A private desk reduced to the one decision that matters each morning.",
    detail:
      "We replaced a crowded wealth dashboard with a single daily brief. Balances stay available, but they no longer lead the screen. The product asks one question, then gets out of the way.",
  },
  {
    name: "Halden",
    category: "Brand system",
    result: "A materials library architects can browse without a manual.",
    detail:
      "Type, swatches, and specification sheets share one grid. The system is quiet enough to sit beside the work, and strict enough that a new material does not invent its own layout.",
  },
  {
    name: "Kite",
    category: "Interface",
    result: "A field tool site engineers can use with gloves on.",
    detail:
      "Large targets, offline notes, and a camera flow that survives a weak signal. The interface is built for a job site: sun on the glass, one hand free, no time for a tutorial.",
  },
  {
    name: "Meridian",
    category: "Web",
    result: "An editorial platform for a research collective.",
    detail:
      "Long-form reading, a calm archive, and a publishing flow the editors run without a developer on the call. The page is for the essay. Everything else recedes.",
  },
] as const;

export const faqs = [
  {
    question: "How does a project start?",
    answer:
      "With a short call and a written brief. We reply with a point of view, a scope, and a fee. Work begins when both are agreed. We do not open with a blank workshop.",
  },
  {
    question: "What is a typical timeline?",
    answer:
      "A focused product engagement is usually ten to fourteen weeks. Two weeks for the point of view, four to six for the interface, and the rest for engineering and launch. A design system or a smaller site can be shorter. We say which, before we start.",
  },
  {
    question: "How does pricing work?",
    answer:
      "A fixed fee for a defined scope. If the scope moves, we reprice the change in writing before we make it. Retainers are for teams who want us on the product after launch. We do not bill by the hour for open-ended discovery.",
  },
  {
    question: "What is included in engineering?",
    answer:
      "The interface, built. That means a production front end, a responsive layout, accessible interactions, and a handoff your team can extend. We are not a back-end consultancy. If the product needs an API, we work with yours or with a partner you choose.",
  },
  {
    question: "Who owns the work?",
    answer:
      "You do. On final payment, the design files, the code, and the rights to the work transfer to you. We keep the right to show the work in the studio archive unless we have agreed otherwise in writing.",
  },
  {
    question: "How do revisions work?",
    answer:
      "Each phase includes one consolidated round of notes, then we refine. Notes that arrive as a single set are faster and kinder to the work. Further rounds are possible. They are scoped, not absorbed in silence.",
  },
] as const;

export const projectTypes = [
  "New product",
  "Redesign",
  "Design system",
  "Ongoing partnership",
] as const;
