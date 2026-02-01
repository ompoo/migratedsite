import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[280px] md:h-[310px] py-[45px] md:py-[50px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bask.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 p-6 w-[90%] text-center flex flex-col justify-center h-full items-center">
        <h1 className="text-6xl font-black text-[#351c75] mb-8 font-sans tracking-tight">音風</h1>
        <div className="w-[90px] border-b-[7px] border-[#351c75] mb-4"></div>
        <h2 className="text-xl font-bold text-[#8e7cc3] mb-6 tracking-wide">
          東京農工大学エレクトーンサークル
        </h2>
        <div className="flex justify-center gap-4">
          <a href="https://www.instagram.com/electone_ompoo/" target="_blank" className="hover:opacity-70 transition-opacity">
            <div className="w-7 h-7 bg-[#fe005c] rounded-full flex items-center justify-center p-1">
              <Image src="/files/instagram_white_28dp.png" alt="Instagram" width={28} height={28} className="w-full h-full object-contain" />
            </div>
          </a>
          <a href="https://twitter.com/tuatelectoneweb" target="_blank" className="hover:opacity-70 transition-opacity">
            <div className="w-7 h-7 bg-[#1b9df0] rounded-full flex items-center justify-center p-1">
              <Image src="/files/twitter_white_28dp.png" alt="Twitter" width={28} height={28} className="w-full h-full object-contain" />
            </div>
          </a>
          <a href="https://lin.ee/hD481lE" target="_blank" className="hover:opacity-70 transition-opacity">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <Image src="/LINE_Brand_icon.png" alt="LINE" width={28} height={28} className="object-cover" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
