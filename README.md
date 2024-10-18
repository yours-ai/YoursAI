
[**한국어**](README.md) | [English](/READMEs/en.md)

<div align="center">

<img src="READMEs/logo.png" width="200" height="200">

# YoursAI

---

<p align="center">
  <img src='https://img.shields.io/badge/frontend framework-react-orange.svg?style=shields' alt="frontend framework"/>
  <img alt='language' src='https://img.shields.io/badge/language-typescript-brightgreen.svg?style=shields'/>
  <img alt="bundler" src="https://img.shields.io/badge/bundler-vite-darkblue.svg?style=shields"/>
  <img alt="database" src="https://img.shields.io/badge/database-dexie-yellow.svg?style=shields"/>
  <img alt="application" src="https://img.shields.io/badge/application-pwa ready-blue.svg?style=shields"/>
  <img alt="eta" src="https://img.shields.io/badge/ETA-end of november-red.svg?style=shields"/>
</p>

<p align="center">
  <a href="https://blog.yoursai.app">블로그</a> - <a href="https://form.yoursai.app/waitlist">사전 예약</a> - <a href="https://yoursai.app">웹 앱 접속 (WIP)</a> 
</p>

(개발중) AI 채팅 팬들을 위한 모던한 커스텀 AI 채팅 프론트엔드. (SillyTavern의 영향을 받음)

</div>



## 소개

저희는 현재 시장의 AI 채팅이 충분히 재밌지 않다고 생각합니다. 
Character.AI 스타일의 많은 AI 채팅 서비스가 나오고 있고, 다양하고 자극적인 캐릭터들로 충분히 매력적이지만, 
당초 AI 연인에 대해 생각하는 비전: 하나의 대상에 충분히 몰입할 수 있는 목적의 서비스들은 아니라고 생각합니다.

일부 AI 채팅 팬들은 [SillyTavern](https://github.com/SillyTavern/SillyTavern/tree/release/src) 등의 프로젝트를 통해 커스텀 로컬 채팅 프론트엔드 방식으로 채팅을 즐기고 있습니다.
스스로 원하는 방식으로 프롬프트를 다듬고, 자체적으로 UI를 커스텀해 이미 시장의 AI 채팅 서비스들보다 훨씬 더 뛰어난 수준의 AI 채팅을 즐기고 있습니다.
저희는 이러한 오픈 소스 커뮤니티 방식으로 조금 더 몰입감있고 의미있게 "재미있는" AI 연인 경험을 만들어나갈 수 있다고 생각합니다.

YoursAI는 이러한 커뮤니티 방식의 커스텀 AI 채팅 프론트엔드 문화를 지원하고, 더욱 확장하기 위해서 개발중입니다.
Character Role-playing 보다는 LLM Frontend에 가까웠던 기존 프로젝트들은 투박한 UI에 다소 어려운 UX를 가지고 있는 경우가 많았습니다.
YoursAI는 완전 커스텀 가능한 기존 프로젝트들의 장점을 유지하면서도, 상용 수준의 깔끔하고 빠릿한 유저 경험을 제공하는 것을 목표로 합니다.

## 특징

- **🎨 깔끔하고 쉬운 UI/UX**: 기본적으로 Apple style의 테마를 지원하며, 커스텀 테마를 개발하기 쉽도록 설계되었습니다.
- **📱 [PWA](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Tutorials/js13kGames)를 통한 네이티브 어플리케이션 경험**: 모바일, 데스크톱에서의 어플리케이션 경험을 지원합니다.
- **💾 로컬 데이터 저장**: 데이터는 로컬에만 저장되며, 언제든지 export 및 완전 삭제할 수 있습니다.
- **📩 선톡 기능**: 캐릭터에게서 먼저 연락이 오도록 하는 선톡 기능을 지원합니다. PWA 경험을 통해 앱 알림을 받을 수 있습니다.
- **🧠 [Function calling](https://platform.openai.com/docs/guides/function-calling)을 통한 구조화된 채팅 데이터 지원**: 캐릭터의 채팅을 plain text가 아닌 structured data 구조로 받을 수 있습니다. 노출되지 않는 chain of thought, 캐릭터의 표정, 호감도 상태 등으로 활용해보세요.


## 공지
- 개발 과정에서의 불필요한 이슈를 최소화하기 위해 private repo에서 개발중이며, 서비스 공개와 함께 open source로 전환할 예정입니다.
- 이 프로젝트는 서울에 위치한 한국 스타트업 피그말리온팀이 운영하고 있습니다.
  - 피그말리온팀은 과몰입(!) AI 연인을 만드는 것을 목표로 하는 팀입니다.
  - 같은 꿈을 꾸고 싶으시다면 자유 형태의 이력서와 함께 이메일([contact@yoursai.app](mailto:contact@yoursai.app))로 지원주세요!

## 최근 소식

- [YoursAI 정상 영업합니다](https://blog.yoursai.app/yoursai-first-post/) - 10월 14일, 2024 [@narayo9](https://github.com/narayo9)


## License

[GPL-3.0 License](LICENSE)

