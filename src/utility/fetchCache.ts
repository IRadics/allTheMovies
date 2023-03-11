type CachedItem = {
  expires: string;
  data: string;
};

const cachePrefix = "atm_cache_";

export default class FetchCache {
  private _maxAge: number = 600;
  public get maxAge(): number {
    return this._maxAge;
  }
  public set maxAge(v: number) {
    this._maxAge = v;
  }

  constructor(maxAge?: number) {
    if (maxAge) this._maxAge = maxAge;
  }

  public fetchWithCache = async (
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> => {
    const cached = localStorage.getItem(cachePrefix + input.toString());
    let cacheValid = false;
    let cachedData;
    if (cached) {
      cachedData = JSON.parse(cached) as CachedItem;
      if (parseInt(cachedData.expires) > Date.now()) {
        cacheValid = true;
      }
    }

    if (cacheValid) {
      return new Response(cachedData?.data);
    } else {
      return fetch(input, init)
        .then(async (response) => {
          const respToCache = response.clone();
          const cachedItem: CachedItem = {
            expires: (Date.now() + this._maxAge * 1000).toString(),
            data: await respToCache.text(),
          };
          localStorage.setItem(
            cachePrefix + input.toString(),
            JSON.stringify(cachedItem)
          );
          return response.clone();
        })
        .catch((reason) => {
          throw new Error(reason);
        });
    }
  };

  public clearCache = async () => {
    const items = Object.keys(localStorage);
    items.forEach((key) => {
      if (key.startsWith(cachePrefix)) localStorage.removeItem(key);
    });
  };
}
