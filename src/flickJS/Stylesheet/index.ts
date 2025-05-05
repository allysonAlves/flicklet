import { Styles } from "./types";

export const Stylesheet = {
  create: <T extends Styles>(styles: T): T => styles,
};
