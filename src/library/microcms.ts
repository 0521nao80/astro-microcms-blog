import { createClient } from "microcms-js-sdk";

// クライアントの初期化（環境変数を使用）
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ブログ記事の型定義
export interface Blog {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
}

// microCMSのレスポンス全体の型定義
export interface BlogResponse {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
}