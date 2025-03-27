# Portfolio

このサイトはReact、TypeScript、Viteで構築をしています。

## 機能

- **Password Protection**: ポートフォリオコンテンツへの安全なアクセス
- **Project Showcase**: web開発のプロジェクトと説明
- **Project Details**: 各プロジェクトページにスクリーンショットや技術情報を掲載

## 使用技術

- **Frontend Framework**: React, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Icons**: Lucide React

## Getting Started

### 必要条件

- Node.js (v14 or later)
- npm or yarn

### インストール手順

1. リポジトリをクローン
   ```
   git clone <repository-url>
   cd my-portfolio
   ```

2. 依存関係をインストール
   ```
   npm install
   ```

3. 開発サーバーを起動
   ```
   npm run dev
   ```

4. ブラウザを開き `http://localhost:5173`にアクセス

## Building for Production

本番用のビルドを作成するには、以下のコマンドを実行してください。

```
npm run build
```

ビルド成果物は`dist/` ディレクトリに保存されます。

## Structure

```
my-portfolio/
├── public/             # Static assets
├── src/                # Source files
│   ├── components/     # React components
│   ├── images/         # Project images
│   ├── App.tsx         # Main application component
│   ├── data.ts         # Project and skills data
│   ├── main.tsx        # Application entry point
│   ├── types.ts        # TypeScript type definitions
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── tailwind.config.js  # Tailwind CSS configuration
```
