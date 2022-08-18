import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../contexts/CartContextProvider";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const { getCart, changeProductCount, deleteProductInCart, cart } = useCart();
  const navigate = useNavigate();

  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);

  function cartCleaner() {
    localStorage.removeItem("cart");
    navigate("/paypage");
    getCart();
  }

  const trHeadStyle = {
    backgroundColor: "#666699 !important",
  };

  return (
    <TableContainer
      className="table"
      sx={{ marginTop: 7.8, overflowX: "hidden" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell
              sx={{
                backgroundColor: "white !important",
                color: "black !important",
              }}
              align="center"
            >
              Picture
            </StyledTableCell>
            <StyledTableCell
              sx={{
                backgroundColor: "white !important",
                color: "black !important",
              }}
              align="center"
            >
              Name
            </StyledTableCell>
            <StyledTableCell
              sx={{
                backgroundColor: "white !important",
                color: "black !important",
              }}
              align="center"
            >
              Type
            </StyledTableCell>
            <StyledTableCell
              sx={{
                backgroundColor: "white !important",
                color: "black !important",
              }}
              align="center"
            >
              Description
            </StyledTableCell>
            <StyledTableCell
              sx={{
                backgroundColor: "white !important",
                color: "black !important",
              }}
              align="center"
            >
              Price
            </StyledTableCell>
            <StyledTableCell
              sx={{
                backgroundColor: "white !important",
                color: "black !important",
              }}
              align="center"
            >
              Count
            </StyledTableCell>
            <StyledTableCell
              sx={{
                backgroundColor: "white !important",
                color: "black !important",
              }}
              align="center"
            >
              Sub Price
            </StyledTableCell>
            <StyledTableCell
              sx={{
                backgroundColor: "white !important",
                color: "black !important",
              }}
              align="center"
            >
              Delete
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.picture} alt="" width="70" />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>
              <StyledTableCell align="right">
                {row.item.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.price}</StyledTableCell>
              <StyledTableCell align="right">
                <TextField
                  type="number"
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>

              <StyledTableCell align="right">{row.subPrice}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  onClick={() => deleteProductInCart(row.item.id)}
                  startIcon={
                    <DeleteIcon
                      className="delete-icon"
                      sx={{ color: "gray" }}
                    />
                  }
                ></Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ m: 5 }}>
        <Typography variant="h6" component="div">
          Total price: {cart?.totalPrice}
          <Button className="btn-buy" onClick={() => cartCleaner()}>
            BUY
          </Button>
        </Typography>
      </Box>
    </TableContainer>
  );
}
