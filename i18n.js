/* Japanese and English page content. */
const translations = {
  "ja": {
    "meta": {
      "title": "ふじえもんのおへや",
      "description": "ふじえもんのホームページです．成果物や登壇資料を掲載しています．",
      "keywords": "エンジニア, ふじえもん, 難聴, 音声認識，コミュニケーション，骨伝導",
      "ogTitle": "ふじえもんのおへや",
      "ogDescription": "ふじえもんのホームページです．成果物や登壇資料を掲載しています．",
      "ogSiteName": "ふじえもんのおへや",
      "twitterTitle": "ふじえもんのおへや",
      "twitterDescription": "ふじえもんのホームページです．成果物や登壇資料を掲載しています．"
    },
    "nav": {
      "blog": "Blog",
      "apps": "Apps",
      "research": "Research",
      "talks": "Talks",
      "menu": "メニュー",
      "skip": "本文へ"
    },
    "hero": {
      "name": "Shota Fujie aka ふじえもん",
      "tagline": "JAIST M1 / 骨伝導で補聴している難聴エンジニア",
      "bio": "音声信号処理 / 骨伝導 / アプリ開発 / Agile / コミュニケーション / 日本酒",
      "scroll": "Scroll"
    },
    "apps": {
      "title": "Apps",
      "subtitle": "主な取り組み",
      "timeline": {
        "name": "タイムライン",
        "tag": "Web · 個人用",
        "description": "日々のメモやAIとの作業記録を，一つのタイムラインにまとめる個人用ツール．Markdownで保存し，話題ごとの閲覧や返信，検索ができます．",
        "tech": [
          "Next.js",
          "FastAPI",
          "Markdown"
        ],
        "imageAlt": "サンプル投稿を表示したタイムライン．読書メモとAIとの相談記録，タグ，投稿欄が並ぶ",
        "imageLabel": "サンプル画面を見る ↗"
      },
      "asrivia": {
        "name": "asrivia",
        "tag": "Desktop",
        "description": "ローカルで音声認識と翻訳を行うアプリ．結果を小さな最前面ウィンドウに表示し，ほかのアプリを使いながら字幕を確認できます．",
        "tech": [
          "Python",
          "音声認識",
          "翻訳"
        ],
        "link": "GitHub →",
        "imageAlt": "asriviaの字幕ウィンドウ．Good morning. と日本語訳を表示",
        "imageLabel": "字幕ウィンドウを見る ↗"
      },
      "asrlance": {
        "name": "asrlance",
        "tag": "CLI",
        "description": "複数の音声認識モデルを，同じ音声・同じ指標で比較するツール．自分の声を使って，認識の誤りや処理時間を確かめています．",
        "tech": [
          "Python",
          "音声認識",
          "性能評価"
        ],
        "link": "GitHubで見る →"
      }
    },
    "research": {
      "title": "Research",
      "subtitle": "研究・論文",
      "paper6": {
        "year": "2026",
        "title": "多話者環境における目的音声抽出の有効性と課題―ろう・難聴者の主観評価に基づく分析―",
        "venue": "ヒューマンインタフェース学会論文誌, 28(2), pp. 165-174 / DOI: 10.11184/his.28.2_165",
        "description": "ニューラルネットワークによる目的音声抽出がろう・難聴者の聴取努力に与える効果を，序数ロジスティック混合モデルで定量的に分析．効果は低～中SNRで最も顕著だった．",
        "link": "Paper",
        "tags": [
          "共著",
          "論文誌"
        ]
      },
      "paper5": {
        "year": "2025",
        "title": "Empirical Study on Listening Effort of Deaf and Hard-of-Hearing for Enhanced Speech in Multispeaker Environments",
        "venue": "HCI International 2025 Posters, CCIS vol. 2524, Springer / DOI: 10.1007/978-3-031-94156-6_11",
        "description": "多話者環境における音声強調技術で抽出した発話の聴取努力を，ろう・難聴者を対象に主観評価で検証．",
        "link": "Paper",
        "tags": [
          "共著",
          "ポスター"
        ]
      },
      "paper1": {
        "year": "2024",
        "title": "混合音声から抽出した発話の聴取に関する聴者・難聴者の比較",
        "venue": "2024秋季日本音響学会研究発表会",
        "description": "混合音声から音声分離技術で抽出した発話の聴取について，聴者と難聴者を比較した研究．",
        "link": "Paper",
        "tags": [
          "主著",
          "ポスター"
        ]
      },
      "paper2": {
        "year": "2024",
        "title": "混合音声から抽出した難聴者の発話の聞き取りやすさに関する客観的および主観的な評価による検討",
        "venue": "研究報告アクセシビリティ (AAC), 2024(17)",
        "description": "混合音声から抽出した難聴者の発話について，客観・主観両面から聞き取りやすさを評価．学生奨励賞・ヤマハ賞受賞．",
        "link": "Paper",
        "tags": [
          "主著",
          "オーラル"
        ]
      },
      "paper3": {
        "year": "2024",
        "title": "伝音性難聴のある成人による軟骨伝導型振動子の装着位置の検討",
        "venue": "音声コミュニケーション研究会資料, 4(1) / DOI: 10.60274/asjsc.SC-2024-10",
        "description": "頭部固定位置による純音聴力レベルと文章了解度の変化を検討．",
        "link": "Paper",
        "tags": [
          "共著",
          "オーラル"
        ]
      },
      "paper4": {
        "year": "2023",
        "title": "ろう・難聴者と聴者のグループ対話における理解度・参加度の高いコミュニケーションストラテジー",
        "venue": "研究報告アクセシビリティ (AAC), 2023(7)",
        "description": "グループ対話における効果的なコミュニケーション方略を分析した研究．",
        "link": "Paper",
        "tags": [
          "主著",
          "オーラル"
        ]
      }
    },
    "awards": {
      "title": "Awards",
      "subtitle": "受賞歴",
      "award3": {
        "year": "2024",
        "name": "学長賞",
        "org": "筑波技術大学",
        "description": "2023年度の学業・研究活動に対して授与．"
      },
      "award4": {
        "year": "2023",
        "name": "優勝",
        "org": "Startup Weekend Tsukuba 9th Reborn",
        "description": "54時間でビジネスアイデアを形にする起業体験イベントで優勝．"
      }
    },
    "talks": {
      "title": "Talks",
      "subtitle": "登壇資料",
      "rsgt2023": {
        "date": "2023.01",
        "title": "RSGT2023",
        "description": "聴覚障害のある大学生チームによる臆さない発言環境の形成",
        "link": "スライドを見る →"
      },
      "scrum2023": {
        "date": "2023.03",
        "title": "スクフェス福岡",
        "description": "聴こえに依らずワイワイ発言しつつガシガシ開発するために必要なこと",
        "link": "スライドを見る →"
      },
      "unfrozen2024": {
        "date": "2024.02",
        "title": "UN-FROZEN LT会",
        "description": "聴覚障害と音声情報処理",
        "link": "スライドを見る →"
      },
      "agilePbl2024": {
        "date": "2024.03",
        "title": "AgilePBL祭り2024",
        "description": "学生としてRSGT2024に参加して得られた学び",
        "link": "スライドを見る →"
      }
    },
    "footer": {
      "copyright": "© 2025 ふじえもん"
    }
  },
  "en": {
    "meta": {
      "title": "fujiemon's Room",
      "description": "fujiemon's homepage. Showcasing projects and presentations.",
      "keywords": "Engineer, fujiemon, Hearing Loss, Speech Recognition, Communication, Bone Conduction",
      "ogTitle": "fujiemon's Room",
      "ogDescription": "fujiemon's homepage. Showcasing projects and presentations.",
      "ogSiteName": "fujiemon's Room",
      "twitterTitle": "fujiemon's Room",
      "twitterDescription": "fujiemon's homepage. Showcasing projects and presentations."
    },
    "nav": {
      "blog": "Blog",
      "apps": "Apps",
      "research": "Research",
      "talks": "Talks",
      "menu": "Menu",
      "skip": "Skip to content"
    },
    "hero": {
      "name": "Shota Fujie aka fujiemon",
      "tagline": "JAIST M1 / Hard of Hearing Engineer Using Bone Conduction Hearing Aids",
      "bio": "Speech Information Processing / Bone Conduction / App Development / Agile / Speech Communication / Sake",
      "scroll": "Scroll"
    },
    "apps": {
      "title": "Apps",
      "subtitle": "Selected projects",
      "timeline": {
        "name": "Timeline",
        "tag": "Web · Personal tool",
        "description": "A personal timeline for daily notes and work logs from AI sessions. Records are stored in Markdown, with topic views, replies, and search.",
        "tech": [
          "Next.js",
          "FastAPI",
          "Markdown"
        ],
        "imageAlt": "Timeline with sample reading notes and AI discussion records, tags, and a composer",
        "imageLabel": "View sample screenshot ↗"
      },
      "asrivia": {
        "name": "asrivia",
        "tag": "Desktop",
        "description": "Local speech recognition and translation. A small always-on-top window displays captions while you use other apps.",
        "tech": [
          "Python",
          "Speech recognition",
          "Translation"
        ],
        "link": "GitHub →",
        "imageAlt": "asrivia caption window showing Good morning and its Japanese translation",
        "imageLabel": "View caption window ↗"
      },
      "asrlance": {
        "name": "asrlance",
        "tag": "CLI",
        "description": "A tool for comparing speech recognition models using the same audio and metrics. I use recordings of my own voice to check recognition errors and processing time.",
        "tech": [
          "Python",
          "Speech recognition",
          "Benchmarking"
        ],
        "link": "GitHub →"
      }
    },
    "research": {
      "title": "Research",
      "subtitle": "Research & Publications",
      "paper6": {
        "year": "2026",
        "title": "Effectiveness and Challenges of Target-Speech Extraction in Multispeaker Environments: A Subjective Evaluation by Deaf and Hard-of-Hearing Participants",
        "venue": "Journal of Human Interface Society, 28(2), pp. 165-174 / DOI: 10.11184/his.28.2_165",
        "description": "Quantified how neural network-based target-speech extraction affects listening effort for deaf/hard-of-hearing participants, using ordinal logistic mixed models and hierarchical Bayesian extensions. Benefits were most pronounced at low-to-mid SNRs.",
        "link": "Paper",
        "tags": [
          "Co-author",
          "Journal"
        ]
      },
      "paper5": {
        "year": "2025",
        "title": "Empirical Study on Listening Effort of Deaf and Hard-of-Hearing for Enhanced Speech in Multispeaker Environments",
        "venue": "HCI International 2025 Posters, CCIS vol. 2524, Springer / DOI: 10.1007/978-3-031-94156-6_11",
        "description": "Empirically evaluated listening effort of deaf/hard-of-hearing individuals for enhanced speech in multispeaker environments. Subjective evaluation showed reduced listening effort for extracted target speech under low SNR conditions.",
        "link": "Paper",
        "tags": [
          "Co-author",
          "Poster"
        ]
      },
      "paper1": {
        "year": "2024",
        "title": "Comparison of Normal Hearing and Deaf/Hard-of-Hearing Subjects on Evaluation of Personal Speech Enhancement.",
        "venue": "Acoustical Society of Japan 2024 Autumn Meeting",
        "description": "Compared hearing and deaf/hard-of-hearing listeners using speech extracted via SpeakerBeam. Found higher intelligibility in extracted speech vs mixed audio, improving with higher SNR.",
        "link": "Paper",
        "tags": [
          "First Author",
          "Poster"
        ]
      },
      "paper2": {
        "year": "2024",
        "title": "Examination of the speech intelligibility of people with hearing loss extracted from mixed speech by objective and subjective evaluation",
        "venue": "IPSJ SIG Technical Report AAC, 2024(17)",
        "description": "Evaluated speech separation in noisy group settings. Subjective tests and objective metrics (HASPI/HASQI) showed improved intelligibility for hard-of-hearing listeners. Received Student Encouragement Award and Yamaha Award.",
        "link": "Paper",
        "tags": [
          "First Author",
          "Oral"
        ]
      },
      "paper3": {
        "year": "2024",
        "title": "Study on Attachment Position of Cartilage Conduction Transducer by Adults with Conductive Hearing Loss",
        "venue": "Proceedings of the Speech Communication Research Group, 4(1) / DOI: 10.60274/asjsc.SC-2024-10",
        "description": "Evaluated cartilage conduction transducer placement on a participant with conductive hearing loss. The mastoid region yielded the best pure-tone thresholds and subjective clarity among tested positions.",
        "link": "Paper",
        "tags": [
          "Co-author",
          "Oral"
        ]
      },
      "paper4": {
        "year": "2023",
        "title": "Communication Strategies for High Comprehension and Participation in Group Dialogue between Deaf and Hard-of-Hearing and Hearing People",
        "venue": "IPSJ SIG Technical Report AAC, 2023(7)",
        "description": "Explored strategies for deaf/hard-of-hearing members in Agile teams. Found that relying solely on tools like visualization can hinder interaction; developing team-specific strategies is crucial for active participation.",
        "link": "Paper",
        "tags": [
          "First Author",
          "Oral"
        ]
      }
    },
    "awards": {
      "title": "Awards",
      "subtitle": "Honors & Awards",
      "award3": {
        "year": "2024",
        "name": "University President's Award",
        "org": "Tsukuba University of Technology",
        "description": "Awarded for outstanding academic and research achievements in FY2023."
      },
      "award4": {
        "year": "2023",
        "name": "1st Place",
        "org": "Startup Weekend Tsukuba 9th Reborn",
        "description": "Won first place at a 54-hour startup experience event for turning business ideas into reality."
      }
    },
    "talks": {
      "title": "Talks",
      "subtitle": "Presentations",
      "rsgt2023": {
        "date": "2023.01",
        "title": "RSGT2023",
        "description": "Creating an Environment for Fearless Communication in a Team of Deaf/HoH University Students",
        "link": "View Slides →"
      },
      "scrum2023": {
        "date": "2023.03",
        "title": "Scrum Fest Fukuoka",
        "description": "What's Needed for Lively Discussion and Active Development Regardless of Hearing Ability",
        "link": "View Slides →"
      },
      "unfrozen2024": {
        "date": "2024.02",
        "title": "UN-FROZEN LT",
        "description": "Hearing Loss and Speech Information Processing",
        "link": "View Slides →"
      },
      "agilePbl2024": {
        "date": "2024.03",
        "title": "AgilePBL Festival 2024",
        "description": "Lessons Learned from Participating in RSGT2024 as a Student",
        "link": "View Slides →"
      }
    },
    "footer": {
      "copyright": "© 2026 fujiemon"
    }
  }
};
