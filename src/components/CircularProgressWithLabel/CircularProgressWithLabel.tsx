/* src: https://mui.com/material-ui/react-progress/ */

import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

export default function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  const [starterValue, setStarterValue] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setStarterValue(props.value);
    }, 400);
  }, []);

  const _props = {
    ...props,
    value: starterValue,
  };

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {..._props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.2)",
          zIndex: "0",
          borderRadius: "100%",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
          letterSpacing={0}
          fontSize="0.75rem"
          fontWeight="500"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
