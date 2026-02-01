import Image from "next/image";

export default function SNS() {
  return (
    <section id="SNS" className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-[#eceaf1] py-6 mb-24">
      <div className="max-w-6xl mx-auto px-10 md:px-16 flex flex-col md:flex-row gap-32 items-start">
        {/* 左側：画像 */}
        <div className="w-full md:w-[200px] flex-shrink-0">
          <Image 
            src="/unnamed (6).jpg" 
            alt="SNSイメージ" 
            width={200} 
            height={150} 
            className="w-full h-auto rounded-sm shadow-sm object-contain" 
          />
        </div>
        
        {/* 右側：見出し ＋ 本文 ＋ アイコン */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-4">
          <h2 
            className="text-[#351c75] mb-8 mt-2 text-[20pt] md:text-[26pt] w-full" 
            style={{ 
              fontFamily: "Roboto, sans-serif", 
              fontWeight: 700 
            }}
          >
            SNS
          </h2>
          <div 
            className="space-y-6 text-[12pt] mb-8"
            style={{ color: "rgba(33, 33, 33, 1)", fontWeight: 400, lineHeight: 1.56 }}
          >
            <p>
              音風の公式SNSアカウントのリンクです。活動についての告知・発信をおこなっています。是非フォローしてください！！
            </p>
            <p>
              質問なども常時受け付けていますのでお気軽にDMやコメントなどいただけると嬉しいです。
            </p>
          </div>
          
          {/* SNSアイコンリンクを中央に配置 */}
          <div className="flex gap-6 items-center justify-center w-full md:justify-center">
            <a href="https://twitter.com/tuatelectoneweb" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-[#1b9df0] rounded-sm flex items-center justify-center p-2.5">
                <Image src="/files/twitter_white_44dp.png" alt="Twitter" width={44} height={44} className="w-full h-full object-contain" />
              </div>
            </a>
            <a href="https://www.instagram.com/electone_ompoo/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-[#fe005c] rounded-sm flex items-center justify-center p-2.5">
                <Image src="/files/instagram_white_44dp.png" alt="Instagram" width={44} height={44} className="w-full h-full object-contain" />
              </div>
            </a>
            <a href="https://lin.ee/hD481lE" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-sm overflow-hidden shadow-sm">
                <Image src="/LINE_Brand_icon.png" alt="LINE" width={48} height={48} className="w-full h-full object-cover" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}