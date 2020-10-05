import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import silhoutte from "../Styles/silhoutte.png";
import eye from "../Styles/eye.jpg";
import { useStyles } from "../Styles/Style";

function Quotes(props) {
	const [image, setImage] = useState();
	const [classImage, setClassImage] = useState();
	const classes = useStyles();

	const whoSaidIt = (name) => {
		setImage(name);
		if (image === name) {
			setClassImage(image);
		} else {
			setClassImage(eye);
		}
	};

	return (
		<Grid container className={classes.quoteContainer}>
			<Grid item className={classes.quoteItem}>
				{props.quote.map((filmQuote) => (
					<Grid item className={classes.filmQuoteContainer}>
						<Grid item className={classes.quoteImageSil}>
							<img
								className={
									image === filmQuote.contents
										? `classes.${classImage}`
										: classes.sil
								}
								src={silhoutte}
								alt="Who Said It?"
							/>
						</Grid>
						<Grid item className={classes.filmQuoteItem}>
							<Typography className={classes.quote}>
								{filmQuote.title}
							</Typography>

							<Grid item className={classes.buttonGrid}>
								<Button
									variant="contained"
									className={classes.button}
									value="Frodo"
								>
									<Typography>Frodo</Typography>
								</Button>
								<Button
									variant="contained"
									className={classes.button}
									value="Samwise"
								>
									<Typography>Samwise</Typography>
								</Button>
								<Button
									variant="contained"
									className={classes.button}
									value="Gimli"
								>
									<Typography>Gimli</Typography>
								</Button>
								<Button
									variant="contained"
									className={classes.button}
									value="Gandalf"
								>
									<Typography>Gandalf</Typography>
								</Button>
								<Button
									variant="contained"
									className={classes.button}
									value="Aragorn"
								>
									<Typography>Aragorn</Typography>
								</Button>
								<Button
									variant="contained"
									className={classes.button}
									value="Arwen"
									onClick={() => whoSaidIt("Arwen")}
								>
									<Typography>Arwen</Typography>
								</Button>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
}

export default Quotes;
