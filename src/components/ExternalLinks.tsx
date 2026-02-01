"use client";

import { useState } from "react";

const uniLinks = [
  { name: "北海道大学エレクトーンサークル「SWEET」", url: "http://www.tsoft-web.com/hokudaisweet/" },
  { name: "東北大学エレクトーンサークル「MUSICA」", url: "https://electonemusica.wordpress.com/" },
  { name: "早稲田大学エレクトーンサークル「AUGMENT」", url: "http://aug.skr.jp/" },
  { name: "法政大学エレクトーンサークル「COSMOS」", url: "http://hoseiele.web.fc2.com/" },
  { name: "中央大学エレクトーンサークル「Twinkle Notes」", url: "http://electonetwinklenotes.web.fc2.com/index.html" },
  { name: "専修大学エレクトーンサークル「OASIS」", url: "http://senshuoasis.wix.com/electone-oasis" },
  { name: "千葉大学エレクトーンサークル「えれちば」", url: "http://elechiba.wix.com/elchiba" },
  { name: "埼玉大学エレクトーンサークル「Affects」", url: "http://affects.jimdo.com/" },
  { name: "国立音楽大学電子オルガンサークル「melhada」", url: "http://melhaba.web.fc2.com/index.html" },
  { name: "三重大学エレクトーンサークル「23-two・three-」", url: "http://23twothree.web.fc2.com/" },
  { name: "名古屋大学エレクトーンサークル「WHITE COLOR」", url: "https://nuelwhitecolor.weebly.com/" },
  { name: "名古屋音楽大学エレクトーンサークル「Piu・harmony★7〜」", url: "http://piuharmony.web.fc2.com/" },
  { name: "京都大学エレクトーンサークル「KUES」", url: "http://kuesmembers.usamimi.info/" }
];

export default function ExternalLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const textStyle = { color: "rgba(33, 33, 33, 1)", fontWeight: 400, lineHeight: 1.56 };
  const h3Style = { fontFamily: "Roboto, sans-serif", color: "#351c75" };

  return (
    <section id="外部リンク" className="mb-24 max-w-4xl mx-auto">
      {/* 見出し兼トグルボタン */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 hover:bg-gray-50 transition-colors group border-b border-gray-100"
      >
        <h2 
          className="text-[#351c75] text-[20pt] md:text-[26pt]" 
          style={{ fontFamily: "Roboto, sans-serif", fontWeight: 700 }}
        >
          外部リンク
        </h2>
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#351c75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      
      {/* 開閉コンテンツ */}
      {isOpen && (
        <div className="mt-8 space-y-10 pl-2">
          {/* EC-net */}
          <div>
            <h3 className="text-xl font-bold mb-2" style={h3Style}>EC-net</h3>
            <div className="text-[10pt] mb-2" style={textStyle}>
              <p>音風も加盟している、全国の大学のエレクトーンサークル間の交流を目的とした団体</p>
            </div>
            <a 
              href="http://ec1net.web.fc2.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#4a86e8] text-[10.5pt] underline hover:opacity-80 transition-opacity"
            >
              EC-net(Electone Circle Network)
            </a>
          </div>

          {/* 他大学エレクトーンサークル */}
          <div>
            <h3 className="text-xl font-bold mb-2" style={h3Style}>他大学エレクトーンサークル</h3>
            <div className="text-[10pt] mb-3" style={textStyle}>
              <p>〜ECにて交流のある他大学のエレクトーンサークルの方々〜</p>
            </div>
            <ul className="space-y-2">
              {uniLinks.map((link) => (
                <li key={link.url}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#4a86e8] text-[10.5pt] underline hover:opacity-80 transition-opacity"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}