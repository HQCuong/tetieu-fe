// Centralized NocoDB table endpoints. Keep the table IDs in one place so
// swapping backends or tables only requires editing this file.
const BASE = '/v2/tables';

export const ENDPOINTS = {
  news: `${BASE}/mqikq1gwr4brz82/records`,
  performances: `${BASE}/mvx3m1bzow5ac1l/records`,
  shows: `${BASE}/mggu1r19xdmp1s3/records`,
  content: `${BASE}/mrj0v19g7j32pze/records`,
} as const;
