import { REPO } from "@/constant/prefix";
import * as NextImage from "next/image";
export function Image(props:NextImage.ImageProps) {
  return <NextImage.default {...props} src={`/${REPO}/${props.src}`}/>;
}
