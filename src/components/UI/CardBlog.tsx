import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Link from "next/link";
type CardBlogProps = {
  BlogLink: string;
};
const CardBlog: React.FC<CardBlogProps> = ({ BlogLink }) => {
  return (
    <Card>
      <Link href={BlogLink}>
        <CardActionArea className="p-3">
          <CardMedia
            sx={{ height: 250, borderRadius: 1 }}
            image="https://s3-alpha-sig.figma.com/img/9c19/65cb/bda13a7366a31db813db48eea2855136?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lUwkoHmNOKyVMllaTzFp4NitXCRjgCTW4rld1Oxo5Ipa7hvchXxkEDxf4WLeUVjn7nwNSAEE~SYYq54oqNb3aNX2PSYswMZ6qA8X-ZTqYo469NXI2Oa1RGXg-p07z4X1xfB22gdqdXun2Pdk13l~tf55t3922dX0At7311cyZHlVRRx5-eHjbIdlorQJt00vwuPr-PxU3nEyfqVqFNYA1bV5tvqCJ5wJKJYvFl7n2ESHRgcSscOVOmvYwLJDCyRwHSPJ7uw1VEFMhqqemEaXYNCxSEDaKBKoW1Z2RPqRtRWWsMYBN2YrRC1Rn4ZVnDQOwLua6JFaYWQkqoPJoRn4uw__"
            title="green iguana"
          />

          <CardContent>
            <Chip
              sx={{
                ".css-6od3lo-MuiChip-label": {
                  fontSize: 10,
                },
              }}
              className="mb-5 rounded-md bg-[#E0E6F6] text-xs text-[#3C65F5]"
              label="News"
            />

            <Typography gutterBottom variant="h5" component="div">
              21 Job Interview Tips: How To Make a Great Impression
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Our mission is to create the world’s most sustainable healthcare
              company by creating high-quality healthcare products in iconic,
              sustainable packaging.
            </Typography>
            <div className="flex items-center justify-between">
              <div className="mt-5 flex h-full items-center justify-start gap-2">
                <Avatar
                  src="https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a18VE~FGFT~v8D9-O~88JSK~y9SE~MefKeuzvSlS0w4mGSL22pIspT3NCxcrlQRWIA7Jm9l5T06ss0sTIxZvYVNnjXZsXNS6-vJjjzvlei5he8HJx4rRgyI3A7IhiSRow90EBIWTjk-SHnh0pZ2M6UurtH5ydxPtGDJyLGaG8vjZo86gmxyeJoYXYIHXsyn5~ILsGVMSiXohp5M0oSdpiR4TTYuPpycTV-qtUMqaq9bjDVZNHP9hfy5Ekip9IInRsI8MfB5jJJ-GCtMirfH0lO2s8IX9GjvtB1aSEuV7rcdHolzjeWoLX3KQeTFwAbDCkNZ5NWDVsYYEvhw91DyaJw__"
                  alt="Ralph Edwards"
                  sx={{ width: 45, height: 45, mr: 1 }}
                />
                <div className="flex flex-col items-start">
                  <h3 className="mb-2 text-sm">Kallie Towne</h3>
                  <p className="text-xs leading-none text-secondary">
                    06 September
                  </p>
                </div>
              </div>
              <span className="text-xs text-secondary">8 mins to read</span>
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CardBlog;
