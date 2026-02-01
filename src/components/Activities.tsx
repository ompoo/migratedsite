import Image from "next/image";

export default function Activities() {
  const textStyle = { color: "rgba(33, 33, 33, 1)", fontWeight: 400, lineHeight: 1.56 };
  const h3Style = { fontFamily: "Roboto, sans-serif" };

  return (
    <section id="活動内容" className="mb-24">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        
        {/* 左側：テキスト欄（大見出し ＋ 各季節の文章） */}
        <div className="flex-1">
          <h2 
            className="text-[#351c75] mb-12 text-[20pt] md:text-[26pt] text-left" 
            style={{ fontFamily: "Roboto, sans-serif", fontWeight: 700 }}
          >
            活動内容
          </h2>
          
          <div className="space-y-12">
            {/* 春 */}
            <div>
              <h3 className="text-[#684275] mb-4 text-xl font-bold" style={h3Style}>春</h3>
              <div className="text-[12pt]" style={textStyle}>
                <p>春は出会いの時期！音風では新入生に向けての新歓イベントを多数行っています♪ 農部・工部それぞれのサークルオリエンテーションで新入生と部員の交流を図ったり、新歓コンサートで部員の演奏を聞いてもらったりします。入部後は楽譜ツアーと称し、集めた部費で各々好きな楽譜を買いに行くイベントが待っています。</p>
              </div>
            </div>

            {/* 夏 */}
            <div>
              <h3 className="text-[#684275] mb-4 text-xl font-bold" style={h3Style}>夏</h3>
              <div className="text-[12pt]" style={textStyle}>
                <p>夏はイベント盛りだくさん！7月には七夕コンサートがあり、8～9月には夏合宿もあります。夏合宿はメンバーの交流が目的なので、エレクトーンには一切触りません笑 そうして親睦を深め、9月からは音風の一大イベントである学園祭に向けて準備をしていきます。</p>
              </div>
            </div>

            {/* 秋 */}
            <div>
              <h3 className="text-[#684275] mb-4 text-xl font-bold" style={h3Style}>秋</h3>
              <div className="text-[12pt]" style={textStyle}>
                <p>秋の一大イベントと言えば学園祭コンサート。このコンサートは音風単独で行う唯一の外部向けコンサートなので、気合の入り方が違います！そして学園祭コンサートが終わると今度はクリスマスコンサート、通称クリコン。このコンサートでは一風変わったアンサが続出し、音風の自由で楽しい雰囲気を全力で楽しむことができます。クリコンはサークル員の中で最も人気の高いコンサートの一つです。</p>
              </div>
            </div>

            {/* 冬 */}
            <div>
              <h3 className="text-[#684275] mb-4 text-xl font-bold" style={h3Style}>冬</h3>
              <div className="text-[12pt]" style={textStyle}>
                <p>冬には冬合宿、ジョイントコンサート、追い出しコンサートがあります。冬合宿ではみんなで雪山に繰り出しスノボやスキーを楽しみます。ジョイントコンサートでは全国のエレクトーンサークルが集まり一つのコンサートを作り上げます。ここで他大学のエレクトーンサークルの仲間たちと仲良くなることができます。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 右側：写真欄（サイズを拡大し高さを統一） */}
        <div className="w-full md:w-[280px] flex flex-col gap-10 flex-shrink-0 pt-2">
          
          {/* 夏合宿 */}
          <div className="flex flex-col items-center">
            <div className="relative w-[280px] h-[180px] rounded-sm shadow-sm overflow-hidden">
              <Image 
                src="/unnamed (2).jpg" 
                alt="夏合宿" 
                fill
                className="object-cover" 
              />
            </div>
            <p className="text-[8pt] text-gray-500 mt-2 text-center leading-tight">△ 夏合宿</p>
          </div>

          {/* 学園祭コンサート */}
          <div className="flex flex-col items-center">
            <div className="relative w-[280px] h-[180px] rounded-sm shadow-sm overflow-hidden">
              <Image 
                src="/unnamed (3).jpg" 
                alt="学園祭コンサート" 
                fill
                className="object-cover" 
              />
            </div>
            <p className="text-[8pt] text-gray-500 mt-2 text-center leading-tight">△ 学園祭コンサート</p>
          </div>

          {/* クリスマスコンサート */}
          <div className="flex flex-col items-center">
            <div className="relative w-[280px] h-[180px] rounded-sm shadow-sm overflow-hidden">
              <Image 
                src="/unnamed (4).jpg" 
                alt="クリスマスコンサート" 
                fill
                className="object-cover" 
              />
            </div>
            <p className="text-[8pt] text-gray-500 mt-2 text-center leading-tight">△ クリスマスコンサート</p>
          </div>

          {/* 冬合宿 */}
          <div className="flex flex-col items-center">
            <div className="relative w-[280px] h-[180px] rounded-sm shadow-sm overflow-hidden">
              <Image 
                src="/unnamed (5).jpg" 
                alt="冬合宿" 
                fill
                className="object-cover" 
              />
            </div>
            <p className="text-[8pt] text-gray-500 mt-2 text-center leading-tight">△ 冬合宿</p>
          </div>

        </div>

      </div>
    </section>
  );
}