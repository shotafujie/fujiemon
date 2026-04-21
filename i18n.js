/* ===========================================
   多言語対応翻訳データ
   =========================================== */

const translations = {
  ja: {
    // メタデータ
    meta: {
      title: "ふじえもんのおへや",
      description: "ふじえもんのホームページです．成果物や登壇資料を掲載しています．",
      keywords: "エンジニア, ふじえもん, 難聴, 音声認識，コミュニケーション，骨伝導",
      ogTitle: "ふじえもんのおへや",
      ogDescription: "ふじえもんのホームページです．成果物や登壇資料を掲載しています．",
      ogSiteName: "ふじえもんのおへや",
      twitterTitle: "ふじえもんのおへや",
      twitterDescription: "ふじえもんのホームページです．成果物や登壇資料を掲載しています．"
    },
    // ナビゲーション
    nav: {
      blog: "Blog",
      apps: "Apps",
      research: "Research",
      awards: "Awards",
      talks: "Talks",
      shelf: "Shelf",
      menu: "メニュー"
    },
    // ヒーローセクション
    hero: {
      name: "Shota Fujie aka ふじえもん",
      tagline: "JAIST M1 / 骨伝導で補聴している難聴エンジニア",
      bio: "音声信号処理 / 骨伝導 / アプリ開発 / Agile / コミュニケーション / 日本酒",
      scroll: "Scroll"
    },
    // Appsセクション
    apps: {
      title: "Apps",
      subtitle: "つくったもの - クリックで詳細",
      asrivia: {
        name: "asrivia",
        tag: "Desktop",
        description: "ローカル音声認識の結果をPicture-in-Pictureで常時表示．翻訳機能も搭載．",
        tech: ["Python", "ASR", "ローカル", "PiP表示", "翻訳"],
        link: "GitHub →"
      },
      asrlance: {
        name: "asrlance",
        tag: "CLI",
        description: "音声認識の性能評価ツール．精度・処理時間・CPU使用率を計測．",
        tech: ["Python", "ASR"],
        link: "GitHub →"
      },
      entaku: {
        name: "entaku",
        tag: "CLI",
        description: "マルチペルソナAI円卓議論システム．ローカルLLMとOllamaで動作．",
        tech: ["Python", "Ollama"],
        link: "GitHub →"
      },
      pinnedBot: {
        name: "PinnedBot",
        fullName: "PinnedDiscordBot",
        tag: "Bot",
        description: "特定の絵文字📌リアクションでDiscord投稿を自動ピン留め．",
        tech: ["Python", "Discord"],
        link: "GitHub →"
      },
      predy: {
        name: "Predy",
        tag: "CLI",
        description: "音声認識結果の誤りを賢く修正提案．Vimスタイルで手軽に編集可．",
        tech: ["Python", "NLP"],
        link: "GitHub →"
      },
      bookCover: {
        name: "BookCover",
        fullName: "BookCoverMaker",
        tag: "Web",
        description: "本の表紙を簡単に作成できるWebツール．",
        tech: ["JavaScript", "Canvas"],
        link: "GitHub →"
      },
      colorAssist: {
        name: "ColorAssist",
        tag: "Web",
        description: "画像のWCAGアクセシビリティ準拠をコントラスト比で自動チェック．",
        tech: ["JavaScript", "WCAG"],
        link: "GitHub →"
      },
      arXiv2Discord: {
        name: "arXiv2Discord",
        tag: "Bot",
        description: "arXiv論文を取得・要約してDiscordへ自動投稿．GitHub Actions連携．",
        tech: ["Python", "Actions"],
        link: "GitHub →"
      },
      soundHue: {
        name: "SoundHue",
        tag: "Web",
        description: "音源の周波数成分を可視光スペクトルの色で描画．",
        tech: ["JavaScript", "WebAudio"],
        link: "GitHub →"
      }
    },
    // Researchセクション
    research: {
      title: "Research",
      subtitle: "研究・論文",
      paper5: {
        year: "2025",
        title: "Empirical Study on Listening Effort of Deaf and Hard-of-Hearing for Enhanced Speech in Multispeaker Environments",
        venue: "HCI International 2025 Posters, CCIS vol. 2524, Springer",
        description: "多話者環境における音声強調技術で抽出した発話の聴取努力を，ろう・難聴者を対象に主観評価で検証．",
        link: "Paper",
        tags: ["共著", "ポスター"]
      },
      paper1: {
        year: "2024",
        title: "混合音声から抽出した発話の聴取に関する聴者・難聴者の比較",
        venue: "2024秋季日本音響学会研究発表会",
        description: "混合音声から音声分離技術で抽出した発話の聴取について，聴者と難聴者を比較した研究．",
        link: "Paper",
        tags: ["主著", "ポスター"]
      },
      paper2: {
        year: "2024",
        title: "混合音声から抽出した難聴者の発話の聞き取りやすさに関する客観的および主観的な評価による検討",
        venue: "研究報告アクセシビリティ (AAC), 2024(17)",
        description: "混合音声から抽出した難聴者の発話について，客観・主観両面から聞き取りやすさを評価．学生奨励賞・ヤマハ賞受賞．",
        link: "Paper",
        tags: ["主著", "オーラル"]
      },
      paper3: {
        year: "2024",
        title: "伝音性難聴のある成人による軟骨伝導型振動子の装着位置の検討",
        venue: "音声コミュニケーション研究会資料, 4(1)",
        description: "頭部固定位置による純音聴力レベルと文章了解度の変化を検討．",
        link: "Paper",
        tags: ["共著", "オーラル"]
      },
      paper4: {
        year: "2023",
        title: "ろう・難聴者と聴者のグループ対話における理解度・参加度の高いコミュニケーションストラテジー",
        venue: "研究報告アクセシビリティ (AAC), 2023(7)",
        description: "グループ対話における効果的なコミュニケーション方略を分析した研究．",
        link: "Paper",
        tags: ["主著", "オーラル"]
      }
    },
    // Awardsセクション
    awards: {
      title: "Awards",
      subtitle: "受賞歴",
      award1: {
        year: "2024",
        name: "学生奨励賞",
        org: "情報処理学会 アクセシビリティ研究会（AAC）",
        description: "第24回研究発表会での発表に対して授与．"
      },
      award2: {
        year: "2024",
        name: "ヤマハ賞（企業賞）",
        org: "情報処理学会 アクセシビリティ研究会（AAC）",
        description: "音声信号処理技術を活用した難聴者の会話改善に関する研究に対して授与．"
      },
      award3: {
        year: "2024",
        name: "学長賞",
        org: "筑波技術大学",
        description: "2023年度の学業・研究活動に対して授与．"
      },
      award4: {
        year: "2023",
        name: "優勝",
        org: "Startup Weekend Tsukuba 9th Reborn",
        description: "54時間でビジネスアイデアを形にする起業体験イベントで優勝．"
      }
    },
    // Talksセクション
    talks: {
      title: "Talks",
      subtitle: "登壇資料",
      rsgt2023: {
        date: "2023.01",
        title: "RSGT2023",
        description: "聴覚障害のある大学生チームによる臆さない発言環境の形成",
        link: "スライドを見る →"
      },
      scrum2023: {
        date: "2023.03",
        title: "スクフェス福岡",
        description: "聴こえに依らずワイワイ発言しつつガシガシ開発するために必要なこと",
        link: "スライドを見る →"
      },
      unfrozen2024: {
        date: "2024.02",
        title: "UN-FROZEN LT会",
        description: "聴覚障害と音声情報処理",
        link: "スライドを見る →"
      },
      agilePbl2024: {
        date: "2024.03",
        title: "AgilePBL祭り2024",
        description: "学生としてRSGT2024に参加して得られた学び",
        link: "スライドを見る →"
      }
    },
    // Shelfセクション
    shelf: {
      title: "Shelf",
      subtitle: "本・酒・音楽",
      books: {
        label: "📕 Books",
        servant: "サーバントリーダーシップ - チームの良さを引き出すリーダーシップ論",
        reading: "技術書の読書術 - 本の選び方からメモ管理まで",
        hamura: "浜村渚の計算ノート - 数学が好きな少女の物語",
        secret: "???",
        drstone: "Dr.STONE - 科学の楽しさが詰まった漫画",
        bandwagon: "東京バンドワゴン - 愛溢れる下町大家族物語"
      },
      sake: {
        label: "🍶 Sake",
        hachinohe: "八仙 ピンクラベル吟醸 - 最初に呑んだ日本酒",
        tasake: "田酒 - 特別な日に飲む地酒",
        mizunara: "シーバスリーガルミズナラ - 甘めのウィスキー"
      },
      music: {
        label: "🎸 Music",
        takebuchi: "竹渕慶 - 力強い歌声．オススメはTorch",
        snarky: "Snarky Puppy - ジャズ・フュージョン．オススメはLingus",
        larnell: "Larnell Lewis - グルーヴ最高のドラマー．オススメはChange Your Mind",
        domoto: "DOMOTO - いくつになってもかっこいい堂本兄弟．オススメは薔薇と太陽"
      }
    },
    // Secret Roomセクション
    secret: {
      title: "🚪 Secret Room",
      description: "隠し部屋へようこそ！",
      close: "✕ 閉じる",
      game: {
        title: "好きなゲーム",
        content: "FLi，ポケノブ，テトリス"
      },
      sushi: {
        title: "好きな寿司ネタ",
        content: "ホタテ，穴子..."
      },
      recent: {
        title: "最近ハマってること",
        content: "書店巡り，浮世絵鑑賞"
      }
    },
    // フッター
    footer: {
      copyright: "© 2025 ふじえもん"
    }
  },
  en: {
    // Meta data
    meta: {
      title: "fujiemon's Room",
      description: "fujiemon's homepage. Showcasing projects and presentations.",
      keywords: "Engineer, fujiemon, Hearing Loss, Speech Recognition, Communication, Bone Conduction",
      ogTitle: "fujiemon's Room",
      ogDescription: "fujiemon's homepage. Showcasing projects and presentations.",
      ogSiteName: "fujiemon's Room",
      twitterTitle: "fujiemon's Room",
      twitterDescription: "fujiemon's homepage. Showcasing projects and presentations."
    },
    // Navigation
    nav: {
      blog: "Blog",
      apps: "Apps",
      research: "Research",
      awards: "Awards",
      talks: "Talks",
      shelf: "Shelf",
      menu: "Menu"
    },
    // Hero section
    hero: {
      name: "Shota Fujie aka fujiemon",
      tagline: "JAIST M1 / Hard of Hearing Engineer Using Bone Conduction Hearing Aids",
      bio: "Speech Information Processing / Bone Conduction / App Development / Agile / Speech ommunication / Sake",
      scroll: "Scroll"
    },
    // Apps section
    apps: {
      title: "Apps",
      subtitle: "Projects - Click for Details",
      asrivia: {
        name: "asrivia",
        tag: "Desktop",
        description: "Display local transcription in Picture-in-Picture with translation feature.",
        tech: ["Python", "ASR", "Local", "PiP", "Translation"],
        link: "GitHub →"
      },
      asrlance: {
        name: "asrlance",
        tag: "CLI",
        description: "Speech recognition performance evaluation tool. Measures accuracy, processing time, and CPU usage.",
        tech: ["Python", "ASR"],
        link: "GitHub →"
      },
      entaku: {
        name: "entaku",
        tag: "CLI",
        description: "Multi-persona AI roundtable discussion system. Runs on local LLM with Ollama.",
        tech: ["Python", "Ollama"],
        link: "GitHub →"
      },
      pinnedBot: {
        name: "PinnedBot",
        fullName: "PinnedDiscordBot",
        tag: "Bot",
        description: "Auto-pin Discord messages with specific emoji 📌 reactions.",
        tech: ["Python", "Discord"],
        link: "GitHub →"
      },
      predy: {
        name: "Predy",
        tag: "CLI",
        description: "Smart correction suggestions for speech recognition errors. Edit easily with Vim-style interface.",
        tech: ["Python", "NLP"],
        link: "GitHub →"
      },
      bookCover: {
        name: "BookCover",
        fullName: "BookCoverMaker",
        tag: "Web",
        description: "Easy-to-use web tool for creating book covers.",
        tech: ["JavaScript", "Canvas"],
        link: "GitHub →"
      },
      colorAssist: {
        name: "ColorAssist",
        tag: "Web",
        description: "Automatically check WCAG accessibility compliance by contrast ratio.",
        tech: ["JavaScript", "WCAG"],
        link: "GitHub →"
      },
      arXiv2Discord: {
        name: "arXiv2Discord",
        tag: "Bot",
        description: "Fetch and summarize arXiv papers, auto-post to Discord. GitHub Actions integration.",
        tech: ["Python", "Actions"],
        link: "GitHub →"
      },
      soundHue: {
        name: "SoundHue",
        tag: "Web",
        description: "Visualize audio frequency components as visible light spectrum colors.",
        tech: ["JavaScript", "WebAudio"],
        link: "GitHub →"
      }
    },
    // Research section
    research: {
      title: "Research",
      subtitle: "Research & Publications",
      paper5: {
        year: "2025",
        title: "Empirical Study on Listening Effort of Deaf and Hard-of-Hearing for Enhanced Speech in Multispeaker Environments",
        venue: "HCI International 2025 Posters, CCIS vol. 2524, Springer",
        description: "Empirically evaluated listening effort of deaf/hard-of-hearing individuals for enhanced speech in multispeaker environments. Subjective evaluation showed reduced listening effort for extracted target speech under low SNR conditions.",
        link: "Paper",
        tags: ["Co-author", "Poster"]
      },
      paper1: {
        year: "2024",
        title: "Comparison of Normal Hearing and Deaf/Hard-of-Hearing Subjects on Evaluation of Personal Speech Enhancement.",
        venue: "Acoustical Society of Japan 2024 Autumn Meeting",
        description: "Compared hearing and deaf/hard-of-hearing listeners using speech extracted via SpeakerBeam. Found higher intelligibility in extracted speech vs mixed audio, improving with higher SNR.",
        link: "Paper",
        tags: ["First Author", "Poster"]
      },
      paper2: {
        year: "2024",
        title: "Examination of the speech intelligibility of people with hearing loss extracted from mixed speech by objective and subjective evaluation",
        venue: "IPSJ SIG Technical Report AAC, 2024(17)",
        description: "Evaluated speech separation in noisy group settings. Subjective tests and objective metrics (HASPI/HASQI) showed improved intelligibility for hard-of-hearing listeners. Received Student Encouragement Award and Yamaha Award.",
        link: "Paper",
        tags: ["First Author", "Oral"]
      },
      paper3: {
        year: "2024",
        title: "Study on Attachment Position of Cartilage Conduction Transducer by Adults with Conductive Hearing Loss",
        venue: "Proceedings of the Speech Communication Research Group, 4(1)",
        description: "Evaluated cartilage conduction transducer placement on a participant with conductive hearing loss. The mastoid region yielded the best pure-tone thresholds and subjective clarity among tested positions.",
        link: "Paper",
        tags: ["Co-author", "Oral"]
      },
      paper4: {
        year: "2023",
        title: "Communication Strategies for High Comprehension and Participation in Group Dialogue between Deaf and Hard-of-Hearing and Hearing People",
        venue: "IPSJ SIG Technical Report AAC, 2023(7)",
        description: "Explored strategies for deaf/hard-of-hearing members in Agile teams. Found that relying solely on tools like visualization can hinder interaction; developing team-specific strategies is crucial for active participation.",
        link: "Paper",
        tags: ["First Author", "Oral"]
      }
    },
    // Awards section
    awards: {
      title: "Awards",
      subtitle: "Honors & Awards",
      award1: {
        year: "2024",
        name: "Student Encouragement Award",
        org: "IPSJ SIG Accessibility (AAC)",
        description: "Awarded for presentation at the 24th AAC Research Meeting."
      },
      award2: {
        year: "2024",
        name: "Yamaha Award (Corporate Award)",
        org: "IPSJ SIG Accessibility (AAC)",
        description: "Awarded for research on improving conversation quality for deaf/hard-of-hearing individuals using speech signal processing."
      },
      award3: {
        year: "2024",
        name: "University President's Award",
        org: "Tsukuba University of Technology",
        description: "Awarded for outstanding academic and research achievements in FY2023."
      },
      award4: {
        year: "2023",
        name: "1st Place",
        org: "Startup Weekend Tsukuba 9th Reborn",
        description: "Won first place at a 54-hour startup experience event for turning business ideas into reality."
      }
    },
    // Talks section
    talks: {
      title: "Talks",
      subtitle: "Presentations",
      rsgt2023: {
        date: "2023.01",
        title: "RSGT2023",
        description: "Creating an Environment for Fearless Communication in a Team of Deaf/HoH University Students",
        link: "View Slides →"
      },
      scrum2023: {
        date: "2023.03",
        title: "Scrum Fest Fukuoka",
        description: "What's Needed for Lively Discussion and Active Development Regardless of Hearing Ability",
        link: "View Slides →"
      },
      unfrozen2024: {
        date: "2024.02",
        title: "UN-FROZEN LT",
        description: "Hearing Loss and Speech Information Processing",
        link: "View Slides →"
      },
      agilePbl2024: {
        date: "2024.03",
        title: "AgilePBL Festival 2024",
        description: "Lessons Learned from Participating in RSGT2024 as a Student",
        link: "View Slides →"
      }
    },
    // Shelf section
    shelf: {
      title: "Shelf",
      subtitle: "Books, Sake & Music",
      books: {
        label: "📕 Books",
        servant: "Servant Leadership - Leadership that brings out the best in teams",
        reading: "The Art of Reading Technical Books - From book selection to memo management",
        hamura: "Hamura Nagisa's Math Notebook - A story of a girl who loves mathematics",
        secret: "???",
        drstone: "Dr.STONE - A manga full of the fun of science",
        bandwagon: "Tokyo Bandwagon - A heartwarming story of a large downtown family"
      },
      sake: {
        label: "🍶 Sake",
        hachinohe: "Hachinohe Pink Label Ginjo - My first Japanese sake",
        tasake: "Denshu - Local sake for special occasions",
        mizunara: "Chivas Regal Mizunara 12 Years - Sweet whisky"
      },
      music: {
        label: "🥁 Music",
        takebuchi: "Kei Takebuchi - Powerful vocals. Recommended: Torch",
        snarky: "Snarky Puppy - Jazz fusion. Recommended: Lingus",
        larnell: "Larnell Lewis - Drummer with amazing groove. Recommended: Change Your Mind",
        domoto: "DOMOTO - Cool DOMOTO brothers at any age. Recommended: Bara to Taiyou"
      }
    },
    // Secret Room section
    secret: {
      title: "🚪 Secret Room",
      description: "Welcome to the secret room!",
      close: "✕ Close",
      game: {
        title: "Favorite Games",
        content: "FLi, PokeNobu, Tetris"
      },
      sushi: {
        title: "Favorite Sushi",
        content: "Scallop, Anago..."
      },
      recent: {
        title: "Recent Interests",
        content: "Bookstore tours, Ukiyo-e appreciation"
      }
    },
    // Footer
    footer: {
      copyright: "© 2026 fujiemon"
    }
  }
};
