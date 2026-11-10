import React from "react";
import { useTheme } from "@material-ui/styles";
import { Box, Typography, Divider } from "@material-ui/core";
import update from "immutability-helper";

function TitleTemplate(props) {
  const theme = useTheme();
  const {
    title = "Title",
    titleColor = "textPrimary",
    titleVariant = "h4",
    titleComponent = "h4",
    description = null,
    descriptionColor = "textSecondary",
    descriptionVariant = "body1",
    textMaxWidth = 750,
    divider = true,
    titleAlign = "center",
    id = null
  } = props;

  return (
    <div id={id}>
      <Box margin={theme.spacing(3, "auto")}>
        <Box margin={theme.spacing(2, titleAlign === "center"? "auto" : 0)} maxWidth={textMaxWidth} textAlign={titleAlign}>
          <Typography component={titleComponent} color={titleColor} variant={titleVariant}>
            {title}
          </Typography>
          {description && (
            <Box margin={theme.spacing(1, "auto")}>
              <Typography color={descriptionColor} variant={descriptionVariant}>
                {description}
              </Typography>
            </Box>
          )}
        </Box>
        {divider && <Divider />}
      </Box>
    </div>
  );
}

function Title(props) {
  return <TitleTemplate {...props} />;
}

function SubTitle(props) {
  const newProps = update(props, {
    titleVariant: { $set: "h5" },
  });
  return <TitleTemplate {...newProps} />;
}

export { Title, SubTitle };
