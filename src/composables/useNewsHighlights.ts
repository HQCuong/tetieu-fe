import {
  ref,
  type Ref,
} from 'vue';
import { newsService } from '@/api/services';
import type {
  NewsItem,
  PageInfo,
} from '@/types';

interface UseNewsHighlightsReturn {
  isLoading: Ref<boolean>;
  newsList: Ref<NewsItem[]>;
  latest: Ref<NewsItem | null>;
  secondLatest: Ref<NewsItem | null>;
  pageInfo: Ref<PageInfo | null>;
  fetchPage: (page: number) => Promise<void>;
}

/**
 * Shared news fetching logic used by the home page and news index page.
 *
 * The current NocoDB table is sorted ascending so the "latest" item is the
 * last element of the list — we preserve that quirk instead of re-sorting.
 * The two highlights are captured on the first successful load so they stay
 * stable across pagination.
 */
export const useNewsHighlights = (): UseNewsHighlightsReturn => {
  const isLoading = ref(true);
  const newsList = ref<NewsItem[]>([]);
  const latest = ref<NewsItem | null>(null);
  const secondLatest = ref<NewsItem | null>(null);
  const pageInfo = ref<PageInfo | null>(null);

  const fetchPage = async (page: number): Promise<void> => {
    isLoading.value = true;
    const res = await newsService.getNews({ page });

    if (!res?.list?.length) {
      isLoading.value = false;

      return;
    }

    newsList.value = res.list;
    pageInfo.value = res.pageInfo ?? null;

    if (!latest.value) {
      const count = res.list.length;

      latest.value = res.list[count - 1];
      secondLatest.value = count > 1 ? res.list[count - 2] : null;
    }

    isLoading.value = false;
  };

  return {
    isLoading,
    newsList,
    latest,
    secondLatest,
    pageInfo,
    fetchPage,
  };
};
