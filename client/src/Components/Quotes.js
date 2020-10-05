import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import sil from "../Styles/silhoutte.png";
import eye from "../Styles/eye.jpg";
import Frodo from "../Styles/frodo.png";
import Arwen from "../Styles/arwen.jpg";
import { useStyles } from "../Styles/Style";
function Quotes(props) {
	const classes = useStyles();
    const [image, setImage] = useState(sil);
	const quoteImage = props.quote.map((image) => {
		return image
    });
	const whoSaidIt = (name, filmQuote) => {
        quoteImage[filmQuote.id] = name
		 if (quoteImage[filmQuote.id] === filmQuote.contents) {
		 	setImage(name);
		 } else {
		 	setImage(eye);
         }
    };
	return (
		<Grid container className={classes.quoteContainer}>
			<Grid item className={classes.quoteItem}>
				{props.quote.map((filmQuote) => (
					<Grid item className={classes.filmQuoteContainer}>
						<Grid item className={classes.quoteImageSil}>
							<img className={classes.eye} src={image} alt="Who Said It?" />
						</Grid>
						<Grid item className={classes.filmQuoteItem}>
							<Typography className={classes.quote}>
								{filmQuote.title}
							</Typography>
							<Grid item className={classes.buttonGrid}>
								<Button
									variant="contained"
									className={classes.button}
									onClick={() => whoSaidIt("Frodo", filmQuote)}
								>
									<Typography>Frodo</Typography>
								</Button>
								<Button
									variant="contained"
									className={classes.button}
									onClick={() => whoSaidIt("Samwise", filmQuote)}
								>
									<Typography>Samwise</Typography>
								</Button>
								<Button
									variant="contained"
									className={classes.button}
									onClick={() => whoSaidIt("Gimli", filmQuote)}
								>
									<Typography>Gimli</Typography>
								</Button>
								<Button
									variant="contained"
									className={classes.button}
									onClick={() => whoSaidIt("Gandalf", filmQuote)}
								>
									<Typography>Gandalf</Typography>
								</Button>
								<Button
									variant="contained"
									className={classes.button}
									onClick={() => whoSaidIt("Aragorn", filmQuote)}
								>
									<Typography>Aragorn</Typography>
								</Button>
								<Button
									variant="contained"
									className={classes.button}
									onClick={() => whoSaidIt("Arwen", filmQuote)}
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
