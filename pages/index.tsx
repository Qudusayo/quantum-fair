import { CustomConnectButton } from "@/Components/CustomConnectButton";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
        backgroundImage: "url(/hero_bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        gap: "1em",
      }}
    >
      <Box
        sx={{
          width: "90%",
          margin: "auto",
        }}
      >
        <Typography variant="h2" sx={{ color: "white" }}>
          Create your own raffle
        </Typography>
        <Typography variant="h5" sx={{ color: "white" }}>
          Distribute goods with quantum  randomness on Optimism
        </Typography>
        <Box
          pt={4}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3em",
          }}
        >
          <CustomConnectButton />
          <Typography variant="body1" sx={{ color: "white" }}>
            More info
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
