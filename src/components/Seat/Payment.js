import { Modal } from "antd";
import React from "react";

export default function Payment() {
  const success = () => {
    Modal.success({
      content: "Payment success",
    });
  };
  return (
    <div className="payment text-center py-4">
      <button
        className="bg-red-300 px-7 py-2 uppercase font-semibold text-lg text-red-800 rounded-md hover:bg-red-800 hover:text-white transition-all"
        onClick={success}
      >
        Thanh toán
      </button>
    </div>
  );
}
