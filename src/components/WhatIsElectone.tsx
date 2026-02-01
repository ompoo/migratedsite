import Image from "next/image";

export default function WhatIsElectone() {
  return (
    <section id="エレクトーンとは？" className="mb-24">
                  <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* 左側：画像 (横幅をさらに拡大し、全体を表示) */}
                    <div className="w-full md:w-[480px] flex-shrink-0">
                      <Image 
                        src="/unnamed.jpg" 
                        alt="エレクトーンとは？画像" 
                        width={480} 
                        height={360} 
                        className="w-full h-auto rounded-sm shadow-sm object-contain" 
                      />
                    </div>        {/* 右側：見出し ＋ 本文 */}
        <div className="flex-1">
          <h2 
            className="text-[#351c75] mb-8 text-left text-[20pt] md:text-[26pt]" 
            style={{ 
              fontFamily: "Roboto, sans-serif", 
              fontWeight: 700 
            }}
          >
            エレクトーンとは？
          </h2>
          <div className="space-y-6 text-[12pt] leading-relaxed text-[#3c4043] font-medium">
            <p>
              エレクトーンとはヤマハが発売している楽器です。数えきれないほどの音色を、上、下、足鍵盤の三つの鍵盤を用いて演奏することができるため、まさに無限の可能性を秘めた楽器と言えるでしょう。
            </p>
            <p>
              エレクトーンでは、JPOPからクラッシック、ダンスミュージック、ジャズに至るまで、さまざまな音楽を楽しむことができます。音楽についての知識や経験の幅を広げ、深められることもエレクトーンの大きな魅力の一つです。
            </p>
            <p>
              音風では4台のエレクトーンを所有しているため、他大学にも負けない充実した環境が揃っていると自負しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}