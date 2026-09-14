import { useState } from "react";

type RecipeCard = {
  title: string;
  imageAlt: string;
};

type SalesCard = {
  name: string;
  description: string;
};

const recipes: RecipeCard[] = [
  { title: "Classic G&T", imageAlt: "Imagen pendiente de Classic G&T" },
  { title: "Red Berry Spritz", imageAlt: "Imagen pendiente de Red Berry Spritz" },
  { title: "Citrus Sunset", imageAlt: "Imagen pendiente de Citrus Sunset" },
];

const salesPoints: SalesCard[] = [
  { name: "Sleek Bar", description: "Prueba el menú" },
  { name: "Upscale Restaurant", description: "Prueba el menú" },
  { name: "Supso Bar", description: "Prueba el menú" },
  { name: "Sleek Bar", description: "Prueba el menú" },
];

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mx-auto flex min-h-[42px] w-fit items-center justify-center rounded-[6px] bg-[url('/btn-azul.svg')] bg-cover bg-center px-8 py-2 font-alegreya text-[25px] uppercase leading-none text-[#ebde97] shadow-[0_5px_7px_rgba(0,0,0,0.38)] sm:text-[30px]">
      {children}
    </h2>
  );
}

function RecipeFlipCard({ recipe }: { recipe: RecipeCard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      className="group h-[280px] w-full max-w-[230px] [perspective:1000px] sm:h-[300px]"
      onClick={() => setIsFlipped((current) => !current)}
      aria-label={`${isFlipped ? "Mostrar portada de" : "Ver descripción de"} ${recipe.title}`}
      aria-pressed={isFlipped}
    >
      <span
        className={`relative block h-full w-full rounded-[34px] transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        <span className="absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-[34px] bg-[#f8f7f4] shadow-[0_12px_18px_rgba(0,0,0,0.22)] [backface-visibility:hidden]">
          <span className="flex h-[218px] items-center justify-center bg-[#e8e5de] px-5 text-center font-alegreya text-[13px] uppercase tracking-[0.08em] text-[#8b856f] sm:h-[235px]">
            {recipe.imageAlt}
          </span>
          <span className="flex flex-1 items-center justify-center px-3 font-alegreya text-[16px] uppercase tracking-[0.03em] text-texto-cuerpo sm:text-[18px]">
            {recipe.title}
          </span>
        </span>

        <span className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-[34px] bg-[#f8f7f4] px-7 text-center shadow-[0_12px_18px_rgba(0,0,0,0.22)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="font-alegreya text-[18px] uppercase text-texto-cuerpo">{recipe.title}</span>
          <span className="mt-4 font-alegreya text-[14px] leading-[1.5] text-[#3f3d56]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </span>
        </span>
      </span>
    </button>
  );
}

function SalesPointCard({ point }: { point: SalesCard }) {
  return (
    <article className="w-full max-w-[180px] overflow-hidden rounded-[4px] border-2 border-[#9d8442] bg-white shadow-sm">
      <div className="flex h-[82px] items-center justify-center bg-[#e8e5de] px-3 text-center font-alegreya text-[11px] uppercase tracking-[0.06em] text-[#8b856f]">
        Imagen pendiente
      </div>
      <div className="flex min-h-[96px] flex-col items-center justify-between px-2 py-2 text-center font-alegreya text-texto-cuerpo">
        <span className="text-[14px] leading-none">{point.name}</span>
        <span className="flex gap-2 text-[13px]" aria-label="Redes sociales">
          <span aria-hidden="true">○</span>
          <span aria-hidden="true">●</span>
          <span aria-hidden="true">○</span>
        </span>
        <span className="border-t border-[#d9d5cc] pt-1 text-[12px]">{point.description}</span>
      </div>
    </article>
  );
}

export function SeccionRecetas() {
  return (
    <section
      id="recetas-y-puntos-de-venta"
      className="relative overflow-hidden bg-[#faf9f6] px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
      aria-label="Recetas y puntos de venta"
    >
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <SectionTitle>Recetas</SectionTitle>

        <div className="mt-9 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {recipes.map((recipe) => (
            <RecipeFlipCard key={recipe.title} recipe={recipe} />
          ))}
        </div>

        <div className="mt-14 sm:mt-16">
          <SectionTitle>Puntos de venta</SectionTitle>
        </div>

        <div className="mx-auto mt-9 grid max-w-[820px] justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {salesPoints.map((point, index) => (
            <SalesPointCard key={`${point.name}-${index}`} point={point} />
          ))}
        </div>
      </div>
    </section>
  );
}
