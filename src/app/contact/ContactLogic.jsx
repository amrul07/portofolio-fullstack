import { useRouter } from "next/navigation";
import React from "react";

export default function ContactLogic() {
  const router = useRouter();

  const onClickIcon = (url) => {
    try {
      window.open(url, "_blank"); // buka tab baru
    } catch (e) {
      console.log(e);
    }
  };
  return {
    value: {},
    func: {onClickIcon}
  }
}
