"use client";

import usePopup from "@qtpy/use-popup";
import "@qtpy/use-popup/index.css";

export default function useSimplePopup() {
  const { Popup, ...props } = usePopup(0.5);

  return Popup.Memo({
    ...props,

    Popup: () => (
      <Popup className="MWBottom" isOnCloseBG domPortalById="root">
        <div style={{ padding: 20, background: "#fff", borderRadius: 8 }}>
          <h2>Простое модальное окно</h2>
          <p>Это контент по умолчанию.</p>
        </div>
      </Popup>
    ),
  });
}
