import { Project, Skill } from "./types";
import imgUrl1 from "./images/migg-site-1.png";
import imgUrl2 from "./images/migg-site-2.png";
import imgUrl3 from "./images/migg-site-3.png";
import imgUrl4 from "./images/migg-site-5.png";
import imgUrl5 from "./images/migg-site-6.png";
import imgUrl6 from "./images/kins-site-1.png";
import imgUrl7 from "./images/kins-site-2.png";
import imgUrl8 from "./images/kins-site-3.png";
import imgUrl9 from "./images/kins-site-4.png";

export const projects: Project[] = [
  {
    id: "lifestyle-brand-site",
    title: "Lifestyle Brand Site",
    description:
      "",
    image: imgUrl1,
    tags: ["Shopify", "Liquid", "JavaScript"],
    fullDescription: `
    <p class="text-sm">
      Shopifyを活用し、ブランドの世界観を最大限に表現するECサイトを構築しました。<br/>
      シンプルなデザインで、アパレル商品の魅力とビューティーサロンの情報を直感的に伝えるUI/UXを追求しました。<br/>
      ブランドストーリーや世界観を丁寧に表現しつつ、ユーザーが迷わずに購入・予約へ進める導線設計を重視しています。
    </p>
    <br/>
    <p class="p-heading">担当範囲</p>
    <ul>
      <li>・要件定義</li>
      <li>・ワイヤーフレーム設計</li>
      <li>・UI/UX設計</li>
      <li>・コーディング</li>
      <li>・レスポンシブ対応</li>
      <li>・SEO対策</li>
      <li>・運用サポート</li>
    </ul> 
    <br/>
    <p class="p-heading">技術スタック</p>
    <ul>
      <li>EC Platform: Shopify</li>
      <li>Frontend: HTML, CSS, JavaScript, Liquid</li>
      <li>Design tool: Figma</li>
  </ul>
    `,
    screenshots: [imgUrl2, imgUrl4, imgUrl5],
    link: "https://formigg.com/",
  },
  {
    id: "skincare-ec",
    title: "Skincare E-Commerce Site",
    description: "",
    image: imgUrl6,
    tags: ["ecforce", "Liquid", "Vue.js"],
    fullDescription: `
      <p>
        ecforceを活用し、スキンケア商品の販売に特化したECサイトを構築しました。<br/>
        ユーザーの肌悩みやニーズに合わせた商品検索・購入導線を実現することで、顧客体験を向上しました。<br/>
        また、会員ランクやクーポン施策などの運用設計にも注力し、ブランド成長をサポートしました。
      </p>
      <br/>
      <p class="p-heading">担当範囲</p>
      <ul>
        <li>・要件定義</li>
        <li>・ワイヤーフレーム設計</li>
        <li>・コーディング</li>
        <li>・コンテンツ企画</li>
        <li>・レスポンシブ対応</li>
        <li>・SEO対策</li>
      </ul> 
      <br/>
      <p class="p-heading">技術スタック</p>
      <ul>
        <li>EC Platform: ecforce</li>
        <li>Frontend: HTML, CSS, JavaScript, Liquid, Vue.js</li>
        <li>Server/Hosting: Google Cloud Platform</li>
        <li>Data Analytics: Google Analytics, Google Tag Manager</li>
      </ul>
    `,
    screenshots: [imgUrl7, imgUrl8, imgUrl9],
    link: "https://yourkins.com/",
  },
];

export const skills: Skill[] = [
  { name: "HTML", years: 5 },
  { name: "CSS", years: 5 },
  { name: "JavaScript", years: 5 },
  { name: "Liquid", years: 5 },
  { name: "React", years: 2 },
  { name: "TypeScript", years: 2 },
  { name: "Tailwind CSS", years: 1 },
  { name: "Git", years: 5 },
];
