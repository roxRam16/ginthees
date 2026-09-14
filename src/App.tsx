import { Header } from "./components/Header";
import { BotonComprar } from "./components/BotonComprar";

export default function App() {
  return (
    <div className="min-h-screen bg-fondo">
      <Header />
      <main className="pt-[72px]">
        <section
          id="inicio"
          className="relative min-h-[calc(100vh-72px)] w-full overflow-hidden bg-[url('/slider1.png')] bg-cover bg-center bg-no-repeat sm:aspect-[8000/3534] sm:min-h-0"
          aria-label="Colección de ginebras GINTHEÉS"
        >
          <div className="absolute inset-x-0 bottom-8 flex justify-center sm:bottom-10 lg:bottom-12">
            <BotonComprar />
          </div>
        </section>

        <section
          id="nosotros"
          className="flex min-h-[220px] w-full items-center justify-center bg-degradado-azul px-6 py-8 sm:min-h-[224px]"
          aria-label="Identidad GINTHEÉS"
        >
          <img
            src="/logo-header.svg"
            alt="GINTHEÉS"
            className="h-auto w-[170px] sm:w-[185px]"
          />
        </section>

        <section
          id="recetas"
          className="grid w-full bg-fondo lg:grid-cols-2"
          aria-label="GINTHEÉS Original"
        >
          <div className="relative h-full min-h-[60vh] w-full overflow-hidden lg:min-h-[80vh]">
            <img
              src="/botazul.png"
              alt="Botella azul GINTHEÉS junto a una estatua clásica"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 xl:px-16">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex shrink flex-col items-start">
                <h2 className="text-dorado-gradiente font-alegreya text-[44px] uppercase leading-[0.9] tracking-[0.02em] sm:text-[58px] lg:text-[52px]">
                  GINTHEÉS
                  <span className="block">Original</span>
                </h2>

                <p className="mt-4 max-w-[220px] font-alegreya text-[11px] uppercase leading-[1.25] tracking-[0.03em] text-texto-cuerpo sm:mt-5 sm:max-w-[240px] sm:text-[13px]">
                  Receta original creada por el maestro destilador.
                </p>

                <div className="mt-5 sm:mt-6">
                  <BotonComprar />
                </div>
              </div>

              <img
                src="/botella-azul.svg"
                alt="Ilustración de una botella azul"
                className="h-[240px] w-auto shrink-0 sm:h-[300px] lg:h-[280px]"
              />
            </div>

            <img
              src="/pleca-flores.svg"
              alt="Ornamento floral azul"
              className="mt-8 h-auto w-full max-w-[520px] sm:mt-10"
            />
          </div>
        </section>

        <section
          id="frutos-rojos"
          className="grid w-full bg-fondo lg:grid-cols-2"
          aria-label="GINTHEÉS Frutos Rojos"
        >
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:order-1 lg:px-12 xl:px-16">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex shrink flex-col items-start">
                <h2 className="text-dorado-gradiente font-alegreya text-[42px] uppercase leading-[0.9] tracking-[0.02em] sm:text-[56px] lg:text-[50px]">
                  GINTHEÉS
                  <span className="block">Frutos Rojos</span>
                </h2>

                <p className="mt-4 max-w-[220px] font-alegreya text-[11px] uppercase leading-[1.25] tracking-[0.03em] text-texto-cuerpo sm:mt-5 sm:max-w-[240px] sm:text-[13px]">
                  Mezcla vibrante de frutos rojos y granada.
                </p>

                <div className="mt-5 sm:mt-6">
                  <BotonComprar />
                </div>
              </div>

              <img
                src="/botella-roja.svg"
                alt="Ilustración de una botella roja"
                className="h-[240px] w-auto shrink-0 sm:h-[300px] lg:h-[280px]"
              />
            </div>

            <img
              src="/pleca-flores.svg"
              alt="Ornamento floral azul"
              className="mt-8 h-auto w-full max-w-[520px] sm:mt-10"
            />
          </div>

          <div className="relative min-h-[60vh] w-full overflow-hidden lg:order-2 lg:min-h-[80vh]">
            <img
              src="/botroja.png"
              alt="Botella roja GINTHEÉS junto a frutos rojos y una estatua clásica"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section
          id="citricos"
          className="grid w-full bg-fondo lg:grid-cols-2"
          aria-label="GINTHEÉS Cítricos"
        >
          <div className="relative min-h-[60vh] w-full overflow-hidden lg:min-h-[80vh]">
            <img
              src="/botverde.png"
              alt="Botella verde GINTHEÉS junto a cítricos y una estatua clásica"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 xl:px-16">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex shrink flex-col items-start">
                <h2 className="text-dorado-gradiente font-alegreya text-[42px] uppercase leading-[0.9] tracking-[0.02em] sm:text-[56px] lg:text-[50px]">
                  GINTHEÉS
                  <span className="block">Cítricos</span>
                </h2>

                <p className="mt-4 max-w-[220px] font-alegreya text-[11px] uppercase leading-[1.25] tracking-[0.03em] text-texto-cuerpo sm:mt-5 sm:max-w-[240px] sm:text-[13px]">
                  Receta original creada por el maestro destilador.
                </p>

                <div className="mt-5 sm:mt-6">
                  <BotonComprar />
                </div>
              </div>

              <img
                src="/botella-verde.svg"
                alt="Ilustración de una botella verde"
                className="h-[240px] w-auto shrink-0 sm:h-[300px] lg:h-[280px]"
              />
            </div>

            <img
              src="/pleca-flores.svg"
              alt="Ornamento floral azul"
              className="mt-8 h-auto w-full max-w-[520px] sm:mt-10"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
