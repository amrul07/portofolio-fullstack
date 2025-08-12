import { useRouter } from "next/navigation";
import React from "react";

export default function PortofolioLogic() {
  const router = useRouter();

  // icon di card di klik
  const onClickLink = (url) => {
    if (url.startsWith("http")) {
      window.open(url, "_blank"); // buka tab baru
    } else {
      router.push(url);
    }
  };
  return {
    value: { router },
    func: { onClickLink },
  };
}
