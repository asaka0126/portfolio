import { Project, Skill } from './types';
import imgUrl1 from './images/migg-site-1.png';
import imgUrl2 from './images/migg-site-2.png';
import imgUrl3 from './images/migg-site-3.png';
import imgUrl4 from './images/migg-site-5.png';
import imgUrl5 from './images/migg-site-6.png';
import imgUrl6 from './images/kins-site-1.png';
import imgUrl7 from './images/kins-site-2.png';
import imgUrl8 from './images/kins-site-3.png';
import imgUrl9 from './images/kins-site-4.png';

export const projects: Project[] = [
  {
    id: "lifestyle-brand-site",
    title: "ライフスタイルブランドサイト",
    description: "Shopifyを活用し、シンプルで洗練されたライフスタイルブランドを表現したブランドサイトです。",
    image: imgUrl1,
    tags: ["Shopify", "Liquid", "JavaScript"],
    fullDescription: `
    <p class="text-sm">
      Shopifyを活用し、ブランドの世界観を表現するサイトを構築しました。</br>
      シンプルでエレガントなデザインを採用し、アパレル販売とBeauty Salonの情報を直感的に伝えています。
    </p>
    <br/>
    <p class="p-heading">主な機能</p>
    <ul>
      <li><strong>商品レビュー機能</strong><br> 購入者のレビューを掲載し、商品の信頼性を向上。</li>
      <li><strong>Instagram連携</strong><br> まつ毛の施術後の仕上がり画像を表示し、新規顧客の獲得を促進。</li>
      <li><strong>会員限定販売</strong><br> 特別商品の提供により、会員の利便性と満足度を向上。</li>
    </ul>
    <br/>
    <p class="p-heading">技術スタック</p>
    <ul>
      <li><strong>フロントエンド</strong><br>
        Shopify (Liquid), JavaScript, CSS</li>
      <li><strong>アプリケーション</strong><br>
        <ul>
          <li>TrustShop - Reviews（レビュー管理）</li>
          <li>Instafeed（Instagram連携）</li>
          <li>LockSmith（会員管理）</li>
        </ul>
      </li>
    </ul>
    `,
    screenshots: [
      imgUrl2,
      imgUrl4,
      imgUrl5
    ],
    link: "https://formigg.com/"
  },
  {
    id: "skincare-ec",
    title: "スキンケア販売ECサイト",
    description: "ecforceを活用し、「菌」をコンセプトにしたスキンケア商品の販売サイトです。",
    image: imgUrl6,
    tags: ["ecforce", "Liquid", "JavaScript", "Vue.js"],
    fullDescription: `
      <p>
        このプロジェクトでは、ecforceを活用して、スキンケア商品の販売に特化したサイトを構築しています。<br/>
        ユーザーが自分に合ったスキンケアアイテムを直感的に見つけ、購入できるようなデザインと機能性を追求しました。
      </p>
      <br/>
      <p class="p-heading">主な機能</p>
      <ul>
        <li><strong>定期購入機能</strong><br/> スキンケア商品の定期購入機能を提供。クーポンやポイントも利用可能。</li>
        <li><strong>商品レビュー機能</strong><br/> 実際の使用感を共有し、他のユーザーの商品選びをサポート。</li>
        <li><strong>お悩み別検索機能</strong><br/> 乾燥肌やエイジングケア、腸内環境など、ユーザーの悩みに合わせた商品を検索できる機能。</li>
      </ul> 
      <br/>
      <p class="p-heading">技術スタック</p>
      <ul>
        <li><strong>フロントエンド</strong><br> ecforce(Liquid), JavaScript, Sass, Vue.js</li>
        <li><strong>バックエンド</strong><br> ecforce, Python</li>
        <li><strong>インフラ</strong><br> Google Cloud Platform</li>
      </ul>
    `,
    screenshots: [
      imgUrl7,
      imgUrl8,
      imgUrl9
    ],
    link: "https://yourkins.com/"
  }
];

export const skills: Skill[] = [
  { name: 'HTML', years: 5 },
  { name: 'CSS', years: 5 },
  { name: 'JavaScript', years: 5 },
  { name: 'Liquid', years: 5 },
  { name: 'React', years: 2 },
  { name: 'TypeScript', years: 2 },
  { name: 'Tailwind CSS', years: 1 },
  { name: 'Git', years: 5 }
];
