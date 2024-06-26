"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useGallery } from "../GalleryContext";
import dynamic from "next/dynamic";

const ImageModal = () => {
  const { clicked, changeState } = useGallery();
  const containerRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: containerRef });
  const t1 = gsap.timeline({ paused: true });
  t1.to(".img_modal", {
    duration: 0.75,
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut",
    pointerEvents: "auto",
  });
  t1.to(".img_modal .img", {
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%",
    duration: 0.75,
    ease: "power4.inOut",
  });
  t1.to(
    ".modal_item .modal_p",
    {
      top: 0,
      ease: "power4.inOut",
      duration: 0.75,
      stagger: {
        amount: 3,
      },
    },
    "<"
  ).reverse();

  useGSAP(() => {
    if (!clicked) return;
    if (typeof clicked === "string") {
      t1.reversed(!t1.reversed());
    }
  }, [clicked]);

  const handleClose = contextSafe(() => {
    t1.reversed(!t1.reversed());
  });
  return (
    <div className="img_modal" ref={containerRef}>
      <div className="modal_item close_btn" onClick={handleClose}>
        <p className="modal_p">CLOSE</p>
        <div className="modal_item_revealer"></div>
      </div>
      <div className="img">
        <img src={clicked || "/logo-launch/19.webp"} alt="" />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ImageModal), { ssr: false });
