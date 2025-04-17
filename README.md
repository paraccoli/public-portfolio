# Paraccoli Portfolio - OSS Version

[![Live Demo](https://img.shields.io/badge/Live_Demo-blue)](https://portfolio.paraccoli.com/)

これはParaccoliのポートフォリオサイトの公開部分をオープンソース化したものです。Next.js、TypeScript、Tailwind CSSを使用して構築されたモダンでレスポンシブなデザインのポートフォリオサイトです。このリポジトリは、開発者が参考にしたり、自身のポートフォリオサイトの基盤として利用したりするためのものです。

---

## 目次

- [概要](#概要)
- [機能](#機能)
- [使用技術](#使用技術)
- [インストール](#インストール)
- [カスタマイズ](#カスタマイズ)
- [貢献方法](#貢献方法)
- [ライセンス](#ライセンス)
- [連絡先](#連絡先)

---

## 概要

このリポジトリは、Paraccoliのポートフォリオサイトの公開部分をオープンソース化したものです。ブログ、プロジェクト紹介、問い合わせフォームなどの機能を備え、モダンでレスポンシブなデザインを提供します。Next.js、TypeScript、Tailwind CSSを使用しており、開発者が学び、構築するための基盤として活用できます。

---

## 機能

- **レスポンシブデザイン**: モバイルからデスクトップまで対応。
- **ブログ機能**: Markdownサポートによる記事投稿・管理。
- **プロジェクト紹介**: GitHubリポジトリとの連携が可能。
- **問い合わせフォーム**: Resend経由のメール送信機能。
- **サイバーテーマのUI**: 未来的なデザイン。
- **Markdownサポート**: ブログやテキストコンテンツの簡単な作成。

---

## 使用技術

- **Next.js**: サーバーサイドレンダリングと静的生成のためのReactフレームワーク。
- **TypeScript**: 静的型付けによる開発効率向上。
- **Tailwind CSS**: 迅速でカスタマイズ可能なスタイリング。
- **Resend**: 問い合わせフォームのメール送信。
- **Cloudflare**: メールルーティングやDNS管理。

---

## インストール

プロジェクトをローカルでセットアップする手順は以下の通りです：

1. **リポジトリのクローン**:
   ```bash
   git clone https://github.com/paraccoli/public-portfolio.git
   cd public-portfolio
   ```

2. **依存関係のインストール**:
    ```bash
    npm install
    ```

3. **環境変数の設定**:
    - ルートディレクトリに`.env.local`ファイルを作成。
    - 必要な環境変数を追加（例）:
    ```bash
    NEXT_PUBLIC_RESEND_API_KEY=your_api_key_here
    ```
    注: 問い合わせフォームを使用しない場合は不要。

4. **開発サーバーの起動**;
    ```bash
    npm run dev
    ```

5. **本番環境用のビルド**:
    ```bash
    npm run build
    ```

6. **本番モードでの起動**:
    ```bash
    npm start
    ```
    注: Node.js（バージョン18以上）のインストールが必要です。

## ⚠セキュリティに関する注意⚠

このリポジトリには以下の管理用ファイルリストが含まれています：

- `admin-files.txt` - 管理者機能に関連するファイル一覧
- `auth-files.txt` - 認証およびメール送信に関連するファイル一覧

**注意**: これらのファイルはセキュリティ上の理由から実際の実装コードは含まれていません。独自の認証および管理者機能を実装する際の参考としてご利用ください。

## カスタマイズ
このプロジェクトは簡単にカスタマイズ可能です。以下は開始方法です：

- テーマ変更: tailwind.config.jsを編集して色やフォントを調整。
- ページ追加: pagesディレクトリに新しいページコンポーネント（例: pages/about.tsx）を作成。

### コンテンツ更新:
- content/blogディレクトリのMarkdownファイルを編集してブログを更新。
- プロジェクトデータをコード（例: projects配列やデータファイル）で更新。

### サービス統合:
- 問い合わせフォームを独自のメールサービス（例: Resend、SendGrid）に変更。
- GitHub連携やアナリティクスツールを追加。

このリポジトリをフォークして独自のポートフォリオサイトの基盤として使用できます。使用する場合は、このリポジトリへのリンクでクレジットを記載してください。

## 貢献方法

貢献を歓迎します！以下のガイドラインに従ってください：

- 問題の報告: バグや機能リクエストはGitHubでIssueを登録。
- フォークとブランチ: リポジトリをフォークし、変更用のブランチ（例: feature/new-blog-feature）を作成。
- コミットガイドライン: 変更の目的を説明する詳細なコミットメッセージを使用。
- プルリクエスト: 変更をプルリクエストで提出。必要に応じてテストを含む。
- コードスタイル: Prettierを使用したコードフォーマットに従う。提出前にnpm run formatを実行。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細はLICENSEを参照してください。

## 連絡先

質問、サポート、コラボレーションの提案は、contact@paraccoli.com (mailto:contact@paraccoli.com)までご連絡ください。


---

### 英語版

# Paraccoli Portfolio - OSS Version

[![Live Demo](https://img.shields.io/badge/Live_Demo-blue)](https://portfolio.paraccoli.com/)

This is the open-source version of the public-facing part of Paraccoli's portfolio website. Built with Next.js, TypeScript, and Tailwind CSS, it showcases a modern, responsive design with features tailored for a seamless user experience. This repository contains only the public-facing components of the site, ensuring it can be used as a reference or starting point for similar projects.

---

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Description

This repository contains the open-source version of Paraccoli's portfolio website, focusing on the public-facing components. It is designed to showcase a professional portfolio with features like a blog, project showcase, and contact form, all while maintaining a modern and responsive design. The site is built using Next.js for its React framework, TypeScript for type safety, and Tailwind CSS for rapid and customizable styling. This open-source version is intended for developers who want to learn from or build upon a well-structured portfolio site.

---

## Features

- **Responsive Design**: Ensures the site looks great on all devices, from mobile to desktop.
- **Blog Functionality**: Supports posting and managing blog articles, with Markdown support for easy content creation.
- **Project Showcase**: Highlights key projects, with optional integration to GitHub repositories for more details.
- **Contact Form**: Allows visitors to get in touch, with emails routed through a custom email setup (e.g., Resend).
- **Cyber-themed UI**: Features a unique, futuristic design aesthetic.
- **Markdown Support**: Simplifies content creation for blog posts and other text-heavy sections.

---

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and statically generated applications.
- **TypeScript**: For static typing and better development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid and customizable styling.
- **Resend**: Handles email sending for the contact form.
- **Cloudflare**: Used for email routing and potentially other services like DNS management.

---

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/paraccoli/public-portfolio.git
   cd public-portfolio
   ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. Set Up Environment Variables:
    - Create a `.env.local` file in the root directory.
    - Add necessary environment variables, such as:
    ```bash
    NEXT_PUBLIC_RESEND_API_KEY=your_api_key_here
    ```
    Note: If you're not using the contact form, this step can be skipped.

4. **Run the Development Server**:
    ```bash
    npm run dev
    ```

5. **Build for Production**:
    ```bash
    npm run build
    ```

6. **Start in Production Mode**:
    ```bash
    npm start
    ```
    Note: Ensure you have Node.js (version 18 or higher) installed, as it is recommended by Next.js.

## Customization

This project is designed to be easily customizable. Here are some tips to get you started:

- Change the Theme: Modify the Tailwind CSS configuration (tailwind.config.js) to adjust colors, fonts, or other styles.

- Add New Pages: Create new page components in the pages directory (e.g., pages/about.tsx).

    ### Update Content:

    - Edit Markdown files in the content/blog directory (or equivalent) to add or modify blog posts.

    - Update project data in the code (e.g., in a projects array or data file).

    ### Integrate Services:

    - Update the contact form to use your own email service (e.g., Resend, SendGrid).

    - Add other integrations, such as GitHub for project links or analytics tools.

Feel free to fork this repository and use it as a starting point for your own portfolio site. If you use this project, please consider giving credit by linking back to this repository.


## Contributing

We welcome contributions! Please follow these guidelines:

- Report Issues: If you find a bug or have a feature request, open an issue on GitHub.

- Fork and Branch: Fork the repository, then create a new branch for your changes (e.g., feature/new-blog-feature).

- Commit Guidelines: Use descriptive commit messages that explain the purpose of your changes.

- Pull Requests: Submit a pull request with your changes. Include tests if applicable.

- Code Style: Follow the project's code style, which uses Prettier for formatting. Run npm run format before submitting.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact

For any questions, support, or collaboration opportunities, please contact me at contact@paraccoli.com (mailto:contact@paraccoli.com).

---

THX








