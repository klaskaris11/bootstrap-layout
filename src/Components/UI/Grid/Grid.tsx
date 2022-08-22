import { ReactNode } from "react";

type RowProps = {
   align?: string;
   children: ReactNode;
   classes?: Array<string>;
   direction?: string;
   justify?: string;
   style?: object;
}

type ColProps = {
   children: ReactNode;
   classes?: Array<string>;
   style?: object;
   sm?: number;
   md?: number;
   lg?: number;
   xl?: number;
}

const Row = (props: RowProps) => {
   const { align, justify, direction, classes, style, children } = props;
   return (
      <div
         className={`row mx-0 ${align ? ` align-items-${align}` : ""}${justify ? ` justify-content-${justify}` : ""}${direction ? ` flex-${direction}` : ""} ${classes ? classes.join(" ") : ""}`
         }
         style={style}
      >
         {children}
      </div>
   );
}

const Col = (props: ColProps) => {
   const { style, classes, sm, md, lg, xl, children } = props;
   return (
      <div
         className={`col-sm-${sm ? sm : "12"} col-md-${md ? md : "12"} col-lg-${lg ? lg : "12"} col-xl-${xl ? xl : "12"} ${classes ? classes.join(" ") : ""}`}
         style={style}
      >
         {children}
      </div>
   );
}

export { Row, Col };

