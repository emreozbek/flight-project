export const styles = theme => ({
  background: {
    display: "block",
    content: "",
    width: "100%",
    height: theme.spacing.unit * 30,
    backgroundColor: theme.palette.secondary.main,
    position: "absolute",
    zIndex: -1
  },
  wrapper: {
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 2}px 0 ${theme
      .spacing.unit * 2}px`,
    maxWidth: 720 + theme.spacing.unit * 4,
    marginLeft: "auto",
    marginRight: "auto"
  }
});
