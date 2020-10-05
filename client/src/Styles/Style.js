import { makeStyles } from "@material-ui/core/styles";
import silhoutte from './silhoutte.png'
import frodo from "./frodo.png";
import eye from "./eye.jpg";
export const useStyles = makeStyles((theme) => ({
	quoteContainer: {
		display: "flex",
	},
	quoteItem: {
		border: "2px solid black",
		width: "100vw",
		display: "flex",
		alignItems: "flex-end",
		flexDirection: "column",
	},
	filmQuoteContainer: {
		width: "95%",
		height: "150px",
		margin: "20px",
		display: "flex",
		justifyContent: "space-around",
	},
	filmQuoteItem: {
		width: "70%",
		height: "150px",
		boxShadow:
			"0 12px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
		borderRadius: "50px",
		background: "linear-gradient(to bottom, #eed0bd 0%, #aa4c12 100%)",
	},
	quote: {
		textAlign: "center",
		padding: "2%",
	},
	sil: {
		backgroundImage: `url(${silhoutte})`,
		backgroundSize: "cover",
		borderRadius: "200px",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	eye: {
		// backgroundImage: `url(${eye})`,
		// backgroundSize: "cover",
		borderRadius: "200px",
		maxWidth: "100%",
        maxHeight: "100%",
        border: "2px solid black",
	},
	Gandalf: {
		backgroundImage: `url(${eye})`,
		backgroundSize: "cover",
		borderRadius: "200px",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	Arwen: {
		backgroundImage: `url(${eye})`,
		backgroundSize: "cover",
		borderRadius: "200px",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	Samwise: {
		backgroundImage: `url(${eye})`,
		backgroundSize: "cover",
		borderRadius: "200px",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	Frodo: {
		backgroundImage: `url(${frodo})`,
		backgroundSize: "cover",
		borderRadius: "200px",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	Gimli: {
		backgroundImage: `url(${eye})`,
		backgroundSize: "cover",
		borderRadius: "200px",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	Aragorn: {
		backgroundImage: `url(${eye})`,
		backgroundSize: "cover",
		borderRadius: "200px",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	buttonGrid: {
		display: "flex",
		justifyContent: "space-around",
	},
}));
