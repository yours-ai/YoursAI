[**English**](./README.md) | [한국어](READMEs/ko.md) 

<div align="center">

<img src="READMEs/logo.png" width="200" height="200">

# YoursAI

<p align="center">
  <img src='https://img.shields.io/badge/frontend framework-react-orange.svg?style=shields' alt="frontend framework"/>
  <img alt='language' src='https://img.shields.io/badge/language-typescript-brightgreen.svg?style=shields'/>
  <img alt="bundler" src="https://img.shields.io/badge/bundler-vite-darkblue.svg?style=shields"/>
  <img alt="database" src="https://img.shields.io/badge/database-dexie-yellow.svg?style=shields"/>
  <img alt="application" src="https://img.shields.io/badge/application-pwa ready-blue.svg?style=shields"/>
  <img alt="eta" src="https://img.shields.io/badge/ETA-end of november-red.svg?style=shields"/>
</p>

<p align="center">
  <a href="https://blog.yoursai.app">Blog</a> - <a href="https://form.yoursai.app/waitlist">Waitlist</a> - <a href="https://yoursai.app">Web App (WIP)</a> 
</p>

(WIP) Modern, customizable AI companion frontend for enthusiasts. (Inspired by SillyTavern)

</div>



## Introduction

Current AI chat services in the market are not fun enough.
Although many AI chat services inspired by Character.AI are emerging with diverse and engaging characters,
we don't think they truly serve the purpose of creating immersive experiences where users can form a deep attachment to a individual AI companion, as originally envisioned.

Some AI chat enthusiasts enjoy using customizable local chat frontends through projects like [SillyTavern](https://github.com/SillyTavern/SillyTavern/tree/release/src).
By refining their own prompts and customizing the UI, they are experiencing AI chats that surpass many market services.
We believe that an immersive and meaningful AI companion experience can be developed through this open-source community-driven approach.

YoursAI is currently being developed to support and expand this community-driven custom AI companion frontend culture.
Because many existing projects have a more LLM frontends orientation but not character role-playing orientation, 
they often feature clunky UIs and challenging user experiences.
YoursAI aims to offer a sleek and responsive user experience akin to a commercial-grade application, while maintaining a wide range of prompt customization that existing projects offer.

## Features

- **🎨 Clean and Easy UI/UX**: By default, it supports an Apple-style theme and is designed to make custom theme development easy.
- **📱 [PWA](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Tutorials/js13kGames) Native Application Experience**: Supports application-like experiences on both mobile and desktop platforms.
- **💾 Local Data Storage**: Data is stored locally and can be exported or completely deleted at any time.
- **📩 First Message Feature**: Supports a feature where the character reaches out first. Receive app notifications through the PWA experience.
- **🧠 Structured Chat Data via [Function Calling](https://platform.openai.com/docs/guides/function-calling)**: Receive structured data instead of plain text for character chat, including chain of thought, character expressions, and affinity status.

## Notice
- To minimize unnecessary issues during development, we are developing in a private repository and plan to transition to open source with the service launch.
- This project is operated by the Pygmalion team, a startup based in Seoul, South Korea.
  - The Pygmalion team is aiming to create an intensely immersive(!) AI companion.
  - If you share the same vision, feel free to send your resume via email ([contact@yoursai.app](mailto:contact@yoursai.app)) and apply!
  
## Recent News

- [YoursAI is Open](https://blog.yoursai.app/yoursai-first-post/) - October 14, 2024 [@narayo9](https://github.com/narayo9)


## License

[GPL-3.0 License](LICENSE)
