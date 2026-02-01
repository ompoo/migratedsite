import Image from "next/image";

export default function AboutCircle() {
  return (
    <section id="サークル概要" className="mb-24">
                  <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* 左側：画像 (横幅をさらに拡大し、全体を表示) */}
                    <div className="w-full md:w-[480px] flex-shrink-0">
                      <Image 
                        src="/unnamed (1).jpg" 
                        alt="サークル概要画像" 
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
            サークル概要
          </h2>
          <div className="space-y-6 text-[12pt] leading-relaxed text-[#3c4043] font-medium">
            <p>
              音風はエレクトーンを通して音楽と部員同士の交流を楽しむサークルです。定期的に部内で行なっているコンサートではエレクトーンを何人かで演奏するアンサンブルのグループ、通称”アンサ”を組み、楽しく演奏しています。
            </p>
            <p>
              時には他の楽器や歌、ダンスも取り入れて各々が自由に楽しく活動を行っています。またコンサート以外にも夏、冬に2回の合宿を行っており、音楽経験が無くても楽しめる素敵なサークルとなっています。
            </p>
            <p>
              入部はいつでもだれでも大歓迎です。音楽経験のある人もない人も、私たちと楽しい学生生活を送りませんか？少しでも興味がある方はお気軽にTwitterやInstagramへご連絡ください！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}