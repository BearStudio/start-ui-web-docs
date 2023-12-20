import { Link } from "nextra-theme-docs";
import { ReactNode } from "react";
import { LuFolderOpen, LuFileText } from "react-icons/lu";

export const FileTree = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        fontSize: 14,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {children}
    </div>
  );
};

export const FileTreeFolderIcon = () => (
  <LuFolderOpen style={{ display: "inline", opacity: 0.6 }} />
);

export const FileTreeFileIcon = () => (
  <LuFileText style={{ display: "inline", opacity: 0.6 }} />
);

export const FileTreeFolder = (props: {
  name: ReactNode;
  children?: ReactNode;
  href?: string;
}) => {
  const folder = (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <FileTreeFolderIcon /> {props.name}
    </div>
  );
  return (
    <div>
      {props.href ? (
        <Link href={props.href} style={{ color: "unset" }}>
          {folder}
        </Link>
      ) : (
        folder
      )}
      {!!props.children && (
        <div style={{ paddingLeft: 16, paddingBottom: 4 }}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export const FileTreeFile = (props: { name: ReactNode; href?: string }) => {
  const file = (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <FileTreeFileIcon /> {props.name}
    </div>
  );

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      {props.href ? (
        <Link href={props.href} style={{ color: "unset" }}>
          {file}
        </Link>
      ) : (
        file
      )}
    </div>
  );
};
