import moment from "moment";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type props = {
  value: Value;
};

type tableCellType = {
  date: String;
  dots: String;
};

function TableCell({ date, dots }: tableCellType) {
  return (
    <td className="border-2">
      <button className="w-full h-full">
        <h1>{date}</h1>
        <p>{dots}</p>
      </button>
    </td>
  );
}

function TableBody({ value }: props) {
  return (
    <tbody className="w-20 h-20">
      <tr>
        <TableCell
          date={String(moment(value instanceof Array ? value[0] : value).startOf("week")).split(" ")[2]}
          dots="***"
        />
        <TableCell
          date={String(moment(value instanceof Array ? value[0] : value).startOf("week").add(1, "day")).split(" ")[2]}
          dots="***"
        />
        <TableCell
          date={String(moment(value instanceof Array ? value[0] : value).startOf("week").add(2, "day")).split(" ")[2]}
          dots="***"
        />
        <TableCell
          date={String(moment(value instanceof Array ? value[0] : value).startOf("week").add(3, "day")).split(" ")[2]}
          dots="***"
        />
        <TableCell
          date={String(moment(value instanceof Array ? value[0] : value).startOf("week").add(4, "day")).split(" ")[2]}
          dots="***"
        />
        <TableCell
          date={String(moment(value instanceof Array ? value[0] : value).startOf("week").add(5, "day")).split(" ")[2]}
          dots="***"
        />
        <TableCell
          date={String(moment(value instanceof Array ? value[0] : value).startOf("week").add(6, "day")).split(" ")[2]}
          dots="***"
        />
      </tr>
    </tbody>
  );
}

export default TableBody;

