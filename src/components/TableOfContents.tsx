"use client";

const tocItems = [
  { name: "サークル概要", href: "#サークル概要" },
  { name: "エレクトーンとは？", href: "#エレクトーンとは？" },
  { name: "SNS", href: "#SNS" },
  { name: "活動内容", href: "#活動内容" },
  { name: "外部リンク", href: "#外部リンク" },
];

export default function TableOfContents() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#eceaf1] py-6 mb-16">
      <div className="max-w-6xl mx-auto px-10 md:px-16">
        <div className="flex flex-col space-y-5">
          {tocItems.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-[#351c75] hover:text-[#684275] underline decoration-1 underline-offset-4 transition-colors font-normal inline-block"
                style={{ fontSize: "12pt" }}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
