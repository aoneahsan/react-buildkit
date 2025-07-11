import { APP_ROUTES } from '@utils/constants/generic';
import { SearchParamKeysEnum } from '@enums/common';
import { decryptData, encryptData } from '@utils/helpers/crypto';

export const setSearchParamsData = (
  data: unknown,
  setSearchParams: (
    nextInit?: any, // this type is from react router and i don't want to install the types of react router just to give that here, as we are not even using it below
    navigateOpts?: undefined
  ) => void
): void => {
  try {
    const _encryptedData = encryptData(data);
    if (_encryptedData) {
      setSearchParams({
        [SearchParamKeysEnum.encryptedDataSearchParam]: _encryptedData,
      });
    }
  } catch (error) {
    console.error('Failed to set search params data:', error);
  }
};

export const getSearchParamsData = <T>(
  searchParams: URLSearchParams
): T | null => {
  try {
    const _data = searchParams.get(
      SearchParamKeysEnum.encryptedDataSearchParam
    );
    if (_data) {
      return decryptData(_data) as T;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const addQueryParamsInUrl = (
  url: string,
  queryParams: Record<string, string> | null
): string => {
  if (queryParams && Object.keys(queryParams).length > 0) {
    if (!url.includes('?')) {
      url += '?';
    }

    Object.keys(queryParams).forEach((_key, index, arr) => {
      url += `${_key}=${queryParams[_key]}`;

      if (index < arr.length - 1) {
        url += '&';
      }
    });

    return url;
  } else {
    return url;
  }
};

// routesMatch will contain other info as well, but for now, i'm only interested in "pathname" value, as we do not have 2nd level nested routes in our app
export const formatRoutesMatchResult = (
  routesMatch: string[] | undefined
):
  | {
      isLoginRoute: boolean;
      isRegisterRoute: boolean;
      isHomeRoute: boolean;
      isMyAccountRoute: boolean;
    }
  | {
      isLoginRoute?: undefined;
      isRegisterRoute?: undefined;
      isHomeRoute?: undefined;
      isMyAccountRoute?: undefined;
    } => {
  if (routesMatch && routesMatch.length > 0) {
    const isLoginRoute = routesMatch[0] === APP_ROUTES.login;
    const isRegisterRoute = routesMatch[0] === APP_ROUTES.register;

    const isHomeRoute = routesMatch[0] === APP_ROUTES.home;
    const isMyAccountRoute = routesMatch[0] === APP_ROUTES.myAccount;

    return {
      isLoginRoute,
      isRegisterRoute,
      isHomeRoute,
      isMyAccountRoute,
    };
  } else {
    return {};
  }
};
