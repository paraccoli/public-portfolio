import { useState, useEffect } from 'react';
import { fetchUserRepos, fetchRepoDetails, fetchUserProfile, RepoSortType } from '../utils/githubAPI';

// 利用可能なフェッチタイプ
type FetchType = 'userRepos' | 'repoDetails' | 'userProfile';

// 共通の返り値型
interface UseFetchGitHubReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * GitHub APIからユーザーのリポジトリを取得するカスタムフック
 * 
 * @param username - GitHub ユーザー名
 * @param options - 追加設定オプション
 * @returns リポジトリデータ、ローディング状態、エラー
 */
export function useFetchUserRepos(
  username: string, 
  options?: { sort?: RepoSortType; perPage?: number }
): UseFetchGitHubReturn<any[]> {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const repos = await fetchUserRepos(username, options);
      setData(repos);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('リポジトリの取得中にエラーが発生しました'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [username, options?.sort, options?.perPage]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * GitHub APIから特定のリポジトリの詳細を取得するカスタムフック
 * 
 * @param username - GitHub ユーザー名
 * @param repoName - リポジトリ名
 * @returns リポジトリ詳細データ、ローディング状態、エラー
 */
export function useFetchRepoDetails(
  username: string,
  repoName: string
): UseFetchGitHubReturn<any> {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const repoDetails = await fetchRepoDetails(username, repoName);
      setData(repoDetails);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('リポジトリ詳細の取得中にエラーが発生しました'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username && repoName) {
      fetchData();
    }
  }, [username, repoName]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * GitHub APIからユーザープロフィールを取得するカスタムフック
 * 
 * @param username - GitHub ユーザー名
 * @returns ユーザープロフィールデータ、ローディング状態、エラー
 */
export function useFetchUserProfile(username: string): UseFetchGitHubReturn<any> {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const profile = await fetchUserProfile(username);
      setData(profile);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('ユーザープロフィールの取得中にエラーが発生しました'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchData();
    }
  }, [username]);

  return { data, loading, error, refetch: fetchData };
}

// 統合フックを提供（利用パターンに応じて選択可能）
export default function useFetchGitHub(
  fetchType: FetchType,
  params: {
    username: string;
    repoName?: string;
    options?: { sort?: RepoSortType; perPage?: number };
  }
): UseFetchGitHubReturn<any> {
  const { username, repoName, options } = params;

  // 型に応じて適切なフックを呼び出す
  switch (fetchType) {
    case 'userRepos':
      return useFetchUserRepos(username, options);
    case 'repoDetails':
      if (!repoName) {
        throw new Error("リポジトリ名が必要です");
      }
      return useFetchRepoDetails(username, repoName);
    case 'userProfile':
      return useFetchUserProfile(username);
    default:
      throw new Error("サポートされていないフェッチタイプです");
  }
}