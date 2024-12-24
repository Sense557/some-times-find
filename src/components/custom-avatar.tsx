import { getNameInitials } from "@/utilities";
import { Avatar as AntdAvatar } from "antd";

type Props = {
  name?: string;
  style?: React.CSSProperties;
};

const CustomAvatar = ({ name, style, ...rest }: Props) => {
  return (
    <AntdAvatar
      alt={name}
      size="small"
      style={{
        backgroundColor: "#87d068",
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style,
      }}
      {...rest}
    >
      {getNameInitials(name || '')}
    </AntdAvatar>
  );
};

export default CustomAvatar;
