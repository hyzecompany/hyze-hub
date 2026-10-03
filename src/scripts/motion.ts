/**
 * Camada de movimento da Hyze.
 *
 * - Lenis: rolagem suave (inércia leve), inclusive nos links âncora.
 * - Motion (motion.dev): entrada do hero, revelação ao rolar e listas em cascata.
 * - Header que se esconde ao descer e volta ao subir + barra de progresso de leitura.
 *
 * Tudo é desativado quando o sistema pede menos movimento (prefers-reduced-motion).
 * Sem JavaScript, o conteúdo aparece normalmente: os estados iniciais só existem sob `html.js`.
 */
import Lenis from "lenis";
import { animate, inView, scroll, stagger } from "motion";

const EASE_OUT = [0.22, 1, 0.36, 1] as const; // "ease-out-quint": rápido no início, pousa suave
/** Depois da entrada, devolve transform/filter ao CSS (para os hovers funcionarem). */
const releaseTransforms = (els: Iterable<HTMLElement>) => () => {
  for (const el of els) {
    el.style.removeProperty("transform");
    el.style.removeProperty("filter");
  }
};

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis: Lenis | null = null;
const cleanups: Array<() => void> = [];

function setupSmoothScroll() {
  if (lenis || reduceMotion()) return;
  lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4) });
  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  // Âncoras internas (#planos, #orcamento…) rolam com a mesma física, compensando o header.
  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link || !lenis) return;
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector<HTMLElement>(id);
    if (!target) return;
    event.preventDefault();
    lenis.scrollTo(target, { offset: -72 });
    history.pushState(null, "", id);
  });
}

function setupHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;
  let last = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.toggleAttribute("data-scrolled", y > 8);
    // Esconde ao descer (depois do topo), mostra ao subir.
    header.toggleAttribute("data-hidden", y > last && y > 240);
    last = y;
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  cleanups.push(() => window.removeEventListener("scroll", onScroll));

  const bar = document.querySelector<HTMLElement>("[data-progress]");
  if (bar && !reduceMotion()) {
    cleanups.push(scroll(animate(bar, { scaleX: [0, 1] }, { ease: "linear" })));
  }
}

function setupHero() {
  const items = document.querySelectorAll<HTMLElement>("[data-hero]");
  if (items.length === 0) return;
  animate(
    items,
    { opacity: [0, 1], y: [28, 0], filter: ["blur(6px)", "blur(0px)"] },
    { duration: 0.9, ease: EASE_OUT, delay: stagger(0.09, { startDelay: 0.1 }) },
  ).then(releaseTransforms(items));
  // Assinatura da marca: o ponto do "Hyze." chega por último, com um leve quique.
  const dot = document.querySelector<HTMLElement>("[data-logo-dot]");
  if (dot) {
    animate(
      dot,
      { opacity: [0, 1], y: [-40, 0], scale: [0.4, 1] },
      { type: "spring", stiffness: 380, damping: 14, delay: 0.55 },
    );
  }
}

function setupReveal() {
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    cleanups.push(
      inView(
        el,
        () => {
          animate(el, { opacity: [0, 1], y: [32, 0] }, { duration: 0.8, ease: EASE_OUT }).then(
            releaseTransforms([el]),
          );
        },
        { amount: 0.2 },
      ),
    );
  });

  document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
    const children = group.querySelectorAll<HTMLElement>(":scope > *");
    cleanups.push(
      inView(
        group,
        () => {
          animate(
            children,
            { opacity: [0, 1], y: [40, 0], scale: [0.97, 1] },
            { duration: 0.7, ease: EASE_OUT, delay: stagger(0.08) },
          ).then(releaseTransforms(children));
        },
        { amount: 0.15 },
      ),
    );
  });
}

function revealEverything() {
  document
    .querySelectorAll<HTMLElement>(
      "[data-hero], [data-reveal], [data-stagger] > *, [data-logo-dot]",
    )
    .forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
}

export function initMotion() {
  while (cleanups.length) cleanups.pop()?.();
  setupHeader();
  if (reduceMotion()) {
    revealEverything();
    return;
  }
  setupSmoothScroll();
  setupHero();
  setupReveal();
}
