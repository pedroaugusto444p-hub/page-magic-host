import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+360 Atividades de Matemática no Mundo dos Blocos" },
      {
        name: "description",
        content:
          "Atividades de matemática do 1º ao 5º ano organizadas em uma experiência visual, divertida e pronta para imprimir.",
      },
      {
        property: "og:title",
        content: "+360 Atividades de Matemática no Mundo dos Blocos",
      },
      {
        property: "og:description",
        content:
          "Atividades de matemática do 1º ao 5º ano organizadas em uma experiência visual, divertida e pronta para imprimir.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/vendas/index.html"
      title="+360 Atividades de Matemática no Mundo dos Blocos"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}
