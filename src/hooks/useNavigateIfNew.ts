import {
  useNavigate,
  useLocation,
  To,
  NavigateOptions,
} from "react-router-dom";

export function useNavigateIfNew() {
  const navigateNative = useNavigate();
  const location = useLocation();

  const navigate = (to: To, options?: NavigateOptions): void => {
    const locLower = location.pathname.toLocaleLowerCase();
    const toLower = to.toString().toLocaleLowerCase();

    if (
      locLower !== `/${toLower}` &&
      locLower !== `/${toLower}/` &&
      locLower !== `${toLower}/` &&
      locLower !== `${toLower}`
    ) {
      navigateNative(to, options);
    }
  };

  return navigate;
}
