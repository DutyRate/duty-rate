import { expect, test, describe } from 'vitest';
import { api } from '~/trpc/server';

describe('Rate Search API', () => {
  test('should return results for query "191"', async () => {
    const result = await api.rates.searchRate({
      query: "191",
      limit: 12,
    });
    console.log(result);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('cet');
    expect(result[0]).toHaveProperty('desc');
  });

  test('should return empty array for query "88888"', async () => {
    const result = await api.rates.searchRate({
      query: "88888",
      limit: 12,
    });

    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(0);
  });
});
