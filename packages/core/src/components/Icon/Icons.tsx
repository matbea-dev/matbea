import React from "react";
import { Icon, Size, Fill } from "./Icon";
import IconArrowDownBase from "../../assets/icons/icon--arrow-down.svg";
import IconCloseBase from "../../assets/icons/icon--close.svg";
import IconDangerBase from "../../assets/icons/icon--danger.svg";
import IconFbBase from "../../assets/icons/icon--fb.svg";
import IconIconLangBase from "../../assets/icons/icon--icon-lang.svg";
import IconInstBase from "../../assets/icons/icon--inst.svg";
import IconLinkedinBase from "../../assets/icons/icon--linkedin.svg";
import IconMenuBase from "../../assets/icons/icon--menu.svg";
import IconQuoteBase from "../../assets/icons/icon--quote.svg";
import IconSkypeBase from "../../assets/icons/icon--skype.svg";
import IconTgBase from "../../assets/icons/icon--tg.svg";
import IconTwitterBase from "../../assets/icons/icon--twitter.svg";
import IconWhatsappBase from "../../assets/icons/icon--whatsapp.svg";

type IconUIFillProps = {
  size?: Size;
  fill?: Fill;
};

// type IconUIStrokeProps = {
//   size?: Size;
//   stroke?: Stroke;
// };

export const IconWhatsapp: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon
    icons={IconWhatsappBase}
    name="icon--whatsapp"
    size={size}
    fill={fill}
  />
);
export const IconTwitter: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconTwitterBase} name="icon--twitter" size={size} fill={fill} />
);
export const IconTg: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconTgBase} name="icon--tg" size={size} fill={fill} />
);
export const IconSkype: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconSkypeBase} name="icon--skype" size={size} fill={fill} />
);
export const IconQuote: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconQuoteBase} name="icon--quote" size={size} fill={fill} />
);
export const IconMenu: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconMenuBase} name="icon--menu" size={size} fill={fill} />
);
export const IconLinkedin: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon
    icons={IconLinkedinBase}
    name="icon--linkedin"
    size={size}
    fill={fill}
  />
);
export const IconInst: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconInstBase} name="icon--inst" size={size} fill={fill} />
);
export const IconIconLang: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon
    icons={IconIconLangBase}
    name="icon--icon-lang"
    size={size}
    fill={fill}
  />
);
export const IconFb: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconFbBase} name="icon--fb" size={size} fill={fill} />
);
export const IconDanger: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconDangerBase} name="icon--danger" size={size} fill={fill} />
);
export const IconClose: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon icons={IconCloseBase} name="icon--close" size={size} fill={fill} />
);
export const IconArrowDown: React.FC<IconUIFillProps> = ({ size, fill }) => (
  <Icon
    icons={IconArrowDownBase}
    name="icon--arrow-down"
    size={size}
    fill={fill}
  />
);
