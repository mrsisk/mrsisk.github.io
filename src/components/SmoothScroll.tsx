import { ReactNode, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function SmoothScroll(props: { children: ReactNode }) {
  const location = useLocation();
  const navType = useNavigationType();
  const { children } = props;
  useEffect(() => {
    console.log("scroll")
    if (navType !== "POP") {
        console.log("scroll is pop");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location, navType]);
  return <>{children}</>;
}
export default SmoothScroll;