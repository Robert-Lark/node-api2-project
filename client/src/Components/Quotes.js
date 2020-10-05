import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import silhoutte from '../Styles/silhoutte.png'
import {useStyles} from '../Styles/Style'

function Quotes(props) {
    const classes = useStyles();
	return (
		<Grid container className={classes.quoteContainer}>
			<Grid item className={classes.quoteItem}>
				{props.quote.map((filmQuote) => (
					<Grid item className={classes.filmQuoteContainer}>
						<Grid item className={classes.quoteImageSil}>
							<img className={classes.sil} src={silhoutte} />
						</Grid>
						<Grid item className={classes.filmQuoteItem}>
							<Typography className={classes.quote}>
								{filmQuote.title}
							</Typography>

							<Grid item className={classes.buttonGrid}>
								<Button variant="contained" className={classes.button}>
									<Typography>Frodo</Typography>
								</Button>
								<Button variant="contained" className={classes.button}>
									<Typography>Samwise</Typography>
								</Button>
								<Button variant="contained" className={classes.button}>
									<Typography>Gimli</Typography>
								</Button>
								<Button variant="contained" className={classes.button}>
									<Typography>Gandalf</Typography>
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
